# Homepage Hero Personality Pass

Scope: homepage hero only (`src/pages/index.astro`). Goal: "a splash more personality" via bolder type + subtle motion, without touching other pages yet. Approved direction: combined A (type-forward) + C (motion-first) from the visual-companion mockups.

## Changes

1. **Bigger, bolder headline.** Bump the `<h1>` size up a step (roughly `text-5xl sm:text-6xl xl:text-7xl`, keep `font-bold`) so it dominates the frame more than it currently does.
2. **Single orange underline** under the closing phrase "not another monthly bill" — wrap that phrase in a `<span>` with a bottom border in `--color-flare`. This is the one deliberate color hit; nothing else in the hero changes color.
3. **Underline draw-in on load** — the border animates from 0% to full width once, on page load, via a CSS `@keyframes` (transform: scaleX, transform-origin: left) rather than animating border-color (cleaner motion). Respect `prefers-reduced-motion: reduce` by skipping straight to the final state (matches the existing pattern already used for the nav icon and status dot).
4. **CTA button lift on hover** — add `transition-transform` + `hover:-translate-y-0.5` (and a touch more shadow) to the "Book a free 15-minute call" button. Secondary "See services" button gets the same treatment for consistency.
5. **Receipt card hover-straighten** — already implemented (`lg:-rotate-2 lg:hover:rotate-0`, `transition-transform duration-300`). No change needed; confirmed while reviewing the current code.

## Out of scope

- Any other page (Services, About, Contact, case studies, blog) — explicitly deferred per the "homepage + hero first" scoping decision.
- The copy-humanization pass on blog posts/case studies — a separate, unrelated thread to pick up after this.

## Verification

Build locally, verify in the browser pane at both rest and hover states (mobile + desktop), confirm `prefers-reduced-motion` skips the draw-in animation. Do not commit/push — stays local until reviewed live.
