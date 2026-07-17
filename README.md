# giantrotta.dev

The 2026 rebuild of [giantrotta.dev](https://giantrotta.dev) — from an outdated 2019 Gatsby portfolio into a freelance-marketing site for web work in Cleveland / Northeast Ohio.

> Your website should be bringing you customers — not costing you a subscription.

## Stack

- [Astro 5](https://astro.build) — static output, zero client JS by default
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`, design tokens in `src/styles/global.css` (`@theme`)
- [Bricolage Grotesque](https://fontsource.org/fonts/bricolage-grotesque) variable font for display type, system stack for body
- Deploys to **Netlify** (`netlify.toml`), which also hosts the domain's DNS

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Structure

```
src/
  components/   SEO.astro (meta + JSON-LD), Header, Footer
  layouts/      Base.astro
  pages/        index, services, about, contact, case-studies/, blog/
  content/      blog/ markdown posts (content collection, draft-gated)
  styles/       global.css (Tailwind theme tokens)
public/         robots.txt, llms.txt, favicon
docs/evidence/  "Before" Lighthouse reports + full-page screenshots of the
                old sites — case-study source material. Do not delete.
```

## Notes for future me

- **Availability status light:** flip `const open` in `src/components/AvailabilityBadge.astro` — `true` = pulsing green dot + "Taking projects", `false` = solid red dot + "Booked up right now". Labels live right next to the flag.
- **Netlify Forms:** the contact form must stay static HTML with `data-netlify="true"` present at build time. Don't wrap it in a client-side component or the build bot won't register it.
- **Blog posts** ship when `draft: false` in frontmatter.
- **JSON-LD** (`ProfessionalService` + `Person`) lives in `src/components/SEO.astro`.
- Planned: `.md` versions of pages + richer `llms.txt` via a custom build step; Cal.com booking embed on Contact as a lazy island.
- The hero "checkup receipt" numbers (100/100, sub-second) must be verified against the deployed site before launch.

## History

The previous iterations, for archaeology:

- [`gatsby-portfolio`](https://github.com/giantrotta24/gatsby-portfolio) — the 2019 build that was live until this one (72-second mobile LCP, thanks to a single 23.5 MB PNG — see `docs/evidence/`)
- [`self-portfolio-2024`](https://github.com/giantrotta24/self-portfolio-2024) — a 2024 Astro attempt that never reached the domain
