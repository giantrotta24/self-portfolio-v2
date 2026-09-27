---
name: giantrotta.dev
description: Shop-receipt freelance marketing site — proof on the counter for Northeast Ohio web work
colors:
  porcelain: "#f6f5f1"
  ink: "#1e2a32"
  steel: "#35586c"
  flare: "#e8531f"
  flare-deep: "#c03e10"
  flare-bright: "#ff7a45"
  mist: "#5c6b73"
  line: "#d8d5cc"
  white: "#ffffff"
  open: "#268038"
  booked: "#c92a2a"
  flare-hover: "#a8380e"
  flare-fill: "#c03e10"
  field: "#7c878d"
  inverse: "#1e2a32"
  on-inverse: "#f6f5f1"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 4.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  page-x: "1.5rem"
  section-y: "4rem"
  stack: "1.5rem"
  btn-y: "0.75rem"
  btn-x: "1.5rem"
  field: "0.75rem 1rem"
components:
  button-primary:
    backgroundColor: "{colors.flare-fill}"
    textColor: "{colors.on-inverse}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.flare-hover}"
    textColor: "{colors.on-inverse}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
  button-nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  button-nav-cta-hover:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.porcelain}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.field}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2rem"
  receipt:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2.25rem 1.75rem"
  eyebrow:
    textColor: "{colors.mist}"
    typography: "{typography.label}"
  eyebrow-accent:
    textColor: "{colors.flare-deep}"
    typography: "{typography.label}"
---

# Design System: giantrotta.dev

## Overview

**Creative North Star: "The Shop Receipt"**

This site feels like a shop counter after a diagnostic: torn-edge paper, dotted lines, numbers that settle the argument. Warmth comes from the Cleveland neighbor voice, not from soft SaaS chrome. The visitor should feel they could shake hands with the person who wrote the receipt.

Surfaces stay paper-flat. Porcelain page ground, white panels, ink hairlines. Depth arrives through borders, dashed callouts, and a short orange rule under section titles. Shadows show up for hover and for the signature checkup receipt, not as default furniture.

Density is roomy but not sparse: max-width containers, clear section breaks, one job per block. Personality lives in the receipt object, the flare accent used sparingly, square CTAs that lift a hair on hover, and monospace utility labels that read like a printout.

**Key Characteristics:**
- Proof object first: the checkup receipt is the system's signature silhouette
- Zero-radius forms: square buttons, fields, and cards
- Safety-orange accent as a scarce signal (underlines, rules, primary actions)
- Paper stack: porcelain ground → white surfaces → ink/steel type
- Warm plain-English craft, not agency polish

## Colors

A cool workshop paper ground with harbor ink type, lake-steel links, and a scarce rescue-orange accent for action and signature marks.

### Primary
- **Rescue Flare** (`flare`): The scarce accent. Hero underline draw-in, nav link underlines, section-heading rules, selection highlight, focus rings, cursor trail. Keep it rare so it reads as a shop mark, not a theme wash. Never text: it fails AA at text sizes on porcelain (3.4:1).
- **Rescue Flare Deep** (`flare-deep`): Accent eyebrows, accent values, the wordmark period, text-link hovers. Prefer this for small/normal-weight text on porcelain or white (4.9:1 where raw flare fails).
- **Flare Fill / Flare Hover** (`flare-fill` `#c03e10`, `flare-hover` `#a8380e`): The primary button's fill and its hover fill. Hover goes a step deeper (porcelain type 6:1), not to raw flare (3.4:1).
- **Rescue Flare Bright** (`flare-bright`): Accent text on ink/dark surfaces only (passes AA on ink).

### Secondary
- **Lake Steel** (`steel`): Links, proof numbers, secondary emphasis. The "found on Google" calm next to orange urgency.

### Neutral
- **Workshop Paper** (`porcelain`): Page background.
- **Harbor Ink** (`ink`): Primary text, secondary button borders, dark CTAs, dashed callout frames.
- **Cool Mist** (`mist`): Secondary body copy, default eyebrows, footer meta.
- **Soft Rule** (`line`): Hairline borders, dotted receipt rules, stat-grid gutters. Decorative only: never the border that identifies a control.
- **Field Rule** (`field`): Form-field borders. They identify the control, so they need 3:1 against the field and the page (3.4:1 on porcelain).
- **White** (`white`): Raised paper panels, receipt face, form fields, cards.

### Status
- **Status Green** (`open`) / **Status Red** (`booked`): Availability badge and the case-study "shipped" status only. Do not reuse as general success/error chrome unless the meaning is literally status. Green is `#268038` so the "shipped" label passes AA on white (5:1).

