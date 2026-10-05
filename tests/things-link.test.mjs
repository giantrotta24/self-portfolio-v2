import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseThingsLink } from '../public/scripts/things-link.js';

const hashFor = (thingsUrl) => `#${encodeURIComponent(thingsUrl)}`;

test('accepts a single add and rebuilds the same URL', () => {
  const thingsUrl =
    'things:///add?title=Reply%20to%20Sam&notes=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%23inbox%2Fabc&show-quick-entry=true';
  assert.deepEqual(parseThingsLink(hashFor(thingsUrl)), {
    url: thingsUrl,
    titles: ['Reply to Sam'],
    notes: 'https://mail.google.com/mail/u/0/#inbox/abc',
  });
});

test('accepts a titles multi-add', () => {
  const link = parseThingsLink(hashFor('things:///add?titles=Pay%20invoice%0ABook%20dentist'));
  assert.equal(link.url, 'things:///add?titles=Pay%20invoice%0ABook%20dentist&show-quick-entry=true');
  assert.deepEqual(link.titles, ['Pay invoice', 'Book dentist']);
  assert.equal(link.notes, '');
});

test('accepts an unencoded fragment', () => {
  const link = parseThingsLink('#things:///add?title=Call%20Mom');
  assert.equal(link.url, 'things:///add?title=Call%20Mom&show-quick-entry=true');
});

test('drops scheduling and filing parameters', () => {
  const link = parseThingsLink(
    hashFor('things:///add?title=x&when=today&tags=email&list=Work&heading=A&deadline=2026-10-09&checklist-items=a&reveal=true'),
  );
  assert.equal(link.url, 'things:///add?title=x&show-quick-entry=true');
});

test('sets show-quick-entry=true when the link leaves it out', () => {
  const link = parseThingsLink(hashFor('things:///add?title=x&notes=y'));
  assert.equal(link.url, 'things:///add?title=x&notes=y&show-quick-entry=true');
});

test('overrides show-quick-entry=false', () => {
  const link = parseThingsLink(hashFor('things:///add?show-quick-entry=false&title=x&show-quick-entry=no'));
  assert.equal(link.url, 'things:///add?title=x&show-quick-entry=true');
});

test('keeps HTML in titles and notes as literal text', () => {
  const title = '<img src=x onerror=alert(1)>';
  const notes = '<script>alert(1)</script>';
  const link = parseThingsLink(
    hashFor(`things:///add?title=${encodeURIComponent(title)}&notes=${encodeURIComponent(notes)}`),
  );
  assert.deepEqual(link.titles, [title]);
  assert.equal(link.notes, notes);
  assert.ok(link.url.startsWith('things:///add?title=%3Cimg'));
});

test('the page script writes text only and sets href from the rebuilt URL', () => {
  const page = readFileSync(new URL('../public/scripts/things.js', import.meta.url), 'utf8');
  assert.doesNotMatch(page, /innerHTML|outerHTML|insertAdjacentHTML|document\.write|createContextualFragment/);
  assert.match(page, /\.href = link\.url;/);
});

test('rejects an auth-token parameter', () => {
  assert.equal(parseThingsLink(hashFor('things:///add?title=x&auth-token=secret')), null);
});

test('rejects other Things commands', () => {
  assert.equal(parseThingsLink(hashFor('things:///update?id=abc&title=x')), null);
  assert.equal(parseThingsLink(hashFor('things:///json?data=%5B%5D')), null);
  assert.equal(parseThingsLink(hashFor('things:///add-project?title=x')), null);
});

test('rejects non-Things schemes', () => {
  assert.equal(parseThingsLink(hashFor('https://example.com/?title=x')), null);
  assert.equal(parseThingsLink(hashFor('javascript:alert(1)//things:///add?title=x')), null);
});

test('rejects malformed or empty fragments', () => {
  assert.equal(parseThingsLink(''), null);
  assert.equal(parseThingsLink('#'), null);
  assert.equal(parseThingsLink('#things%3A%2F%2F%2Fadd%3Ftitle%3D%E0%A4%A'), null);
  assert.equal(parseThingsLink(hashFor('things:///add?')), null);
  assert.equal(parseThingsLink(hashFor('things:///add?notes=no%20title')), null);
});
