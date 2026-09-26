// Cursor trail: grid-snapped squares light up where the pointer crosses empty
// space, then fade. Runs across the full viewport width, in the vertical bands
// of alternating page blocks (hero on, next off, and so on), and skips text,
// controls, and marked blocks. Mouse only, and off entirely for reduced motion.
// Served same-origin so it stays inside script-src 'self'; it touches no HTML
// sinks, so Trusted Types never engages.
(() => {
  const finePointer = matchMedia('(pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!finePointer.matches || reducedMotion.matches) return;

  const CELL = 24;
  const SQUARE = 12;
  const LIFE_MS = 700;
  const PEAK_ALPHA = 0.75;
  const SKIP =
    'a, button, input, textarea, select, label, p, h1, h2, h3, h4, dt, dd, li, span, strong, aside, header, [data-trail-ignore]';

  const color =
    getComputedStyle(document.documentElement).getPropertyValue('--color-flare').trim() || '#e8531f';

  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-trail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  const ctx = canvas.getContext('2d');

  const lit = new Map();
  let last = null;
  let running = false;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const main = document.querySelector('main');

  function inTrailBand(clientY) {
    if (!main) return false;
    const blocks = [...main.children].filter((el) => el.tagName !== 'SCRIPT');
    const index = blocks.findIndex((block) => {
      const { top, bottom } = block.getBoundingClientRect();
      return clientY >= top && clientY < bottom;
    });
    return index >= 0 && index % 2 === 0;
  }

  function light(clientX, clientY, now) {
    if (!inTrailBand(clientY)) return;
    const target = document.elementFromPoint(clientX, clientY);
    if (!target || target.closest(SKIP)) return;
    const gx = Math.floor((clientX + scrollX) / CELL);
    const gy = Math.floor((clientY + scrollY) / CELL);
    lit.set(`${gx},${gy}`, now);
  }

  function draw(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = color;
    for (const [key, born] of lit) {
      const age = now - born;
      if (age > LIFE_MS) {
        lit.delete(key);
        continue;
      }
      const [gx, gy] = key.split(',').map(Number);
      const remaining = 1 - age / LIFE_MS;
      const size = SQUARE * (0.35 + 0.65 * remaining);
      const inset = (CELL - size) / 2;
      ctx.globalAlpha = PEAK_ALPHA * remaining;
      ctx.fillRect(gx * CELL + inset - scrollX, gy * CELL + inset - scrollY, size, size);
    }
    ctx.globalAlpha = 1;
    if (lit.size) {
      requestAnimationFrame(draw);
    } else {
      running = false;
    }
  }

  function onMove(event) {
    if (event.pointerType !== 'mouse') return;
    const now = performance.now();
    const point = { x: event.clientX, y: event.clientY };
    if (last) {
      const steps = Math.ceil(Math.hypot(point.x - last.x, point.y - last.y) / (CELL / 2));
      for (let i = 1; i <= steps; i++) {
        light(last.x + ((point.x - last.x) * i) / steps, last.y + ((point.y - last.y) * i) / steps, now);
      }
    } else {
      light(point.x, point.y, now);
    }
    last = point;
    if (!running && lit.size) {
      running = true;
      requestAnimationFrame(draw);
    }
  }

  resize();
  addEventListener('resize', resize);
  addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', () => (last = null));
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    removeEventListener('pointermove', onMove);
    lit.clear();
    canvas.remove();
  });
})();