### Named Rules
**The Scarce Flare Rule.** Flare colors are a minority voice on any screen. Body text stays ink/mist; orange marks action, proof underlines, and status accents.

**The Contrast Pairing Rule.** On porcelain/white use `flare-deep` for small text. On ink use `flare-bright`. Do not put raw `flare` on body-sized text.

## Typography

**Display Font:** Bricolage Grotesque Variable (system-ui sans fallback)  
**Body Font:** System UI stack (`ui-sans-serif`, system-ui, Segoe UI, Roboto)  
**Label/Mono Font:** System monospace (`ui-monospace`, SF Mono, Menlo)

**Character:** Display is a slightly odd workshop grotesque: confident headlines without luxury-serif theater. Body stays familiar system type so owners never feel locked out. Mono utility type is the "printout" voice for eyebrows, receipt meta, and proof values.

Display font loads with `font-display: optional` (latin subset only) to avoid CLS from mid-load swaps.

### Hierarchy
- **Display** (700, tight tracking): Homepage hero and page H1s. Hero steps `text-4xl` → `text-5xl` → `text-6xl`, then from `lg` scales with `clamp(2.75rem, 4.4vw, 3.25rem)` at leading 1.15. The 3.25rem cap keeps the underlined closing phrase on one line inside the 7/12 hero column; re-check 1024–1280px before raising it.
- **Headline** (700, ~`text-3xl`/`text-4xl`): Section titles with the orange section-heading rule.
- **Title** (700, ~`text-2xl`): Service cards, case-study titles, nested H2s.
- **Body** (400, `text-lg` / 1.125rem, relaxed): Supporting copy; keep measures readable (~max-w-2xl / max-w-3xl for long prose).
- **Label** (mono, 0.75rem, uppercase, `0.1em` tracking): Eyebrows, receipt headers, footer copyright line, table headers in blog prose.

### Named Rules
**The Printout Label Rule.** Uppercase mono labels introduce sections; they never replace headlines.

**The Optional Display Rule.** Do not force webfont swap mid-paint. Prefer `font-display: optional` (or equivalent) for display faces.

## Layout

Spatial model is a centered content column on porcelain, not a dashboard grid.

- **Containers:** `max-w-6xl` for homepage/marketing spreads; `max-w-5xl` for long content pages; `max-w-3xl` for contact/forms. Horizontal padding `px-6` (1.5rem).
- **Section rhythm:** Large vertical padding (`py-16` / `py-20`); hairline or white-band breaks between bands.
- **Grids:** 12-column hero (copy 7 / receipt 5 on large screens); service teasers often 2-up; proof stats as a 1px `line`-gutter mosaic.
- **Responsive:** Stack early; mobile nav is a checkbox peer drawer under the header. Prefer content reflow over shrinking type into illegibility.
- **One job per section:** Headline, short support, one CTA group or one proof object.

### Named Rules
**The Counter Width Rule.** Marketing pages breathe inside max-w-6xl; conversion forms stay narrower (max-w-3xl) so fields feel fillable, not abandoned.

## Elevation & Depth

Flat by default. Borders, white-on-porcelain stacking, and dashed frames carry hierarchy. Shadows are state and signature, not ambient furniture.

### Shadow Vocabulary
- **Receipt drop** (`filter: drop-shadow(0 16px 20px rgb(30 42 50 / 0.18))`): Only on `.receipt-wrap`, so the shadow follows the torn mask.
- **Hover lift** (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): Primary/secondary buttons and card-lift on hover, paired with `translateY(-0.125rem)`.
- **Softer card hover** (same recipe at ~0.08 opacity): Case-study / content cards using `.card-lift`.
- **Mobile nav** (`shadow-lg`): Temporary drawer only.
- **Sticky header lift** (`0 6px 16px -6px rgb(30 42 50 / 0.18), 0 2px 4px -2px rgb(30 42 50 / 0.08)`): Only while the page is scrolled away from the top (`.site-header[data-scrolled]`); fades in over 200ms. At the top the header is flat.
- **After hours:** every shadow above keeps its geometry and switches to black at a higher alpha through `light-dark()`: receipt drop 0.7, hover lift 0.5, softer card hover 0.45, header lift 0.6/0.4, `shadow-lg` 0.5. Light-mode alphas are unchanged.

### Named Rules
**The Flat-By-Default Rule.** At rest, surfaces are flat. Shadows appear for hover, the receipt, or ephemeral chrome (mobile menu, the scrolled sticky header). Do not pre-elevate every card.

