# Echoes — Website

Landing page e sito pubblico del progetto [Echoes](https://github.com/echoes-io), un universo di serial fiction letteraria.

## Stack

- **Framework:** [Astro](https://astro.build) (output statico)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) + [@echoes-io/brand](https://github.com/echoes-io/brand) (design tokens, colori timeline, tipografia)
- **Linguaggio:** TypeScript (strict)
- **Deploy:** GitHub Pages (GitHub Actions)

## Fasi del progetto

### Fase 1 — Vetrina (attuale)

Single-page landing statica. Presenta il progetto Echoes, le timeline (Eros, Glow, Pulse, Anima, Bloom), l'autore, e i punti di ingresso per il lettore.

### Fase 2 — Reader (futura)

Aggiunta di pagine per la lettura dei capitoli:
- Capitoli **free** → pre-renderizzati a build time (SEO, indicizzabili, CDN-cached)
- Capitoli **paid** → shell statica + island interattivo che fetcha il contenuto da AppSync dopo autenticazione (Cognito)

Il sito resta statico (`output: 'static'`). L'interattività è confinata negli [Astro Islands](https://docs.astro.build/en/concepts/islands/).

### Architettura target (Fase 2)

```
CloudFront → S3 (sito statico Astro)
                ↓ client-side fetch (solo paid)
           Cognito → AppSync (GraphQL) → Lambda → DynamoDB/S3
```

## Sviluppo locale

```bash
# Installa dipendenze
npm install

# Dev server con hot reload
npm run dev

# Build statico
npm run build

# Preview del build
npm run preview

# Type check
npm run check
```

## Struttura

```
src/
├── components/       # Componenti Astro (.astro)
│   ├── Hero.astro        # Hero con parallax
│   ├── FadeIn.astro      # Wrapper con fade-in al scroll
│   ├── Voice.astro       # Citazioni dalle timeline
│   ├── WhatIs.astro      # Descrizione del progetto
│   ├── Timelines.astro   # Card delle 5 timeline
│   ├── Author.astro      # Sezione autore
│   ├── EntryPoints.astro # CTA per iniziare a leggere
│   └── Footer.astro      # Footer
├── layouts/
│   └── Layout.astro      # Layout base (head, fonts, meta)
├── pages/
│   └── index.astro       # Pagina principale
└── styles/
    └── global.css        # Tailwind + brand tokens
public/
├── images/               # Immagini (banner, cover, loghi)
└── robots.txt
```

## Deploy

Il deploy avviene automaticamente su GitHub Pages al push su `main` tramite GitHub Actions (`.github/workflows/deploy.yml`).

La output directory di Astro è `dist/`.

## Brand & Design Tokens

I colori delle timeline, la tipografia e i token di design provengono dal pacchetto `@echoes-io/brand`. Il file `src/styles/global.css` importa il preset Tailwind del brand:

```css
@import 'tailwindcss';
@import '@echoes-io/brand/tailwind';
```

Questo rende disponibili le classi `text-eros-*`, `text-glow-*`, `text-pulse-*`, ecc., oltre ai font `font-heading` (Crimson Pro) e `font-body` (Inter).

## Configurazione Astro

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

- `site` configura l'URL canonico per i meta tag e sitemap
- `base` è `/` con dominio custom (non serve più il prefisso repo-based)

## License

ISC — vedi [LICENSE](./LICENSE)
