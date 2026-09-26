// Sticky-header scroll state: flags the header once the page leaves the top so
// CSS can lift it with a shadow. At rest (scrollY 0) the header stays flat.
// Served same-origin so it stays inside script-src 'self' (an Astro <script>
// in Header.astro would be inlined and change the CSP hash); it touches no
// HTML sinks, so Trusted Types never engages.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let queued = false;

  function update() {
    queued = false;
    header.toggleAttribute('data-scrolled', window.scrollY > 0);
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
