# Rusty the Raccoon — Lighthouse evidence

## After (verified)

Captured 2026-07-17 against https://www.rustytheraccoon.com (post-migration).

| Mode | Perf | A11y | Best Prac | SEO | LCP | Page weight | TTFB |
|------|------|------|-----------|-----|-----|-------------|------|
| Mobile | 98 | 100 | 96 | 100 | 1.8 s | 193 KiB | 30 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 206 KiB | 30 ms |

Reports: `mobile.report.{json,html}`, `desktop.report.{json,html}`.

## Before (verified)

Captured 2026-07-17 against the still-live Wix free-subdomain copy:
https://michelletrotta20.wixsite.com/my-site
(title confirmed: `Home | My Site`)

| Mode | Perf | A11y | Best Prac | SEO | LCP | Page weight | TTFB |
|------|------|------|-----------|-----|-----|-------------|------|
| Mobile | 76 | 100 | 100 | 92 | **6.5 s** | **1686 KiB** | 1070 ms |
| Desktop | 93 | 96 | 100 | 92 | 1.6 s | 1677 KiB | 1219 ms |

Reports: `before/mobile.report.{json,html}`, `before/desktop.report.{json,html}`.

### Notes

- Custom domain already pointed at the rebuild; this Wix subdomain is the archived builder copy, not the public marketing URL.
- Lighthouse SEO 92 on the before site does **not** mean search was healthy — every page title was still `"My Site"` (same lesson as Fresh Beginnings: audit real SEO surface directly).
- Also documented from the 2026-07-12 scrape/migration: Wix plan **$400/yr** (renewal due 2026-08-03, cancelled), every page titled `"My Site"`.
