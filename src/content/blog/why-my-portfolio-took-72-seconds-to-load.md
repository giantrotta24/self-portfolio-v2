---
title: 'How one image made my website take 72 seconds to load'
description: "My old portfolio scored 65 on Google's speed test and took 72 seconds to show its main content on a phone. The culprit: a single 23.5 MB image. Here's what that means for your site."
pubDate: 2026-07-17
draft: true
---

I get paid to keep a site fast for millions of people every day. Meanwhile, my own portfolio took
72 seconds to load on a phone.

That was not a typo. It also was not some slow 3G torture test. Google's speed test used an average
mobile connection, and the page still made people wait over a minute for the main content. The score
was 65 out of 100. The page weighed 26.5 MB, which is ridiculous. One image did most of the damage.

<figure class="my-10 border border-line bg-porcelain p-4 sm:p-6 not-prose">
  <figcaption class="font-utility text-xs uppercase tracking-widest text-mist">
    giantrotta.dev · before and after
  </figcaption>
  <div class="mt-4 grid gap-4 sm:grid-cols-2">
    <div>
      <p class="mb-2 font-utility text-sm font-bold text-ink">Before</p>
      <picture>
        <source srcset="/blog/why-my-portfolio-took-72-seconds-to-load/before.webp" type="image/webp" />
        <img
          src="/blog/why-my-portfolio-took-72-seconds-to-load/before.png"
          alt="The old giantrotta.dev homepage — a 2019 Gatsby template with a full-bleed photo hero, the 23.5 MB image included"
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
        <source srcset="/blog/why-my-portfolio-took-72-seconds-to-load/after.webp" type="image/webp" />
        <img
          src="/blog/why-my-portfolio-took-72-seconds-to-load/after.png"
          alt="The rebuilt giantrotta.dev homepage — the rescue-angle headline and the site's own checkup receipt"
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

## The culprit was one file

I expected the usual suspects. Too much JavaScript. Some forgotten package. A nest of tracking
scripts from a past version of the site.

Nope. The problem was mostly one file: a 23.5 MB PNG screenshot from a volunteer project I had
worked on years earlier. I had parked it on the homepage as a project thumbnail and then walked away.

Back in 2019, I exported it straight from a design tool, dropped it into the repo, and never opened
dev tools to check what it cost. For years the page looked fine on my machine, so the problem stayed
invisible. Everyone not on solid Wi-Fi paid for it.

## Why this isn't just a "me" problem

This is the part I do not get to hand-wave away. I am a senior engineer. Performance is part of my
job. And I still shipped a portfolio that made a phone wait 72 seconds.

Not because I was missing some secret performance trick. I did what a lot of people do: I published
something, saw that it rendered, and stopped looking. No speed budget. No automated check. No habit
of coming back to measure a page that "worked."

That is how small-business websites get slow. Almost nobody decides, on purpose, to make customers
stare at a blank page. Someone replaces a logo with a giant file. Someone adds a nice hero image.
Someone installs one more plugin because it solves today's problem. The site builder accepts the
upload, the template still looks normal, and the cost only shows up later, in how long people wait.

Wix, Squarespace, and old templates will usually let you do all of that without yelling. That is
convenient until your best-looking asset becomes the thing dragging the whole page down.

If this happened to my own portfolio, it can happen to your site. You would not necessarily know by
clicking around on your laptop.

## What I did about it

The old site was a leftover Gatsby template from my bootcamp days. I scrapped it instead of trying
to nurse it back to health. This site is the rebuild: static output, images sized and compressed for
the space they actually occupy, and no framework shipping JavaScript to the browser by default.

That is the setup I should have used for myself in the first place. It is also the setup I would
rather hand to a client: unremarkable in the ways that matter, fast without a monthly ritual to keep
it that way, and not resting on one screenshot I forgot about.

If you've never checked what your own site weighs, or how long it takes to load on a phone, that's
the point of a [Site Checkup](/contact/). I look at speed, search visibility, and AI-search
visibility, then give you the plain-English version before slow pages start costing you customers
the way that PNG cost me seven years of page loads.
