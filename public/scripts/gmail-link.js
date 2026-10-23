// Validates the fragment for /gmail/. The hash is
// #acct=<email>&t=<threadId> and never reaches the server. Only an allowlisted
// account and a hex thread id get through. Returned URLs are rebuilt from
// those values, so this page cannot be used as an open redirect: the app URL
// is always googlegmail: and the web URL is always https://mail.google.com.
//
// Opening one thread in the iOS Gmail app used to be
// googlegmail:///cv=<threadId>/accountId=<n>. Testers in 2022 found that path
// no longer opens the thread, and a 2023 test got "Unable to understand the
// link" for every path except compose (/co). This page therefore does not
// claim to open the thread. It asks the app to search for the hex id.
// Gmail has no search operator for an API thread id, so a search that does
// open may still not select that thread.
//
// accountId is 1-based, in the order accounts were added on the phone.
// Assumed order: personal first, work second. The web URL passes the email
// as authuser, which Gmail resolves itself.

const ACCOUNTS = new Map([
  ['giantrotta24@gmail.com', 1],
  ['gian@rvshare.com', 2],
]);

const THREAD_ID = /^[0-9a-f]{10,20}$/i;
const ALLOWED_KEYS = new Set(['acct', 't']);

export const APP_OPEN_TIMEOUT_MS = 1500;

export function prefersGmailApp(userAgent, maxTouchPoints = 0) {
  const ua = typeof userAgent === 'string' ? userAgent : '';
  if (/Android/i.test(ua)) return true;
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  // iPadOS 13+ uses a desktop Macintosh UA and reports as a touch device.
  return /Macintosh/i.test(ua) && maxTouchPoints > 1;
}

export function parseGmailLink(hash) {
  if (typeof hash !== 'string' || hash.length === 0) return null;
  const raw = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!raw || raw.includes('#')) return null;

  let params;
  try {
    params = new URLSearchParams(raw);
  } catch {
    return null;
  }

  const entries = [...params.entries()];
  if (entries.length !== 2) return null;
  if (entries.some(([key]) => !ALLOWED_KEYS.has(key))) return null;
  if (entries[0][0] === entries[1][0]) return null;

  const account = params.get('acct');
  const thread = params.get('t');
  if (!account || !thread) return null;
  const email = account.toLowerCase();
  if (!ACCOUNTS.has(email)) return null;

  if (!THREAD_ID.test(thread)) return null;
  const threadId = thread.toLowerCase();
  const accountId = ACCOUNTS.get(email);

  return {
    email,
    threadId,
    appUrl: `googlegmail:///search?q=${encodeURIComponent(threadId)}&accountId=${accountId}`,
    webUrl: `https://mail.google.com/mail/?authuser=${encodeURIComponent(email)}#all/${encodeURIComponent(threadId)}`,
  };
}

// Mobile tries the app, then the desktop web URL if the page is still visible.
// Desktop goes straight to the web URL. `then` is null when there is no second hop.
export function planGmailOpen(link, prefersApp) {
  if (!link) return null;
  if (prefersApp) {
    return { first: link.appUrl, then: link.webUrl, timeoutMs: APP_OPEN_TIMEOUT_MS };
  }
  return { first: link.webUrl, then: null, timeoutMs: 0 };
}