## Shapes

Square and paper-hard. Buttons, inputs, cards, and CTAs use **0px radius**. Soft pills and rounded SaaS cards are out of character.

Recurring silhouettes:
- **Torn receipt:** Conic-gradient mask on top/bottom edges (~22px tooth) — the system's signature shape.
- **Hairline boxes:** `1px solid line` or `border-ink` on white.
- **Dashed callouts:** `border-2 border-dashed border-ink` (booking nudge, footer top rule uses dashed `line`).
- **Section underline:** 4px solid flare under `.section-heading`; hero phrase uses a thicker flare text underline (`max(4px, 0.1em)`, offset 0.21em below the baseline to clear Bricolage's 0.18em descenders) that draws in on load. It is a text underline, not a border, so tight leading can't push it into the next line.

### Named Rules
**The Zero Radius Rule.** Interactive chrome and content cards stay square. Tiny rounded bars inside the hamburger icon and the header's GT monogram (which echoes the favicon's rounded tile and flare dot) are the only intentional round geometry.

## Components

Component feel: **square and decisive, paper and ink** — sharp CTAs, white panels on porcelain, dashed callouts, receipt logic for proof.

### Buttons
- **Shape:** Square (0 radius).
- **Primary (`.btn-primary`):** `flare-fill` fill, porcelain (`on-inverse`) text, `0.75rem 1.5rem`, semibold. Hover: lift 2px, fill `flare-hover`, soft shadow. Respects `prefers-reduced-motion`.
- **Secondary (`.btn-secondary`):** Ink 1px border, transparent fill. Hover: ink fill, porcelain text, same lift.
- **Nav CTA ("Book a checkup"):** Ink fill, smaller padding (`px-4 py-2`); hover to steel.
- **Focus:** Global `:focus-visible` — 3px solid flare, 2px offset.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** White on porcelain; the flagship service door inverts to an `inverse` slab with `on-inverse` type and `flare-bright` accents (see Dark mode for its after-hours treatment).
- **Border:** `1px solid line`; hover often darkens to ink and adds soft lift shadow.
- **Internal Padding:** Typically `p-8` (2rem).
- **Dashed callout:** Strong ink dashed frame for "not sure / book a call" blocks.
- **Linked cards:** A card that lifts on hover must go somewhere. Make the whole card one `<a class="group block …">` (homepage rescue door, Services cards), never a lifting `<article>`. It ends with a mono bold affordance line with a trailing arrow ("How a rescue works →", "Ask about a checkup →") that turns `flare-deep` on hover (`flare-bright` on `inverse`); the Services cards also turn it on `:focus-visible`. Keyboard focus is the global flare ring, plus the hover's ink border on bordered cards; no lift on focus.
- **Service → contact prefill:** Services cards link to `/contact/?interest=<key>`, and `public/scripts/contact-prefill.js` starts the message box with that key's opening line, only when the box is empty. The lines live in `src/data/contact-interests.ts` and reach the script through the form's `data-interests` attribute. To add one, add an entry there and link with `contactHref('<key>')`.

### Inputs / Fields
- **Style:** White fill, `1px solid field`, square, `px-4 py-3`, full width in form column.
- **Placeholder:** `mist`, full opacity (browser defaults are too faint, and Firefox dims them further).
- **Labels:** Semibold ink above the field.
- **Focus:** Global flare focus ring (no custom glow).
- **Error / Disabled:** Not specialized in the system yet; keep square paper styling if added.

### Navigation
- **Header:** Sticky to the top of the viewport on a porcelain ground; hairline bottom border; flat at the top, lifts with a soft shadow once the page scrolls. GT monogram (ink rounded tile, porcelain `GT`, flare dot; echoes `favicon.svg`, `aria-hidden`) beside the display wordmark `Gian Trotta` + `flare-deep` period. Below `md` the header shows the monogram alone; the wordmark stays in the link as `sr-only` so it still reads "Gian Trotta." `html` carries `scroll-padding-top: 5.5rem` so anchor jumps clear it. No `transform`/`filter` on the header itself: the mobile drawer's fixed dismiss layer lives inside it.
- **Links:** Mist by default; hover/current → ink with flare underline scale-x reveal.
- **Theme toggle:** Icon button just left of the hamburger (mobile) or the nav links (desktop); outside the drawer so it is one tap on phones. See Dark mode → Theme toggle.
- **Mobile:** Checkbox-driven drawer hanging from the sticky header; capped at the viewport height below the header (`max-h-[calc(100dvh-100%)]`) and scrolls internally so the CTA stays reachable on short screens; Escape closes; full-viewport dismiss label.
- **Footer:** Dashed top border; display wordmark with `flare-deep` period; mist link list; mono copyright line.

