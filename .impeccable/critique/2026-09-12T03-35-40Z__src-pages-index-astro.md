---
target: homepage
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/giantrotta/Code/self-portfolio-v2/src/pages/index.astro"
target_fingerprint: "sha256:61f5650053fa3e33b79b0a05591347a68c22fd0f2f81ed5056cb9c565b819cda"
target_path: /Users/giantrotta/Code/self-portfolio-v2/src/pages/index.astro
timestamp: 2026-09-12T03-35-40Z
slug: src-pages-index-astro
---
# Critique — Homepage (`src/pages/index.astro`)

**Method:** dual-agent (A: 5154acd6-7649-41fd-bc7e-14551ced8016 · B: a4649cc0-d326-475c-bad4-e1f67cd03daa)

**Live note:** `localhost:4321` was serving a different project (Rusty). Assessment A inspected the portfolio via `127.0.0.1:4323`. Browser MCP overlay injection failed (tabs unstable); no user-visible detector overlay.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Availability badge clear; home not in nav so no aria-current for homepage |
| 2 | Match System / Real World | 4 | Plain English for SMB owners; monthly-bill / Wix language lands |
| 3 | User Control and Freedom | 3 | Escape + Escape for mobile nav; external mid-page links pull off funnel |
| 4 | Consistency and Standards | 2 | "Book a checkup" vs "Book a free 15-minute call" vs Site Checkup product |
| 5 | Error Prevention | 2 | Naming collision; four doors all route to /services/ |
| 6 | Recognition Rather Than Recall | 3 | Labeled actions; receipt self-explains |
| 7 | Flexibility and Efficiency | n/a | Persuade landing — power-user accelerators not expected |
| 8 | Aesthetic and Minimalist Design | 3 | Strong hierarchy; Four ways in + Where I've been add persuasion noise |
| 9 | Error Recovery | 2 | No form on this surface; CTA ambiguity has no recovery copy |
| 10 | Help and Documentation | n/a | Persuade surface — not contextual booking help |
| **Total** | | **22/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Highly specific. Shop Receipt identity (porcelain/ink, torn receipt, scarce flare, zero radius) is authored for this product, not category-swappable. Secondary service doors and "Where I've been" are more generic and dilute the metaphor without erasing it.

**Deterministic scan:** CLI `detect` on homepage markup (`index.astro` + Header/Footer/AvailabilityBadge/StatGrid) returned **0** findings (exit 0). Browser visualization failed (no stable tab; wrong project on :4321). Contaminated URL scans of :4321/:4322 hit Rusty and must be ignored. Earlier site-wide scan (out of scope for this target) had `border-l-4` side-tabs on case-study pages only.

**Visual overlays:** Not available. Injection never ran; no Human-tab overlay to trust.

## Overall Impression

The homepage earns trust with a distinctive proof object and honest voice. The biggest opportunity is conversion clarity: one booking phrase, a mobile-safe hero, and a closing CTA so the visit ends on a handshake instead of a résumé.

## What's Working

1. **Shop Receipt proof object** — Hero receipt does persuasion without fake logos or testimonials.
2. **Voice + honesty** — Monthly-bill pitch, real Rusty rescue, own 72-second story; motion/focus/reduced-motion basics present.
3. **Flagship weight** — Website Rescue ink card correctly leads the service doors.

## Priority Issues

### [P1] CTA vocabulary collision
- **What:** Nav "Book a checkup" vs hero "Book a free 15-minute call" vs product "Site Checkup".
- **Why it matters:** Owners map "checkup" to a paid audit, not a free call — trust drops at the highest-stakes click.
- **Fix:** One booking label everywhere (prefer free-call phrasing). Reserve "checkup" for the Site Checkup service.
- **Suggested command:** `/impeccable clarify`

### [P1] Mobile first viewport clips content
- **What:** At phone widths, headline/CTAs/receipt can clip or overflow.
- **Why it matters:** Distracted mobile users can't finish the pitch or hit secondary paths cleanly.
- **Fix:** Full-width stacked CTAs; receipt without horizontal overflow; tighter hero measure.
- **Suggested command:** `/impeccable adapt`

### [P1] Persuasion ends without a booking CTA
- **What:** After proof, "Where I've been" then footer Email — no second free-call CTA.
- **Why it matters:** Peak-end fails; scrollers leave on a portfolio dump.
- **Fix:** Dashed booking callout after proof (or replace/condense Where I've been).
- **Suggested command:** `/impeccable distill` or `/impeccable layout`

### [P2] "Four ways in" overloads the decision
- **What:** Rescue + three doors + Details; secondary doors share `/services/`.
- **Why it matters:** Too many equal-looking choices before confidence.
- **Fix:** Keep Rescue dominant; collapse secondary into one catalog link or deep anchors.
- **Suggested command:** `/impeccable distill`

### [P3] Funnel exits mid-page
- **What:** External EDHLAB / Clockwork9 / RVshare in Where I've been.
- **Why it matters:** Fine for recruiters; off-ramps for owners before booking.
- **Fix:** Move day-job/freelance proof to About or demote after booking CTA.
- **Suggested command:** `/impeccable quieter`

## Persona Red Flags

**Jordan (First-Timer):** "Book a checkup" reads like buying Site Checkup; Four ways in asks for a pick too early; no mid-page restatement of what the free call is.

**Casey (Distracted Mobile):** Top-only primary CTA; clipped hero; long scroll then external exits without rebooking.

**Riley (Stress Tester):** Checkup label vs contact destination mismatch; secondary doors all land on `/services/` ("broken choice").

**Pat (NE Ohio SMB owner):** Strong Rescue pitch; red flags = checkup upsell wording, no ballpark/"price on the call" near CTA, Where I've been feels not-for-me, end is Email not free call.

**Morgan (Recruiter):** Engineering proof buried under SMB marketing; contact CTA framed as SMB checkup — wrong script for hiring.

## Minor Observations

- Section orange rules and scarce flare match DESIGN.md.
- Availability badge is text + color (not color-only).
- Footer "$0/month" line reinforces the receipt metaphor.
- Homepage CLI detect clean; case-study `border-l-4` is a separate surface issue.

## Questions to Consider

1. If every booking control said only "Book a free 15-minute call," would "checkup" earn its keep anywhere except Site Checkup?
2. Should the first mobile viewport prioritize receipt or CTA stack — can both survive without clipping?
3. What if Where I've been moved to About and the homepage ended on a dashed free-call block?
4. Is Four ways in really four doors, or one Rescue door plus a catalog link?
