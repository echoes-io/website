# Echoes — Website

Public landing page for the [Echoes](https://github.com/echoes-io) project — a multi-timeline literary serial fiction universe.

## Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) + [@echoes-io/brand](https://github.com/echoes-io/brand) (design tokens, timeline colors, typography)
- **Language:** TypeScript (strict)
- **Linting:** [Biome](https://biomejs.dev) (lint + format)
- **Deploy:** GitHub Pages (GitHub Actions)

## Project Phases

### Phase 1 — Landing (current)

Static single-page landing. Introduces the Echoes project, the timelines (Eros, Glow, Pulse, Anima, Bloom), the author, and reader entry points.

### Phase 2 — Reader (future)

Chapter reading pages:
- **Free chapters** → pre-rendered at build time (SEO, indexable, CDN-cached)
- **Paid chapters** → static shell + interactive island that fetches content from AppSync after authentication (Cognito)

The site stays static (`output: 'static'`). Interactivity is confined to [Astro Islands](https://docs.astro.build/en/concepts/islands/).

### Target Architecture (Phase 2)

```
CloudFront → S3 (Astro static site)
                ↓ client-side fetch (paid only)
           Cognito → AppSync (GraphQL) → Lambda → DynamoDB/S3
```

## Local Development

```bash
npm install       # Install dependencies
npm run dev       # Dev server with hot reload
npm run build     # Static build → dist/
npm run preview   # Preview the built site
npm run lint      # Run all linters in parallel
npm run lint:format    # Biome lint + format (auto-fix)
npm run lint:typecheck # TypeScript type checking
npm run lint:lockfile  # Validate lockfile integrity
```

## Structure

```
src/
├── components/       # Astro components (.astro)
│   ├── Hero.astro        # Hero with parallax
│   ├── FadeIn.astro      # Scroll fade-in wrapper
│   ├── Voice.astro       # Timeline quotes
│   ├── WhatIs.astro      # Project description
│   ├── Timelines.astro   # 5 timeline cards
│   ├── Author.astro      # Author section
│   ├── EntryPoints.astro # Reader CTAs
│   └── Footer.astro      # Footer
├── layouts/
│   └── Layout.astro      # Base layout (head, fonts, meta)
├── pages/
│   └── index.astro       # Main page
└── styles/
    └── global.css        # Tailwind + brand tokens
public/
├── images/               # Static images (banners, covers, logos)
└── robots.txt
```

## Deploy

Deploys automatically to GitHub Pages on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

Output directory: `dist/`

## Brand & Design Tokens

Timeline colors, typography, and design tokens come from the `@echoes-io/brand` package. The `src/styles/global.css` file imports the brand's Tailwind preset:

```css
@import 'tailwindcss';
@import '@echoes-io/brand/tailwind';
```

This makes classes like `text-eros-*`, `text-glow-*`, `text-pulse-*`, etc. available, along with `font-heading` (Crimson Pro) and `font-body` (Inter).

## Astro Configuration

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://readechoes.ink',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- `site` sets the canonical URL for meta tags and sitemap
- `base` is `/` with custom domain

## License

ISC — see [LICENSE](./LICENSE)
