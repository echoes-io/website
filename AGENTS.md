# Echoes Website — Agent Context

## Purpose

This repository is the **public-facing website** for the Echoes project — a multi-timeline serial fiction platform. Currently a single-page landing (Phase 1). Will evolve into a reader app with gated content (Phase 2).

## Repository Structure

```
website/
├── src/
│   ├── components/       # Astro components (.astro)
│   ├── layouts/          # Base layout (head, fonts, meta)
│   ├── pages/            # File-based routing
│   └── styles/           # Global CSS (Tailwind + brand)
├── public/
│   ├── images/           # Static images (banners, covers, logos)
│   └── robots.txt
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript (strict, extends astro)
└── package.json
```

## Rules

1. **Output is always static** — `output: 'static'` in astro.config.mjs. No SSR.
2. **Interactivity via Islands only** — if client-side JS is needed, use Astro Islands (React, Svelte, or vanilla `<script>`). Never add a full client-side framework globally.
3. **Brand tokens are canonical** — all colors, fonts, and design tokens come from `@echoes-io/brand`. Do not define custom color values; use the Tailwind classes (`text-eros-400`, `bg-glow-950/30`, `font-heading`, `font-body`).
4. **Images go in `public/images/`** — reference them via `import.meta.env.BASE_URL + 'images/...'`. Never use relative paths for static assets.
5. **BASE_URL aware** — the site is deployed under `/website` on GitHub Pages. All asset references must use `import.meta.env.BASE_URL` or Astro's built-in asset handling.
6. **No dependencies without discussion** — this is a minimal static site. Adding runtime dependencies is a last resort.
7. **Semantic HTML** — use proper heading hierarchy, landmarks, and ARIA where needed.
8. **Dark mode only** — the site uses a dark palette (`bg-neutral-900`, `text-neutral-50`). No light mode toggle.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Tokens | `@echoes-io/brand` (CSS @theme preset) |
| Language | TypeScript (strict) |
| Deploy | GitHub Pages → future: CloudFront + S3 |

## Component Patterns

- **Pure Astro components** for static content (no JS shipped)
- **`<script>` tags** for lightweight interactivity (parallax, IntersectionObserver)
- **Astro Islands** (Phase 2) for authenticated reader components

### Example: adding interactivity

```astro
---
// This runs at build time only
const data = await fetchSomething();
---

<div class="my-component">{data.title}</div>

<script>
  // This ships to the client as a small, scoped module
  const el = document.querySelector('.my-component');
  // vanilla JS interactivity here
</script>
```

## Phase 2 Architecture (Reader)

When the reader is added:

- **Free chapters** → generated at build time via `getStaticPaths()`, full HTML
- **Paid chapters** → static shell + Island component that:
  1. Checks auth (Cognito)
  2. Fetches content from AppSync (GraphQL)
  3. Renders client-side
- The backend already exists in the `publisher` repo (CDK stack with AppSync, Lambda, DynamoDB, S3)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build → `dist/` |
| `npm run preview` | Preview the built site |
| `npm run lint` | Lint with Biome |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Biome |

## Deploy

Push to `main` triggers GitHub Actions → builds → deploys to GitHub Pages.

Output directory: `dist/`

## Timeline Colors (reference)

| Timeline | Mood | Class prefix |
|----------|------|-------------|
| Eros | Passion, intensity | `eros-` |
| Glow | Warmth, intimacy | `glow-` |
| Pulse | Introspection, fragments | `pulse-` |
| Anima | Growth, tenderness | `anima-` |
| Bloom | Discovery, balance | `bloom-` |
