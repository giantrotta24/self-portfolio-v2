# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Northeast Ohio small-business owners deciding whether to hire Gian for a website rescue, new build, checkup, or care plan. Typical situation: stuck on a monthly builder (Wix, Squarespace, etc.), paying for a site that is slow, hard to find on Google, or both.

Secondary: employers and recruiters evaluating Gian's engineering judgment, shipping standards, and client work (portfolio dual-purpose).

Not yet launched: founders and software leaders deciding whether to hire Gian to move their software delivery from manual, one-at-a-time steps to systems AI runs inside enforced rules. Teams with in-house developers come first; non-technical founders who rely on an outside developer or agency are served too. Served only by `/ai-consulting`, which stays hidden (noindex, out of the sitemap, `llms.txt`, and markdown output, unlinked) until launch.

## Product Purpose

giantrotta.dev is Gian Trotta's freelance marketing site for web work in Cleveland / Northeast Ohio. It sells fixed-price website help and proves the pitch with this site's own speed and findability.

Success: booked free 15-minute discovery calls as the leading metric; signed projects as the outcome.

## Positioning

Senior engineer day job (RVshare since 2019) applied to local owners he can meet in person. Mechanism neighbors cannot copy without lying: get the business off the monthly platform onto a site they own — fast, Google-findable, AI-assistant-visible, no platform subscription.

Site tagline in use: "Your website should bring in customers, not another monthly bill."

## Operating Context

- Services: Website Rescue (flagship), New Website Build, Site Checkup, Care Plan
- AI consulting (hidden page, not launched): sells AI-run delivery, meaning parallel isolated workspaces per task, automated checks on every change, and releases that go out when those checks pass, so a request becomes a live feature without waiting in a queue. People set the rules; enforced checks decide what ships; routine changes merge and deploy on their own and exceptions go to a person. Offers: Delivery Audit (flagship, fixed price, 1–2 weeks; fee comes off a Build), Build (fixed price, 4–6 weeks, on one real product), Support (monthly retainer).
- AI consulting copy: plain English for non-technical buyers, no engineering jargon (no "Docker" or "worktrees" on the page). Proof is Gian's own day-to-day agent setup, described without numbers. Do not feature the EDHLAB human-in-the-loop pipeline as the method; it is out of date. No RVshare mention (the credential stays on /about).
- Geography: Cleveland and Northeast Ohio (Akron, Parma, Lakewood, surrounding suburbs); remote-friendly build; in-person kickoff when local
- Conversion path: free 15-minute call (Cal.com) and Netlify Forms contact
- Content: case studies with before/after numbers, blog posts, availability badge
- Day job credibility: senior engineer on a high-traffic marketplace

## Capabilities and Constraints

Confirmed capabilities on the site:

- Four service doors with fixed-price / retainer framing and stated turnarounds (Rescue 2–3 weeks, New Build 2–4 weeks, Checkup 1 week, Care Plan monthly)
- Case studies, blog (draft-gated), contact form, booking CTA
- Availability toggle in `src/components/AvailabilityBadge.astro` (`open` flag)

Must stay true to what the site and repo currently claim:

- Pricing language (fixed price / monthly retainer framing as published)
- Turnaround times as published on Services
- Availability status ("Taking projects" / "Booked up right now") must match the badge flag

Must never invent:

- Testimonials
- Metrics
- Clients or case studies

Technical constraints for implementers:

- Astro 5 static output; Tailwind 4 tokens in `src/styles/global.css`
- Deploys to Netlify (`netlify.toml`); contact form must remain static HTML with `data-netlify="true"` at build time
- Blog posts ship only when `draft: false`

Undecided: exact dollar prices are not published on the site; do not invent them.

## Brand Commitments

- Name: Gian Trotta; domain: giantrotta.dev
- Voice: plain English, direct, local, no agency fluff
- Identity: Cleveland / Northeast Ohio; senior software engineer who freelances for small businesses
- Assets in repo: about photos (`src/assets/about/`), favicon, public `robots.txt` / `llms.txt`

## Evidence on Hand

Real content and proof only — future work must not fabricate more:

- Case studies: Rusty the Raccoon (Wix rescue), Fresh Beginnings Publishing (findability refresh), EDHLAB (AI shipping on a live game platform)
- Blog: portfolio 72-second load post-mortem; RVshare 2026 homepage relaunch by the numbers
- Lighthouse / screenshot evidence under `docs/evidence/` (before reports for old sites and related audits)
- This site as live demo of the build approach (checkup receipt claims must stay verified against the deployed site)

Absent and must not be invented: third-party testimonials, invented client logos, unverified score claims.

## Product Principles

1. Proof over pitch — numbers and before/after evidence earn the call; do not decorate with fake social proof.
2. Own the site, kill the subscription — the offer is ownership and findability, not another monthly builder.
3. Plain English for owners — scope and outcomes before money; no unexplained jargon.
4. Dual audience without muddying the sale — SMB conversion leads; recruiter/employer proof rides on real case studies and engineering craft.
5. Claims stay verifiable — pricing framing, turnarounds, availability, and metrics must match what's published and measurable.

## Accessibility & Inclusion

Target standard: WCAG 2.2 AA.
