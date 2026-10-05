// Validates the payload for /things/: the URL fragment holds
// encodeURIComponent('things:///add?...'). Only Things' add command with the
// parameters below gets through, so the page can't be used as an open
// redirect or to send an auth-token to any other Things command. The returned
// URL is rebuilt from the parsed parameters rather than passed through. It
// keeps only title(s) and notes, so to-dos land bare in the Inbox with no
// date, tags, or list, and it always sets show-quick-entry=true so nothing
// saves until the person taps Save. Things ignores show-quick-entry for
// `titles`, though: a multi-add saves without confirmation. Values are
// encoded with encodeURIComponent (%20), not URLSearchParams (+), matching
// Things' documented examples.
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

const KEPT_PARAMS = new Set(['title', 'titles', 'notes']);

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
    .concat([['show-quick-entry', 'true']])
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return { url: PREFIX + query, titles, notes: get('notes') };
}