### Eyebrow
- Mono uppercase mist label; `.eyebrow-accent` shifts to `flare-deep` for local emphasis (About, case-study kickers).

### Stat Grid
- Mosaic of white cells separated by 1px `line` gutters. Mono bold steel values; eyebrow labels. Proof furniture, not marketing badges.

### Signature: Checkup Receipt
- Slightly rotated on large screens (`-rotate-2`), straightens on hover.
- White paper with torn mask; mono uppercase header; dotted dividers; steel/flare-deep values.
- Drop-shadow on the wrapper only. Treat as a diagnostic slip, not a generic card.

### Motion (component-tied)
- Hero underline draws in once (~500ms, 300ms delay); reduced motion → final state immediately.
- Scroll reveals (`.reveal`) use CSS scroll-driven animation when supported.
- Header scroll state (site-wide via `Base.astro`, `public/scripts/header-scroll.js`): sets `[data-scrolled]` on the header when `scrollY > 0` and writes `--logo-turn` on the GT monogram as a pure function of scroll position (0.36°/px, one turn per 1000px). Scrolling down turns it clockwise, scrolling up turns it back, and it is exactly upright at the top; overscroll bounce is clamped. No transition on the turn, so it tracks the scroll exactly. The rotation only applies under `prefers-reduced-motion: no-preference`.
- Cursor trail (site-wide via `Base.astro`, `public/scripts/cursor-trail.js`): 12px flare squares snap to a 24px grid where a mouse crosses empty space, then shrink and fade over ~700ms. Runs across the full viewport width within the vertical bands of alternating top-level blocks of `<main>` (hero on, the next off, the next on), never in the header or footer. Skips text, controls, the receipt, and `[data-trail-ignore]`. Canvas uses `mix-blend-mode: multiply` in light and `normal` in dark (multiply turns the squares near-black on the dark ground). Mouse only (`pointer: fine`); never runs under reduced motion. JS-driven because CSS can't follow a cursor.
- Diagram dash-flow animations only where those SVGs exist; always gated by `prefers-reduced-motion`.
- Theme switch (circular reveal): clicking the theme toggle wraps the change in a View Transition and grows a `clip-path` circle on `::view-transition-new(root)` from the toggle's centre to the farthest viewport corner (450ms, `cubic-bezier(0.4, 0, 0.2, 1)`); the default root crossfade is off. Under reduced motion, or without View Transitions, the theme applies instantly.
- Theme icon morph: the sun's rays rotate, shrink and fade while a mask cut slides in to leave a crescent (transform 400ms, opacity 250ms). Reduced motion switches it instantly.

## Dark mode

**Creative direction: "After hours."** The same shop counter with the lights down: deep-ink ground, slate panels, porcelain type, a lightened mist, and flare-bright for accent text. The checkup receipt stays lit paper. Every named rule above (Scarce Flare, Contrast Pairing, Zero Radius, Flat-By-Default) holds unchanged. Target: WCAG 2.2 AA in both themes.

### Selector contract
Light is the default. Dark applies under `:root[data-theme="dark"]`, and under `@media (prefers-color-scheme: dark)` for `:root:not([data-theme="light"])`. Those selectors set `color-scheme` (and `--is-dark: 0/1` for the few non-color properties), and every color token is `light-dark(light, dark)`, so one switch flips the palette, native form controls and scrollbars. The OS path is pure CSS and works with JavaScript off. `<meta name="color-scheme" content="light dark">` is in the head.

A stored choice is applied before first paint by a one-line inline script at the top of `Base.astro`'s `<head>` (it reads `localStorage.theme`, accepts only `light`/`dark`, and flags `data-js` on `<html>`). Its sha256 is pinned in `netlify.toml`'s `script-src`; keep it byte-stable.

### Tokens

