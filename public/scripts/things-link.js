// Validates the payload for /things/: the URL fragment holds
// encodeURIComponent('things:///add?...'). Only Things' add command with the
// parameters below gets through, so the page can't be used as an open
// redirect or to send an auth-token to any other Things command. The returned
// URL is rebuilt from the parsed parameters rather than passed through, and
// keeps only KEPT_PARAMS: to-dos land bare in the Inbox, with no date, tags,
// or list, even when the link asks for them.
// An unencoded fragment (one that already starts with "things:") is accepted
// as-is, in case a client decodes the link before opening it.
const PREFIX = 'things:///add?';

const ALLOWED_PARAMS = new Set([
  'title',
  'titles',
  'notes',
  'when',
  'deadline',
  'tags',
  'checklist-items',
  'list',
  'heading',
  'show-quick-entry',
  'reveal',
]);

const KEPT_PARAMS = new Set(['title', 'titles', 'notes', 'show-quick-entry']);

export function parseThingsLink(hash) {
  let link = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!link.startsWith('things:')) {
    try {
      link = decodeURIComponent(link);
    } catch {
      return null;
    }
  }
  if (!link.startsWith(PREFIX)) return null;

  const params = [...new URLSearchParams(link.slice(PREFIX.length))];
  if (params.some(([key]) => !ALLOWED_PARAMS.has(key))) return null;

  const get = (key) => params.find(([k]) => k === key)?.[1] ?? '';
  const titles = (get('titles') || get('title'))
    .split(/\r?\n/)
    .map((title) => title.trim())
    .filter(Boolean);
  if (titles.length === 0) return null;

  const query = params
    .filter(([key]) => KEPT_PARAMS.has(key))
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return { url: PREFIX + query, titles, notes: get('notes') };
}
