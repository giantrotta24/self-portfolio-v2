// Cal.com booking, loaded lazily: this defines window.Cal but fetches nothing.
// The real embed script only loads on click, so the button costs ~0 bytes until used.
// Served as a static same-origin file (not bundled by Astro) so it's covered by
// script-src 'self' permanently — no CSP hash to regenerate when this file changes.

// The site's CSP sets require-trusted-types-for 'script' (a Lighthouse best-practice
// fix). Cal's own loader isn't Trusted-Types-aware — it assigns a plain string to
// script.src — so without a policy that assignment throws and the button silently
// does nothing. A "default" policy is the standard escape hatch for exactly this:
// any not-Trusted-Types-aware third-party script gets piped through it automatically.
if (window.trustedTypes && trustedTypes.createPolicy) {
  trustedTypes.createPolicy('default', {
    createHTML: (s) => s,
    createScript: (s) => s,
    createScriptURL: (s) => s,
  });
}

(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, 'https://app.cal.com/embed/embed.js', 'init');

document.getElementById('book-call')?.addEventListener(
  'click',
  function (e) {
    e.preventDefault();
    Cal('init', { origin: 'https://cal.com' });
    Cal('ui', {
      styles: { branding: { brandColor: '#e8531f' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
    Cal('modal', { calLink: 'gian-trotta-wysuez/15min' });
  },
  { once: true }
);
