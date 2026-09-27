// Sticky-header scroll state: flags the header once the page leaves the top so
// CSS can lift it with a shadow (at rest, scrollY 0, it stays flat), and turns
// the GT monogram with the scroll position: clockwise going down, counter-
// clockwise coming back up, and exactly upright at the top. The angle is a pure
// function of scrollY, so it can never drift out of position.
// Served same-origin so it stays inside script-src 'self' (an Astro <script>
// in Header.astro would be inlined and change the CSP hash). It only writes a
// CSS custom property via the CSSOM, which CSP's style-src doesn't restrict,
// and touches no HTML sinks, so Trusted Types never engages. Reduced motion is
// handled in global.css, which ignores --logo-turn under that preference.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const mark = header.querySelector('.logo-mark');

  // One full turn per 1000px scrolled.
  const DEG_PER_PX = 0.36;

  let queued = false;

  function update() {
    queued = false;
    // Clamp: iOS/macOS overscroll bounce at the top reports negative scrollY,
    // which would otherwise tip the mark counter-clockwise past upright.
    const y = Math.max(0, window.scrollY);
    header.toggleAttribute('data-scrolled', y > 0);
    mark?.style.setProperty('--logo-turn', `${(y * DEG_PER_PX).toFixed(2)}deg`);
  }

  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  addEventListener('scroll', onScroll, { passive: true });
  // Restored scroll positions (reload mid-page, back/forward cache) don't
  // always fire a scroll event, so sync on load and on pageshow too.
  addEventListener('pageshow', update);
  update();
})();