| Token | Light | Dark | Role |
|---|---|---|---|
| `porcelain` | `#f6f5f1` | `#141c22` | Page ground (deep ink after hours) |
| `white` | `#ffffff` | `#1e2a32` | Raised panels, cards, fields (slate) |
| `ink` | `#1e2a32` | `#f6f5f1` | Primary type, ink borders, dashed callouts |
| `mist` | `#5c6b73` | `#97a5ad` | Secondary copy, eyebrows, placeholders |
| `steel` | `#35586c` | `#82abc1` | Links, proof numbers |
| `line` | `#d8d5cc` | `#34434d` | Decorative hairlines |
| `field` | `#7c878d` | `#71828c` | Form-field borders (3:1 against field and page) |
| `flare` | `#e8531f` | `#e8531f` | Rules, underlines, focus ring, selection, cursor trail. Constant: `cursor-trail.js` reads it as a canvas color |
| `flare-deep` | `#c03e10` | `#ff7a45` | Accent text and borders on the page's own surfaces |
| `flare-bright` | `#ff7a45` | `#ff7a45` | Accent text on `inverse` panels |
| `flare-fill` | `#c03e10` | `#c03e10` | Primary button fill |
| `flare-hover` | `#a8380e` | `#a8380e` | Primary button hover fill |
| `inverse` | `#1e2a32` | `#27353f` | Flagship panel |
| `on-inverse` | `#f6f5f1` | `#f6f5f1` | Type on `inverse` panels and on the primary button |
| `on-accent` | `#ffffff` | `#141c22` | Type on bright chart fills (`bg-steel`, `bg-flare-deep`) |
| `open` / `booked` | `#268038` / `#c92a2a` | `#4cc265` / `#ff6b6b` | Status |

**Role tokens.** Porcelain, white and ink swap roles after hours, which would break the few surfaces whose meaning is fixed: the primary button (it would get dark type on orange), the flagship panel (it would turn into a light card), and white chart type. `flare-fill`, `flare-hover`, `on-inverse`, `inverse` and `on-accent` pin those. Everything else rides the swap; header inversions (nav CTA, GT tile, skip link, secondary-button hover) become light-on-dark chrome, which reads correctly.

### Named rules
**The Lit Receipt Rule.** The checkup receipt stays white paper with ink type in both themes, a lit slip on the dark counter. `.receipt-paper` sets `color-scheme: light` (and re-declares `color`, because inherited text color arrives already resolved), so every token inside resolves to its light value. Anything that states a ratio against white (the med13 contrast swatches) takes `scheme-light` the same way.

**The Flagship Edge Rule.** After hours the flagship door (homepage rescue card, ai-consulting audit card) is raised, not recessed: an `inverse` panel a step lighter than the slate band it sits on, with the section-heading's 4px flare rule along its top edge (`.inverse-edge`, dark only). In light it stays the ink slab. Type inside is `on-inverse`, accents `flare-bright` (4.9:1 on `#27353f`).

### Theme toggle
- One `<button type="button">` in the header, outside the mobile drawer: left of the hamburger on phones, left of the nav links on desktop, clear of the CTA.
- Fixed accessible name "Dark mode"; `aria-pressed` reflects the effective theme, including when it comes from the OS. Synced on OS `change` and on the `storage` event (other tabs).
- 40×40 hit target, `ink` icon (13:1 light, 16:1 dark), `flare-deep` on hover, global flare focus ring, square. The icon is round; the control is not.
- Hidden with `visibility: hidden` until `:root[data-js]`: space is reserved (no layout shift), and with JavaScript off it is out of the tab order and the accessibility tree.
- Icon state is CSS-driven from `--is-dark`, so it is right on first paint with no stored choice: sun (light) → moon crescent (dark).
- Persistence is sticky and self-clearing: a click stores the opposite theme in `localStorage.theme` and sets `data-theme`; if that lands on the OS preference, both are removed and the page follows the system again.
- Logic lives in `public/scripts/theme-toggle.js` (same-origin, `defer`); motion is described under Motion.

## Do's and Don'ts

### Do:
- **Do** lead proof with real numbers, receipts, and before/after evidence styled as printouts.
- **Do** keep primary actions on `flare-deep` and accents scarce.
- **Do** use square corners and white-on-porcelain paper stacking.
- **Do** put section titles on `.section-heading` so the short orange rule stays consistent.
- **Do** honor `prefers-reduced-motion` for lift, underline draw, ping dots, scroll reveals, the header shadow fade, the GT monogram turn, the theme reveal, and the theme icon morph.
- **Do** keep Netlify contact forms as static HTML with `data-netlify="true"` when touching Contact.

### Don't:
- **Don't** round buttons, fields, or cards into pills or soft SaaS radii.
- **Don't** flood pages with flare orange or treat it as a full-bleed brand wash.
- **Don't** invent testimonials, metrics, clients, or unverified scores to fill empty proof slots.
- **Don't** add ambient multi-layer shadows on resting cards.
- **Don't** swap display fonts mid-paint in a way that causes CLS (avoid `font-display: swap` for Bricolage).
- **Don't** wrap the contact form in a client-only component that strips Netlify attributes at build time.
