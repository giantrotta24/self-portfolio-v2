---
title: "What a homepage redesign actually changed: RVshare's 2026 relaunch by the numbers"
description: "Before-and-after Lighthouse numbers from RVshare's 2026 homepage redesign, focused on what moved for SEO and accessibility."
pubDate: 2026-07-17
draft: false
---

Most website redesign talk gets vague fast.

I care more about the boring checks. Did the page get faster? Is the main action easier to find? Can Google read the page more clearly? Did accessibility improve?

I was part of the team on a homepage redesign for RVshare, an RV rental marketplace. My slice was performance, SEO, and accessibility. I can't share company details. The public before-and-after numbers are enough.

<figure class="my-10 border border-line bg-porcelain p-4 sm:p-6 not-prose">
  <figcaption class="font-utility text-xs uppercase tracking-widest text-mist">
    rvshare.com · before and after
  </figcaption>
  <div class="mt-4 grid gap-4 sm:grid-cols-2">
    <div>
      <p class="mb-2 font-utility text-sm font-bold text-ink">Before</p>
      <picture>
        <source srcset="/blog/rvshare-2026-homepage-relaunch-by-the-numbers/before.webp" type="image/webp" />
        <img
          src="/blog/rvshare-2026-homepage-relaunch-by-the-numbers/before.png"
          alt="The old RVshare homepage — a photo-driven hero with the search box overlaid on a lifestyle image"
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          class="w-full border border-line"
        />
      </picture>
    </div>
    <div>
      <p class="mb-2 font-utility text-sm font-bold text-ink">After</p>
      <picture>
        <source srcset="/blog/rvshare-2026-homepage-relaunch-by-the-numbers/after.webp" type="image/webp" />
        <img
          src="/blog/rvshare-2026-homepage-relaunch-by-the-numbers/after.png"
          alt="The redesigned RVshare homepage — a search-first hero over a plain background"
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
          class="w-full border border-line"
        />
      </picture>
    </div>
  </div>
</figure>

Those are the parts worth talking about. Speed. Clarity. Fewer small blockers between a visitor and what they came to do.

## The starting point

The old RVshare homepage worked. It also carried some baggage: heavy imagery, a search action that could have been clearer, and accessibility issues that had piled up.

Baseline Lighthouse scores from the production homepage (desktop, median of 5 runs):

| Metric | Score |
|---|---:|
| Performance | 0.78 |
| Accessibility | 0.72 |
| SEO | 0.85 |

Same page. Same kind of test. Before and after.

## What changed

Search got harder to miss. The page jumped around less while it loaded. Search-engine signals got cleaned up. The accessibility issues Lighthouse flagged got fixed.

For a business site, that's most of the job: load fast, make the next step obvious, work for more people, and give Google a page it can understand.

## The results

Measured before and after on the live production site, desktop:

| Metric | Before → After |
|---|---:|
| Largest Contentful Paint | 2,077 ms → 1,393 ms (-33%) |
| Cumulative Layout Shift | 0.067 → 0.027 (-60%) |
| Speed Index | 2,844 ms → 2,347 ms (-17%) |
| SEO score | 0.85 → 1.00 |
| Accessibility score | 0.72 → 1.00* |

\*Accessibility reached a 1.00 Lighthouse score a few days after launch, after one flagged issue was fixed.

SEO and accessibility both hit 1.00 in Lighthouse, with zero failing checks. The page also loaded about a third faster and shifted less while loading.

Lighthouse isn't the whole story. It is a useful, repeatable check. When the same production homepage moves from 0.85 to 1.00 on SEO and 0.72 to 1.00 on accessibility, something real got fixed.

## Why this matters for a small business site

Most small-business sites don't need a grand relaunch. They need someone to look at the homepage and say what's helping and what's in the way.

Maybe it's speed. Maybe the contact button is buried. Maybe Google is missing basic signals. Maybe the site "works," but only if the visitor is patient.

That's the work I care about.

A business website doesn't need to impress other web designers. It needs to help someone take the next step. If yours hasn't been checked that way in a while, my [Site Checkup](/contact/) is built for it: real numbers, plain language, and a clear list of what to fix first.
