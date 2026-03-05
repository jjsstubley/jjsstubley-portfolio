# Developer Portfolio

A minimalistic, professional developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Theme:** Light/dark mode with palette (primary `#E6A05A`, secondary `#5B4F43`, etc.), persisted in localStorage
- **Sections:** Hero (with background effect), About, History & Work (scroll-driven timeline), Skills, Contact form
- **Accessibility:** Skip-to-content link, theme toggle, reduced motion support, semantic HTML
- **Extras:** Mouse trail cursor (desktop only), sticky header with mobile menu, copy-email in contact

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Copy and links** – Edit [`data/site.ts`](data/site.ts): name, tagline, email, status, resume URL, social links. Set `avatarUrl: "/avatar.jpg"` if you add a profile image to `public/`.
2. **About** – Edit [`data/about.ts`](data/about.ts).
3. **Timeline / work** – Edit [`data/timeline.ts`](data/timeline.ts): add entries with date, title, description, tech, live/repo URLs.
4. **Skills** – Edit [`data/skills.ts`](data/skills.ts).
5. **Resume** – Add your PDF as `public/resume.pdf` (or change `resumeUrl` in `data/site.ts`).
6. **SEO** – Update `metadata` and the JSON-LD `url` in [`app/layout.tsx`](app/layout.tsx) for your domain.

## Build

```bash
npm run build
npm start
```

## Deploy

Works on Vercel, Netlify, or any Node host. For static export, set `output: 'export'` in `next.config.ts` and run `npm run build`.
