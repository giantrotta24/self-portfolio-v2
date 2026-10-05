// /things/#<encoded things:///add URL>: opens Things' quick entry. Reads only
// location.hash, which never reaches the server. Redirects on load and also
// fills the "Open in Things" button, since iOS Safari may only follow a custom
// scheme from a tap. Served same-origin for script-src 'self'; text goes in
// through textContent, so nothing touches a Trusted Types sink.
import { parseThingsLink } from './things-link.js';

// A second link opened in the same tab only changes the hash; start over.
addEventListener('hashchange', () => location.reload());

const link = parseThingsLink(location.hash);

if (link) {
  document.querySelector('[data-things-open]').href = link.url;

  const list = document.querySelector('[data-things-titles]');
  for (const title of link.titles) {
    const item = document.createElement('li');
    item.textContent = title;
    list.append(item);
  }

  if (link.notes) document.querySelector('[data-things-notes-text]').textContent = link.notes;
  else document.querySelector('[data-things-notes]').remove();

  document.querySelector('[data-things-valid]').hidden = false;
  location.replace(link.url);
} else {
  document.querySelector('[data-things-invalid]').hidden = false;
}
