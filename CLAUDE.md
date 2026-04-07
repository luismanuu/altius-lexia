# Altius Lexia — Legal Tech Firm Website

## Project
Client demo website for **Altius Lexia**, a legal tech firm in Ecuador specializing in Data Privacy, Cybersecurity, and Intellectual Property for tech companies.

## Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Icons:** Material Symbols Outlined (thin-stroke, weight 200)

## Design System: "The Sovereign Blueprint"
Full design system documented in `DESIGN.md`. Reference HTML implementation in `docs/reference-design.html`.

### Design Tokens (from Stitch)
```
Colors:
  surface: #0c141f (primary background)
  surface-container: #18202c (sidebars, nav)
  surface-container-low: #141c28 (secondary layers)
  surface-container-high: #222a37 (input backgrounds)
  surface-container-highest: #2d3542 (cards, active modules)
  surface-container-lowest: #070f1a (deepest blacks, footer)
  surface-bright: #323a46 (glass panels)
  primary: #fbf5dc (champagne gold — headlines, highlights)
  primary-container: #ded9c1 (CTAs, buttons, accents)
  primary-fixed-dim: #ccc7af (tertiary text links)
  on-primary: #333120 (text on primary buttons)
  on-primary-container: #615f4c (text on primary-container)
  on-surface: #dbe3f3 (body text on dark bg)
  outline: #949186 (subtitle text, muted)
  outline-variant: #49473e (ghost borders at 15% opacity)
  secondary-container: #4c4a39 (chips, tags)
  on-secondary-container: #bdb9a3 (chip text)
  error: #ffb4ab
  error-container: #93000a
```

### Typography
- **Display/Headlines:** `Outfit` (300/400/700/800) — architectural, geometric
- **Editorial/Quotes:** `Instrument Serif` (italic) — human, classic
- **Technical/Meta:** `JetBrains Mono` (400/700) — precision data, case numbers
- **Body:** `Outfit` or `Inter` — high-density reading at #94A3B8

### Critical Design Rules
1. **No-Line Rule:** NO 1px solid borders. Use background color shifts between sections.
2. **Ghost Borders only:** If border needed, use `outline-variant` at 15% opacity.
3. **No pure black:** Deepest color is `surface-container-lowest` (#070f1a).
4. **Thin-stroke icons only:** Material Symbols Outlined with weight 200. Never filled/chunky.
5. **Glassmorphism** for floating elements: `rgba(50, 58, 70, 0.4)` + `backdrop-blur: 20px`.
6. **Asymmetric layouts:** Off-center alignments, wide margins, overlapping elements.
7. **No divider lines** between list items — use spacing + subtle hover backgrounds.
8. **Light sections:** Use #F8FAFC for alternating light sections (value props, sectors).

### Content Language
All user-facing content in **Spanish** (Latin American). Code and docs in English.

## Pages
1. **Home** (`/`) — Hero + value props + practice areas + sectors + about/stats + contact CTA
2. **Practicas** (`/practicas`) — Deep dive into 3 service areas with detailed services lists
3. **Sectores** (`/sectores`) — 4 industry verticals with detailed focus areas
4. **Insights** (`/insights`) — Blog/articles placeholder with sample cards
5. **Nosotros** (`/nosotros`) — About the firm, team, mission
6. **Contacto** (`/contacto`) — Full contact form with dynamic subject dropdown

## Reference Files
- `DESIGN.md` — Full design system strategy
- `docs/reference-design.html` — Stitch-generated reference implementation (home page)
- `docs/reference-screen.png` — Screenshot of the reference design
- `docs/client-guidelines.md` — Client copy, sitemap, and brand guidelines
