# Bangladesh Pharmaceutical Society — Website

The website for Bangladesh Pharmaceutical Society (BPS). It is a frontend-only site built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
├─ app/                    # Routes (App Router)
│  ├─ page.tsx             # Home
│  ├─ about/               # History, mission, council, chapters
│  ├─ membership/          # Benefits, tiers, steps, FAQ (FAQPage JSON-LD)
│  ├─ education/           # CPD programmes
│  ├─ events/              # Events calendar (Event JSON-LD)
│  ├─ publications/        # Journal, newsletter, public resources
│  ├─ news/ & news/[slug]  # Newsroom + statically generated articles
│  ├─ contact/             # Contact form (mailto, no backend)
│  ├─ sitemap.ts, robots.ts, manifest.ts, icon.jpg
│  └─ globals.css          # Design tokens (brand colours from the logo)
├─ components/
│  ├─ layout/              # Header, Footer
│  ├─ home/                # Home page sections
│  ├─ cards/               # NewsCard, EventRow
│  ├─ contact/             # ContactForm (client)
│  └─ ui/                  # Reveal, Counter, Button, PageHero, SectionHeading…
├─ data/                   # ALL site content lives here
│  ├─ site.ts              # Name, contact info, social links, photo IDs
│  ├─ navigation.ts        # Header & footer menus
│  └─ content.ts           # Stats, events, news, tiers, FAQs, CPD…
└─ lib/utils.ts
```

## Editing content

Site text lives in `src/data/`. To add a news article, append an entry to `news` in `content.ts`. Its page under `/news/<slug>` is generated at build time and added to the sitemap.

**Before launch, replace these placeholder values with official details:**

- `site.ts`: the phone number, full street address and social media URLs
- `content.ts`: the member statistics, membership fees, Executive Council names (only the roles are shown now), and the sample events and news

## Theme

The brand colours come from the BPS logo (royal blue `#25309b`). They are defined as Tailwind tokens (`brand-50` … `brand-950`) in `src/app/globals.css`, along with three small accent colours (`aqua`, `rose-brand` and `sun`). Photos are real images from Unsplash, served through `next/image`.
