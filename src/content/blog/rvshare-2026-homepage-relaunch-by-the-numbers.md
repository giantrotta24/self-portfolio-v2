---
title: "What a homepage redesign actually changed: RVshare's 2026 relaunch by the numbers"
description: "Before-and-after Lighthouse numbers from a real production homepage redesign at RVshare — no code, no screenshots, just what actually moved on SEO and accessibility."
pubDate: 2026-07-17
draft: false
---

I spend my workdays on real production websites. The kind with real visitors, real revenue, and real consequences when a page is slow, unclear, or hard to use.

Recently, I was part of the team behind a homepage redesign for RVshare, an RV rental marketplace, working on the performance, SEO, and accessibility side of it. I can't share code or internal details. That belongs to the company.

But I can show you what changed, and talk about the numbers.

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

That's how I prefer to talk about website work anyway. Not "modern." Not "clean." Not "better" because it feels better. Faster load times. Less page shifting. Better SEO checks. Better accessibility checks. The stuff a business owner can actually use to judge whether the work helped.

## The starting point

The old RVshare homepage worked, but it had room to improve. The page was image-heavy, some search and page signals could be clearer, and a few accessibility issues had built up over time.

Baseline Lighthouse scores from the production homepage (desktop, median of 5 runs):

| Metric | Score |
|---|---:|
| Performance | 0.78 |
| Accessibility | 0.72 |
| SEO | 0.85 |

The comparison matters more than any single number. Same kind of test. Same production homepage. Before and after.

## What changed

The redesigned homepage put the main search action front and center, reduced layout shifting while the page loaded, improved the signals search engines read, and cleaned up the accessibility issues Lighthouse flagged.

That's the short version on purpose.

For a business website, the important question isn't whether the work sounded technical. It's whether the page became faster, clearer, easier to understand, and easier to use.

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

In plain English: SEO and accessibility both reached perfect Lighthouse scores, zero failing checks on either. The page also loaded about a third faster and shifted around less while loading.

That doesn't mean the site became perfect. Lighthouse is an audit, not the whole truth. But it's a useful, repeatable check. When SEO and accessibility go from "decent" to a clean 1.00, that tells you something real changed.

## Why this matters for a small business site

Most local business websites don't need a huge rebuild. They need someone to look at the homepage honestly and answer a few simple questions.

Is it fast enough?
Can people find the main action?
Does Google understand the page?
Can visitors using assistive technology get through it?
Is anything broken, confusing, or quietly costing trust?

That's the work I care about.

A good website doesn't have to be flashy. It has to load, explain, guide, and convert. If your site hasn't been checked that way, my [Site Checkup](/contact/) is built for that: real numbers, plain English, and a clear list of what to fix first.
