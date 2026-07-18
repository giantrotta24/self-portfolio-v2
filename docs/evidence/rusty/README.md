# Rusty the Raccoon — Lighthouse evidence

Captured 2026-07-17 against https://www.rustytheraccoon.com (post-migration).

## After (verified)

| Mode | Perf | A11y | Best Prac | SEO | LCP | Page weight | TTFB |
|------|------|------|-----------|-----|-----|-------------|------|
| Mobile | 98 | 100 | 96 | 100 | 1.8 s | 193 KiB | 30 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 206 KiB | 30 ms |

Reports: `mobile.report.{json,html}`, `desktop.report.{json,html}`.

## Before (partial — no Lighthouse)

The original Wix site is gone. Documented from the 2026-07-12 scrape archive:

- Every page title was `"My Site"` (e.g. `Home | My Site`) — see `~/Code/rusty-the-raccoon/scrape/html/*.html`
- Wix site plan: **$400/yr**, renewal due 2026-08-03 (cancelled same day as migration)
- No before Lighthouse scores were captured before the Wix site came down
