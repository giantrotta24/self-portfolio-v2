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
  open: "#2f9e44"
  booked: "#c92a2a"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
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
    backgroundColor: "{colors.flare-deep}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.flare}"
    textColor: "{colors.porcelain}"
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
- **Rescue Flare** (`flare`): The scarce accent. Hero underline draw-in, nav link underlines, selection highlight, focus rings, primary hover. Keep it rare so it reads as a shop mark, not a theme wash.
- **Rescue Flare Deep** (`flare-deep`): Primary button fill and accent eyebrows. Prefer this for small/normal-weight text on porcelain or white (passes AA where raw flare does not).
- **Rescue Flare Bright** (`flare-bright`): Accent text on ink/dark surfaces only (passes AA on ink).

### Secondary
- **Lake Steel** (`steel`): Links, proof numbers, secondary emphasis. The "found on Google" calm next to orange urgency.

### Neutral
- **Workshop Paper** (`porcelain`): Page background.
- **Harbor Ink** (`ink`): Primary text, secondary button borders, dark CTAs, dashed callout frames.
- **Cool Mist** (`mist`): Secondary body copy, default eyebrows, footer meta.
- **Soft Rule** (`line`): Hairline borders, dotted receipt rules, stat-grid gutters.
- **White** (`white`): Raised paper panels, receipt face, form fields, cards.

### Status
- **Status Green** (`open`) / **Status Red** (`booked`): Availability badge only. Do not reuse as general success/error chrome unless the meaning is literally availability.

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
- **Display** (700, ~`text-5xl`→`text-7xl` on hero, tight tracking): Homepage hero and page H1s.
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

### Named Rules
**The Flat-By-Default Rule.** At rest, surfaces are flat. Shadows appear for hover, the receipt, or ephemeral chrome (mobile menu). Do not pre-elevate every card.

## Shapes

Square and paper-hard. Buttons, inputs, cards, and CTAs use **0px radius**. Soft pills and rounded SaaS cards are out of character.

Recurring silhouettes:
- **Torn receipt:** Conic-gradient mask on top/bottom edges (~22px tooth) — the system's signature shape.
- **Hairline boxes:** `1px solid line` or `border-ink` on white.
- **Dashed callouts:** `border-2 border-dashed border-ink` (booking nudge, footer top rule uses dashed `line`).
- **Section underline:** 4px solid flare under `.section-heading`; hero phrase uses a thicker 6px flare underline that draws in on load.

### Named Rules
**The Zero Radius Rule.** Interactive chrome and content cards stay square. Tiny rounded bars inside the hamburger icon are the only intentional round geometry.

## Components

Component feel: **square and decisive, paper and ink** — sharp CTAs, white panels on porcelain, dashed callouts, receipt logic for proof.

### Buttons
- **Shape:** Square (0 radius).
- **Primary (`.btn-primary`):** `flare-deep` fill, porcelain text, `0.75rem 1.5rem`, semibold. Hover: lift 2px, fill `flare`, soft shadow. Respects `prefers-reduced-motion`.
- **Secondary (`.btn-secondary`):** Ink 1px border, transparent fill. Hover: ink fill, porcelain text, same lift.
- **Nav CTA ("Book a checkup"):** Ink fill, smaller padding (`px-4 py-2`); hover to steel.
- **Focus:** Global `:focus-visible` — 3px solid flare, 2px offset.

### Cards / Containers
- **Corner Style:** Square.
- **Background:** White on porcelain; flagship service door may invert to ink with porcelain type.
- **Border:** `1px solid line`; hover often darkens to ink and adds soft lift shadow.
- **Internal Padding:** Typically `p-8` (2rem).
- **Dashed callout:** Strong ink dashed frame for "not sure / book a call" blocks.

### Inputs / Fields
- **Style:** White fill, `1px solid line`, square, `px-4 py-3`, full width in form column.
- **Labels:** Semibold ink above the field.
- **Focus:** Global flare focus ring (no custom glow).
- **Error / Disabled:** Not specialized in the system yet; keep square paper styling if added.

### Navigation
- **Header:** Hairline bottom border; display wordmark `Gian Trotta` + flare period.
- **Links:** Mist by default; hover/current → ink with flare underline scale-x reveal.
- **Mobile:** Checkbox-driven drawer; Escape closes; full-viewport dismiss label.
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
- Diagram dash-flow animations only where those SVGs exist; always gated by `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** lead proof with real numbers, receipts, and before/after evidence styled as printouts.
- **Do** keep primary actions on `flare-deep` and accents scarce.
- **Do** use square corners and white-on-porcelain paper stacking.
- **Do** put section titles on `.section-heading` so the short orange rule stays consistent.
- **Do** honor `prefers-reduced-motion` for lift, underline draw, ping dots, and scroll reveals.
- **Do** keep Netlify contact forms as static HTML with `data-netlify="true"` when touching Contact.

### Don't:
- **Don't** round buttons, fields, or cards into pills or soft SaaS radii.
- **Don't** flood pages with flare orange or treat it as a full-bleed brand wash.
- **Don't** invent testimonials, metrics, clients, or unverified scores to fill empty proof slots.
- **Don't** add ambient multi-layer shadows on resting cards.
- **Don't** swap display fonts mid-paint in a way that causes CLS (avoid `font-display: swap` for Bricolage).
- **Don't** wrap the contact form in a client-only component that strips Netlify attributes at build time.
