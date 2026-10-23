import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { APP_OPEN_TIMEOUT_MS, parseGmailLink, planGmailOpen, prefersGmailApp } from '../public/scripts/gmail-link.js';

const PERSONAL = 'giantrotta24@gmail.com';
const WORK = 'gian@rvshare.com';
const THREAD = '18c3a1b2c3d4e5f6';

function hash(email, thread = THREAD) {
  return `#acct=${email}&t=${thread}`;
}

function assertLocked(link) {
  const app = new URL(link.appUrl);
  assert.equal(app.href, link.appUrl);
  assert.equal(app.protocol, 'googlegmail:');
  assert.equal(app.hostname, '');
  assert.equal(app.username, '');
  assert.equal(app.password, '');
  assert.equal(app.pathname, '/search');
  assert.equal(app.searchParams.get('q'), link.threadId);
  assert.match(app.searchParams.get('accountId'), /^[12]$/);
  assert.equal([...app.searchParams.keys()].join(','), 'q,accountId');

  const web = new URL(link.webUrl);
  assert.equal(web.protocol, 'https:');
  assert.equal(web.host, 'mail.google.com');
  assert.equal(web.pathname, '/mail/');
  assert.equal(web.searchParams.get('authuser'), link.email);
  assert.equal([...web.searchParams.keys()].join(','), 'authuser');
  assert.equal(web.hash, `#all/${link.threadId}`);
}

test('builds an app search URL and a desktop web URL for the personal account', () => {
  const link = parseGmailLink(hash(PERSONAL));
  assert.equal(link.email, PERSONAL);
  assert.equal(link.threadId, THREAD);
  assert.equal(link.appUrl, `googlegmail:///search?q=${THREAD}&accountId=1`);
  assert.equal(
    link.webUrl,
    `https://mail.google.com/mail/?authuser=giantrotta24%40gmail.com#all/${THREAD}`,
  );
  assertLocked(link);
});

test('uses the work account id', () => {
  const link = parseGmailLink(hash(WORK));
  assert.equal(link.email, WORK);
  assert.equal(link.appUrl, `googlegmail:///search?q=${THREAD}&accountId=2`);
  assert.equal(link.webUrl, `https://mail.google.com/mail/?authuser=gian%40rvshare.com#all/${THREAD}`);
  assertLocked(link);
});

test('accepts an encoded email, either parameter order, and hex of either case', () => {
  const encoded = parseGmailLink(`#acct=${encodeURIComponent(PERSONAL)}&t=${THREAD.toUpperCase()}`);
  assert.equal(encoded.email, PERSONAL);
  assert.equal(encoded.threadId, THREAD);

  const flipped = parseGmailLink(`#t=${THREAD}&acct=${WORK}`);
  assert.equal(flipped.email, WORK);
  assert.equal(flipped.threadId, THREAD);
});

test('accepts thread ids at the length bounds', () => {
  assert.equal(parseGmailLink(hash(PERSONAL, 'a'.repeat(10))).threadId, 'a'.repeat(10));
  assert.equal(parseGmailLink(hash(PERSONAL, 'b'.repeat(20))).threadId, 'b'.repeat(20));
});

test('canonicalizes the account email from the allowlist', () => {
  const link = parseGmailLink('#acct=GiantRotta24@Gmail.com&t=18c3a1b2c3d4e5f6');
  assert.equal(link.email, PERSONAL);
  assert.match(link.webUrl, /authuser=giantrotta24%40gmail.com/);
});

test('plans an app attempt then a web fallback on a phone', () => {
  const link = parseGmailLink(hash(PERSONAL));
  assert.deepEqual(planGmailOpen(link, true), {
    first: link.appUrl,
    then: link.webUrl,
    timeoutMs: APP_OPEN_TIMEOUT_MS,
  });
  assert.equal(APP_OPEN_TIMEOUT_MS, 1500);
});

test('plans a direct web open off a phone', () => {
  const link = parseGmailLink(hash(WORK));
  assert.deepEqual(planGmailOpen(link, false), { first: link.webUrl, then: null, timeoutMs: 0 });
});

test('detects iOS and Android, including iPadOS desktop UA', () => {
  assert.equal(prefersGmailApp('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)'), true);
  assert.equal(prefersGmailApp('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)'), true);
  assert.equal(prefersGmailApp('Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0 like Mac OS X)'), true);
  assert.equal(prefersGmailApp('Mozilla/5.0 (Linux; Android 14; Pixel 8)'), true);
  assert.equal(
    prefersGmailApp('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15', 5),
    true,
  );
  assert.equal(
    prefersGmailApp('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15', 0),
    false,
  );
  assert.equal(prefersGmailApp('Mozilla/5.0 (Windows NT 10.0; Win64; x64)'), false);
  assert.equal(prefersGmailApp(''), false);
});

test('rejects anything that is not the two allowlisted fields', () => {
  assert.equal(parseGmailLink(''), null);
  assert.equal(parseGmailLink('#'), null);
  assert.equal(parseGmailLink(null), null);
  assert.equal(parseGmailLink(hash('other@gmail.com')), null);
  assert.equal(parseGmailLink(hash('giantrotta24@gmail.com.evil.com')), null);
  assert.equal(parseGmailLink(hash(` ${PERSONAL}`)), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}`), null);
  assert.equal(parseGmailLink(`#t=${THREAD}`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${THREAD}&url=https://evil.example`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${THREAD}&acct=${WORK}`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${'a'.repeat(9)}`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${'a'.repeat(21)}`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=zzzzzzzzzz`), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${THREAD}g`), null);
  assert.equal(parseGmailLink('#https://evil.example'), null);
  assert.equal(parseGmailLink('#javascript:alert(1)'), null);
  assert.equal(parseGmailLink(`#acct=${PERSONAL}&t=${THREAD}#all`), null);
  assert.equal(planGmailOpen(null, true), null);
});

test('the page script only redirects to the planned URLs and does not log or inject', () => {
  const page = readFileSync(new URL('../public/scripts/gmail.js', import.meta.url), 'utf8');
  assert.doesNotMatch(
    page,
    /innerHTML|outerHTML|insertAdjacentHTML|document\.write|createContextualFragment|fetch\(|sendBeacon|XMLHttpRequest|localStorage|sessionStorage|gtag|analytics|location\.search/,
  );
  assert.match(page, /location\.replace\(plan\.first\)/);
  assert.match(page, /location\.replace\(plan\.then\)/);
  assert.match(page, /\.textContent = link\.email/);
  assert.match(page, /\.href = link\.appUrl/);
  assert.match(page, /\.href = link\.webUrl/);
});

test('the builder source has no other web origin', () => {
  const source = readFileSync(new URL('../public/scripts/gmail-link.js', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /https?:\/\/(?!mail\.google\.com)/);
  assert.match(source, /googlegmail:\/\/\/search/);
});

test('the page stays unlisted', () => {
  const page = readFileSync(new URL('../src/pages/gmail.astro', import.meta.url), 'utf8');
  const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
  const markdown = readFileSync(new URL('../scripts/generate-markdown-pages.mjs', import.meta.url), 'utf8');
  const headers = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
  const nav = readFileSync(new URL('../src/data/nav-links.ts', import.meta.url), 'utf8');
  assert.match(page, /noindex/);
  assert.match(page, /name="referrer" content="no-referrer"/);
  assert.match(page, /Open in Gmail web/);
  assert.match(config, /\/gmail\//);
  assert.match(markdown, /'gmail'/);
  assert.match(headers, /for = "\/gmail"/);
  assert.match(headers, /for = "\/gmail\/\*"/);
  assert.doesNotMatch(nav, /gmail/i);
});
