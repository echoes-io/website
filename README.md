# Echoes Website

Public-facing landing page for Echoes — the literary erotica serial fiction project by Nic Vane.

## Domain

**`readechoes.ink`** (to be registered)

Chosen for brand coherence:
- Substack: `readechoes.substack.com`
- Ream: `reamstories.com/readechoes`
- Website: `readechoes.ink`

The `.ink` TLD signals writing/literature and is short, memorable, and available.

## Purpose

**Phase 1 (current):** A static landing page that converts curious visitors into readers.

Two conversion paths:
1. **"I want to try first"** → Substack (Pulse, free weekly pieces)
2. **"I'm ready to dive in"** → Ream (Eros, serial fiction, subscription)

**Phase 2 (future, when 500+ subscribers):** Evolves into an immersive reading portal with custom reader UX, paywall, and visual identity per arc. Ream/Substack phased out for primary content delivery.

## What This Is NOT

- Not an admin portal (that's `publisher/`)
- Not a content reader (yet — Phase 2)
- Not a blog
- Not an e-commerce site

## Page Structure

Single page, vertical scroll, 6 sections:

### 1. Hero
- Logo (from `@echoes-io/brand`)
- Tagline: one line that captures the promise
- Subtitle: what Echoes is, who it's for (2 lines max)
- CTA primary: "Read free on Substack" → Pulse
- CTA secondary: "Subscribe on Ream" → Eros
- Visual: atmospheric image (no faces, no covers — header image style)

### 2. What is Echoes (~50 words)
The elevator pitch. Key points:
- Literary erotica written by an Italian man in English
- Dual-POV serial fiction (not always male-dominant — varies by arc, often 50/50)
- Women have their own voice and full interiority
- Sex carries emotional weight
- Male narrator is devastatingly honest

### 3. The Timelines (5 cards + Backstage)
| Timeline | Color (500) | Tagline | Description | CTA |
|----------|-------------|---------|-------------|-----|
| **Eros** | Crimson `#e74c64` | The scars | Long-form serial. Dual POV. Literary + explicit. 6 arcs (ALE, ELE, CRI, WORK, MANU, RO). | Read on Ream → |
| **Glow** | Amber `#dba033` | The light | Lighter stories. Joy, connection, laughter. 4 arcs (VALE, GIO, KAREN, BEA). | Read on Ream → |
| **Pulse** | Violet `#7d6b91` | The fragments | Free weekly pieces. One emotion, one scene, one voice. | Read free on Substack → |
| **Anima** | Green `#2fc470` | The depth | Full novels. Tenderness, growth, family. Not explicit. (LONDON, MILAN). | Read on Amazon → |
| **Bloom** | Terracotta `#e87a47` | The blossoming | Discovery, balance, new beginnings. | Coming soon |

**Backstage** (companion content, for subscribers):
| Format | Tier | Description |
|--------|------|-------------|
| **Behind the Curtain** | Perfectly Wrong ($10) | Narrative fragments from her voice. The unsent message. The version that didn't happen. |
| **Behind the Scenes** | The Dose ($5) | Nic-author breaks the fourth wall. Craft notes, choices, the why behind the what. |

Each card shows relevant cover images from `brand/logo/`.

### 4. Who Writes This (~30 words)
- **Nic Vane** — Italian software engineer, father, writes in English
- Tone: brief, mysterious, honest
- No photo (anonymity = brand)
- The angle: "writes the things men don't say — in English, because some truths are easier in a language that isn't yours"

### 5. Entry Points (2 clear paths)
- Try first → Substack (free, no commitment)
- Dive in → Ream (first 5-6 chapters free, then subscription)

### 6. Footer
- Social links: Instagram (TBD), Substack, Ream
- © Nic Vane / Echoes

## Positioning (Reference)

What makes Echoes unique — all of these are true simultaneously:
- **Male author** writing both male AND female POV with equal depth
- **Literary quality** + explicit content (most erotica is either/or)
- **Dual POV** — the women are full characters with their own voice, not just "love interests"
- **Serial fiction online** — weekly drip-feed, subscription model
- **Written in English** by an Italian author who "thinks Italian" (Mediterranean sensibility, emotional directness)
- **Zero competition** in this exact space

What it is NOT:
- Not "male POV only" — POV split varies by arc (50/50 in most, 16% male in WORK, 85%+ male in Glow/Anima)
- Not Italian-language content — English is the primary language
- Not romance with tropes — voice-driven, not trope-driven

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | SvelteKit (static adapter) | Already used in `publisher/`, zero learning curve |
| **Styling** | Tailwind CSS v4 + `@echoes-io/brand` preset | Brand exports a `@theme` preset CSS — import directly, no config JS needed |
| **Fonts** | Crimson Pro (headings) + Inter (body) | Defined in brand package, loaded via Google Fonts |
| **Hosting** | GitHub Pages | Free, auto-deploy via Actions, custom domain + HTTPS included |
| **Images** | Static, from `brand/logo/` | Cover art and banners already generated |
| **Analytics** | Cloudflare Web Analytics (free) or Plausible | Privacy-friendly, no cookies |

## Design Principles

- **Dark mode first** — literary, cinematic, matches the Eros mood
- **Mobile-first** — the target audience reads on phones
- **Typography-forward** — Crimson Pro headings, generous whitespace, max-width 65ch
- **Minimal JS** — static page, almost no interactivity needed
- **Fast** — should score 100 on Lighthouse performance
- **Brand-coherent** — uses the exact color system from `@echoes-io/brand`

## Colors (from brand)

All palettes use Tailwind-style scale (50–950). WCAG AA compliant.

| Palette | Hex (500) | Mood | Usage on landing |
|---------|-----------|------|-----------------|
| Neutral | `#71717a` | UI foundation, structure | Text, backgrounds, borders |
| Primary | `#3b82f6` | Action, interaction | CTAs, links, focus states |
| Eros | `#e74c64` | Passion, intensity, rawness | Eros timeline card, accents |
| Glow | `#dba033` | Intimacy, warmth, everyday light | Glow timeline card |
| Pulse | `#7d6b91` | Introspection, raw emotion | Pulse timeline card |
| Anima | `#2fc470` | Growth, support, tenderness | Anima timeline card |
| Bloom | `#e87a47` | Blossoming, balance, discovery | Bloom timeline card |

## Project Structure (target)

```
website/
├── src/
│   ├── routes/
│   │   ├── +page.svelte       ← Landing (all 6 sections)
│   │   └── +layout.svelte     ← Global layout (fonts, dark mode)
│   ├── lib/
│   │   └── components/        ← Section components
│   └── app.css                ← Tailwind + brand token imports
├── static/
│   ├── images/                ← Covers, banners, hero image
│   └── favicon.ico
├── svelte.config.js           ← Static adapter (GitHub Pages)
├── package.json
└── README.md
```

**Note on Tailwind v4:** No `tailwind.config.js` needed. The brand preset is imported directly in `app.css`:

```css
@import "tailwindcss";
@import url('@echoes-io/brand/exports/tailwind-preset.css');
```

This gives access to all brand utilities (`bg-eros-500`, `text-anima-900`, `font-heading`, etc.) with zero config.

## Relationship to Other Repos

| Repo | Role | Relationship |
|------|------|-------------|
| `brand/` | Design tokens (colors, fonts, logos) | Website imports brand assets |
| `publisher/` | Admin portal (scheduling, image gen, content management) | Completely separate — different audience, different deploy |
| `backstage/` | Companion content (Behind the Curtain + Behind the Scenes) | Mentioned on landing as subscriber-exclusive content |
| `timeline-*` | Content production (chapters, images) | Content lives there, not here |
| `resonance/` | Commercial intelligence (patterns, arc structures) | Informs positioning copy |

## Deployment

Deploys automatically via GitHub Actions on push to `main`.

**How it works:**
1. GitHub Action runs `npm ci` + `npm run build`
2. `actions/upload-pages-artifact@v4` packages the `build/` folder
3. `actions/deploy-pages@v5` publishes to GitHub Pages

**Custom domain setup (one-time):**
1. Register `readechoes.ink`
2. DNS: add 4 `A` records pointing to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Repo Settings → Pages → Source: **GitHub Actions**
4. Repo Settings → Pages → Custom domain: `readechoes.ink` → Save
5. Wait for DNS propagation (~24h), then check "Enforce HTTPS"

No `CNAME` file needed in the repo — GitHub Actions deploy ignores it. The custom domain is configured entirely via repo settings.

## Pre-Launch Checklist

- [ ] Register `readechoes.ink` domain
- [ ] Create Instagram account (@readechoes or @nicvane)
- [ ] Point domain DNS to GitHub Pages IPs (4 A records)
- [ ] Configure custom domain in repo Settings → Pages
- [ ] Write final copy (English)
- [ ] Select/generate hero image
- [ ] Deploy
- [ ] Link from Substack bio
- [ ] Link from Ream profile

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Domain | `readechoes.ink` | Brand coherence (Substack + Ream = "readechoes"), `.ink` = literary, available |
| Separate from publisher | ✅ Yes | Different audience, different deploy lifecycle, clean separation |
| Language | English only (for now) | Content is English, audience is international |
| Author name | Nic Vane (pseudonym) | Already established on Substack |
| First arc featured | ALE | Most accessible entry point, first to publish |
| Email list | Substack only (no separate list yet) | Simplicity; Discord or separate list considered for later |
| Phase 1 scope | Static landing only | Validate product first, build reader portal later |

## Open Questions

| # | Question | Impact |
|---|----------|--------|
| 1 | Instagram handle: `@readechoes` vs `@nicvane`? | Social links on landing |
| 2 | Hero image: which style? (atmospheric/cinematic from existing assets?) | Visual first impression |
| 3 | Exact copy for tagline and sections | Will iterate |

## License

MIT
