# Chandan Kumar — Portfolio

A recruiter-grade, single-page portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion (motion)**.

The codebase is structured so **all content lives in centralized data files** — to update your portfolio you mostly edit `lib/data/*.ts`, not components.

---

## ✨ Features

- 🎯 Recruiter-friendly one-page layout with anchored sections
- 🎨 Polished light/dark theme with smooth toggle (system-aware)
- 🎬 Smooth scroll-triggered animations: fades, staggers, counters, magnetic buttons, gradient mesh
- 📱 Fully responsive — mobile-first
- ♿ Accessible — semantic HTML, focus styles, reduced-motion respect, skip-to-content link
- 🔎 SEO-optimized — comprehensive metadata, OpenGraph, Twitter cards, JSON-LD structured data
- 🚀 Performance — static generation, font preloading, GPU-accelerated animations
- 🧱 Modular architecture — every section is a self-contained component

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, theme provider
│   ├── page.tsx            # Home — composes all sections
│   ├── not-found.tsx       # Custom 404
│   └── globals.css         # Tailwind + design tokens
│
├── components/
│   ├── fx/                 # Reusable animation primitives
│   │   ├── fade-in.tsx
│   │   ├── stagger-container.tsx
│   │   ├── text-reveal.tsx
│   │   ├── count-up.tsx
│   │   ├── magnetic.tsx
│   │   ├── parallax.tsx
│   │   └── gradient-mesh.tsx
│   │
│   ├── layout/
│   │   ├── navbar.tsx          # Sticky nav with mobile drawer
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx  # next-themes wrapper
│   │   └── theme-toggle.tsx    # Animated sun/moon
│   │
│   ├── sections/           # Page sections (one per file)
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── stats.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx
│   │   └── contact.tsx
│   │
│   └── ui/                 # Core UI primitives
│       ├── button.tsx          # Polymorphic Button / LinkButton / AnchorButton
│       ├── badge.tsx
│       ├── card.tsx
│       ├── section-heading.tsx
│       └── brand-icons.tsx     # Inline SVGs for Github / LinkedIn / X
│
├── lib/
│   ├── constants.ts        # Site config + base metadata
│   ├── types.ts            # TypeScript types for everything
│   ├── utils.ts            # cn(), formatNumber()
│   └── data/               # ⭐ Edit these files to update your portfolio
│       ├── profile.ts      # Name, role, bio, contact, availability
│       ├── nav.ts          # Nav links + social links
│       ├── skills.ts       # Skills grouped by category
│       ├── experience.ts   # Work history
│       ├── projects.ts     # Featured + secondary projects
│       ├── education.ts    # Degrees
│       └── achievements.ts # Milestones + stats
│
└── public/
    ├── resume.pdf          # Drop your actual CV here
    └── ...
```

---

## 🛠️ Editing your portfolio

> **The data layer is your friend.** You should rarely need to touch components.

### Update personal info
Edit `lib/data/profile.ts` — name, role, summary, contact, availability.

### Add / change projects
Edit `lib/data/projects.ts`. Each project has:
- `title`, `summary`, `description`, `impact[]`, `stack[]`
- `icon` (any Lucide icon, e.g. `Smartphone`, `MessageCircle`)
- `accent` (`violet` / `emerald` / `amber` / `rose` / `sky` / `fuchsia`)
- `liveUrl`, `repoUrl`, `featured`

Set `featured: true` on up to 2 projects to highlight them in a larger layout.

### Update experience
Edit `lib/data/experience.ts`. Prepend new roles — they render most-recent-first.

### Tweak stats / achievements
Edit `lib/data/achievements.ts` — both `stats[]` (numeric impact) and `achievements[]` (milestones) live here.

### Add a new section
1. Create `components/sections/your-section.tsx`
2. Import + add it to `app/page.tsx` in the desired position
3. If it needs nav linking, add the anchor to `lib/data/nav.ts`

### Swap the resume file
Drop your real `resume.pdf` into `public/` — it's already referenced at `/resume.pdf`.

---

## 🎨 Design system

- **Colors**: zinc (neutrals), violet → indigo → fuchsia (primary accents). Per-project accents via the `accent` field.
- **Typography**: Geist Sans (body) + Geist Mono (code blocks).
- **Motion**: ease curve `[0.21, 0.47, 0.32, 0.98]` (smooth deceleration), respects `prefers-reduced-motion` everywhere.

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

### Environment

Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain (used in metadata):

```bash
NEXT_PUBLIC_SITE_URL=https://chandanknl.vercel.app
```

---

## 🌐 Deploy

This is a standard Next.js app — drop it on **Vercel**, **Netlify**, **Cloudflare Pages**, or any Node host.

```bash
npm run build
```

The build is fully static (`○  (Static)` in the build output).

---

## 📦 Tech stack

| Layer            | Choice                                      |
| ---------------- | ------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack)          |
| Language         | TypeScript (strict)                         |
| Styling          | Tailwind CSS 4 + custom CSS variables       |
| Animation        | Framer Motion (`motion`)                    |
| Icons            | Lucide React + inline brand SVGs            |
| Theme            | next-themes                                 |
| Utilities        | clsx, tailwind-merge, class-variance-authority |

---

## 📝 License

Personal portfolio — all rights reserved.
