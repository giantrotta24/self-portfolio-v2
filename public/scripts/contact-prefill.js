// Contact form prefill: /contact/?interest=checkup starts the message box with
// that service's opening line, so a visitor who clicked a service card lands
// mid-sentence instead of on a blank box. The lines live in
// src/data/contact-interests.ts and arrive as JSON in the form's
// data-interests attribute; this file holds no copy. Unknown or missing keys
// do nothing, and text already in the box (typed, or restored by the browser
// on back/forward) is never replaced. Without JS the link still lands here.
// Served same-origin so it stays inside script-src 'self' (an Astro <script>
// would be inlined and need a new CSP hash). Setting a textarea's value is not
// a Trusted Types sink, and nothing here touches HTML.
(() => {
  const form = document.querySelector('form[data-interests]');
  const message = form?.querySelector('textarea[name="message"]');
  if (!message) return;

  const key = new URLSearchParams(location.search).get('interest');
  if (!key || message.value.trim() !== '') return;

  let interests;
  try {
    interests = JSON.parse(form.dataset.interests);
  } catch {
    return;
  }
  // hasOwn, so keys like "constructor" or "__proto__" can't match.
  if (!Object.hasOwn(interests, key)) return;

  // Setting value leaves the caret at the end, so tabbing in picks up there.
  message.value = interests[key];
})();
