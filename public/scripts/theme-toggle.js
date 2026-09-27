// Header theme toggle. The page follows the OS color scheme until the visitor
// picks one; a pick is stored and applied as data-theme on <html> (Base.astro's
// inline script re-applies it before first paint on later visits). A pick that
// lands back on the OS preference clears itself, so the page follows the
// system again. aria-pressed means "dark is showing", whichever way it got
// there, and stays in sync with OS changes and with other tabs.
// Served same-origin so it stays inside script-src 'self'. The circular reveal
// is a View Transition animated through WAAPI, which CSP's style-src doesn't
// restrict, and nothing here touches an HTML sink, so Trusted Types never
// engages. Reduced motion (or no View Transitions) applies the theme instantly.
(() => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const root = document.documentElement;
  const KEY = 'theme';
  const osDark = matchMedia('(prefers-color-scheme: dark)');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  const system = () => (osDark.matches ? 'dark' : 'light');
  const effective = () => root.getAttribute('data-theme') || system();

  function sync() {
    button.setAttribute('aria-pressed', String(effective() === 'dark'));
  }

  function apply(theme) {
    const follow = theme === system();
    // Storage can throw (Safari private mode, blocked site data); the theme
    // still applies for this page view.
    try {
      if (follow) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, theme);
    } catch {}
    if (follow) root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    sync();
  }

  button.addEventListener('click', () => {
    const next = effective() === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || reduceMotion.matches) {
      apply(next);
      return;
    }
    // Centred on the button, so keyboard activation reveals from it too.
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(() => apply(next));
    // A fast second click skips this transition, which rejects ready; the
    // theme has still been applied, so there is nothing to animate.
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 450, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
        );
      })
      .catch(() => {});
  });

  osDark.addEventListener('change', sync);
  // Another tab changed (or cleared) the stored choice.
  addEventListener('storage', (e) => {
    if (e.key !== KEY && e.key !== null) return;
    const stored = e.key === null ? null : e.newValue;
    if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);
    else root.removeAttribute('data-theme');
    sync();
  });
  sync();
})();
