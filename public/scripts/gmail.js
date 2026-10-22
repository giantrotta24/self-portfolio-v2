// /gmail/#acct=<email>&t=<threadId>: opens that thread in Gmail. Reads only
// location.hash, which never reaches the server. On a phone, tries the Gmail
// app, then the desktop web URL if the app does not take the page. Elsewhere,
// goes straight to the web URL. The "Open in Gmail web" link is the same URL,
// for when a custom scheme only follows a tap or the redirect does not run.
// Text goes in through textContent. URLs come from parseGmailLink, which
// rebuilds them, so nothing touches a Trusted Types sink.
import { parseGmailLink, planGmailOpen, prefersGmailApp } from './gmail-link.js';

addEventListener('hashchange', () => location.reload());

const link = parseGmailLink(location.hash);

if (link) {
  const plan = planGmailOpen(link, prefersGmailApp(navigator.userAgent, navigator.maxTouchPoints));

  document.querySelector('[data-gmail-account]').textContent = link.email;
  document.querySelector('[data-gmail-app]').href = link.appUrl;
  document.querySelector('[data-gmail-web]').href = link.webUrl;
  document.querySelector('[data-gmail-valid]').hidden = false;

  let timer;
  const cancel = () => clearTimeout(timer);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') cancel();
  });
  window.addEventListener('pagehide', cancel);

  if (plan.then) {
    timer = setTimeout(() => {
      if (document.visibilityState === 'hidden') return;
      location.replace(plan.then);
    }, plan.timeoutMs);
  }
  location.replace(plan.first);
} else {
  document.querySelector('[data-gmail-invalid]').hidden = false;
}
