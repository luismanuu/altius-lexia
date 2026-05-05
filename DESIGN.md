# Design System: Altius Lexia
**Firm:** Legal Tech — Data Privacy, Cybersecurity, Intellectual Property
**Inspiration:** Hogan Lovells, Fish & Richardson
**Market:** Ecuador tech ecosystem (Startups, Fintech, SaaS, E-commerce)

> Implementation tokens live in `src/app/globals.css`. This document describes the visual system; CSS is the source of truth for hex values.

---

## Configuration

| Dial | Level | Rationale |
|------|-------|-----------|
| **Creativity** | `6` | Editorial confidence without flashiness. Law firm gravitas meets tech-forward thinking |
| **Density** | `3` | Gallery-airy. Generous whitespace signals premium positioning and trust |
| **Variance** | `7` | Asymmetric layouts that feel modern and tech-native, not corporate-stale |
| **Motion Intent** | `5` | Subtle, dignified motion. Spring-physics on interactions, nothing theatrical |

---

## 1. Visual Theme & Atmosphere
A commanding, dark-anchored interface that feels like walking into a glass-walled law office at night — screens glowing, city below. The atmosphere is precise yet progressive: deep blue-black tones dominate, punctuated by a champagne-gold accent that signals authority without opulence. Layouts breathe with generous negative space (Density 3), but the asymmetric grid breaks (Variance 7) prevent any corporate-template staleness. The overall impression: this firm understands code as well as contracts.

The system is named **The Sovereign Blueprint**. Token names below mirror `globals.css` exactly so a designer can grep the same string in code.

## 2. Color Palette & Roles

### Surface scale (dark, blue-black)
- **`surface`** (#0c141f) — Primary background. Body default. Reads as sophisticated, never grim
- **`surface-container`** (#18202c) — Sidebars, navigation containers, elevated chrome
- **`surface-container-low`** (#141c28) — Secondary layers, subtle elevation between `surface` and `surface-container`
- **`surface-container-high`** (#222a37) — Input backgrounds, hovered cells
- **`surface-container-highest`** (#2d3542) — Cards, active modules, the highest opaque elevation
- **`surface-container-lowest`** (#070f1a) — Deepest blacks. Footer, modal scrims. Replaces pure black
- **`surface-bright`** (#323a46) — Glass-panel base color (used with `backdrop-blur`)

### Champagne accents (the firm's signature warmth)
- **`primary`** (#fbf5dc) — Champagne gold. Headlines on dark, highlights, key data points
- **`primary-container`** (#ded9c1) — CTA fills, buttons, badge accents. The "click here" color
- **`primary-fixed-dim`** (#ccc7af) — Tertiary text, muted links, deactivated accents
- **`on-primary`** (#333120) — Text on `primary` surfaces (high contrast warm-dark)
- **`on-primary-container`** (#615f4c) — Text on `primary-container` (CTA labels)

### Text & supporting roles
- **`on-surface`** (#dbe3f3) — Body text on dark backgrounds. Cool-tinted off-white
- **`outline`** (#949186) — Subtitle text, muted meta, secondary copy on dark
- **`outline-variant`** (#49473e) — Ghost borders only, used at 15% opacity (see No-Line rule)
- **`secondary-container`** (#4c4a39) — Chips, tags, low-prominence pills
- **`on-secondary-container`** (#bdb9a3) — Chip text
- **`light-surface`** (#F8FAFC) — Alternating light section background (Practicas, Sectores)
- **`body-muted`** (#94a3b8) — High-density reading body text on dark sections

### Error
- **`error`** (#ffb4ab) / **`error-container`** (#93000a) / **`on-error`** (#690005) — Form errors and destructive states only

### Accent Application Rules
- `primary-container` appears on: primary CTA buttons, active nav indicators, pull-quote borders, section numbering
- `primary` appears on: hero headline text, section number labels, key statistic numerals
- Never used as background fill across full sections (too loud)
- On hover: `primary-container` shifts to `primary` (lighter champagne)

### Banned Colors
- Purple/violet neon gradients
- Pure black (#000000) — use `surface-container-lowest` (#070f1a) instead
- Bright green/neon accents — too startup-casual for a law firm
- Any red as accent — reserved for error states only
- Mixed warm/cool gray systems beyond the documented `outline` family

## 3. Typography Rules

Fonts loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables in `globals.css`:

- **Display:** `Outfit` (`--font-outfit`, weights 300/400/700/800) — Geometric confidence, modern but grounded. Headlines use 700 with track-tight (`-0.02em`), leading compressed (`1.1`). Scales via `clamp(2rem, 4vw, 3.5rem)`
- **Body:** `Outfit` weight 300–400 — Relaxed leading (`1.7`), 65ch max-width. `on-surface` color on dark, `on-primary` on light backgrounds
- **Mono:** `JetBrains Mono` (`--font-mono`, weights 400/700) — Legal reference numbers, article dates, metadata, case identifiers. `0.8125rem` default
- **Editorial Accent:** `Instrument Serif` italic (`--font-instrument`, weight 400 italic) — Used ONLY for pull-quotes and the hero sub-headline. One serif instance per page maximum
- **Icons:** `Material Symbols Outlined` loaded via `<link>` in `layout.tsx`. Always thin-stroke (`'wght' 200`), never filled

### Banned Fonts
- `Inter` — too generic for premium legal positioning
- `Times New Roman`, `Georgia` — traditional law firm cliche, exactly what this firm rejects
- `Montserrat` — despite client suggestion, too rounded/playful for the firm's sharp identity
- `Roboto` — Google's default, reads as template

## 4. Component Stylings
* **Buttons:** Flat. Primary: `primary-container` (#ded9c1) fill with `on-primary-container` (#615f4c) text. No glow, no gradient. Hover: shift to `primary` (#fbf5dc). Active: `scale(0.98)` + `-1px translateY`. Secondary: ghost outline using `outline-variant` at 15% opacity. Border-radius: `0.5rem` (sharp but not brutal)
* **Cards/Containers:** On dark: `surface-container-highest` (#2d3542) fill. On light: `light-surface` / white with whisper shadow `0 20px 40px -15px rgba(7,15,26,0.08)`. Corner radius `1.25rem` (Tailwind `rounded-[1.25rem]`). Internal padding `2rem`. No 1px solid borders — separation comes from the surface-scale step
* **Navigation:** Fixed top. `surface-container` (#18202c) background with `backdrop-blur-md`. Logo left, links center-right. Active link: `primary-container` underline, 2px, offset 8px below. Mobile: full-screen overlay with staggered link reveal
* **Service Cards:** No equal-width grids. Use alternating large/small pattern or horizontal scroll. Each card has a thin `primary-container` top-border accent (2px)
* **Forms:** Dark-mode native. Input backgrounds `surface-container-high` (#222a37). Border: 1px `outline-variant` at 15% opacity. Focus: `primary-container` ring, 2px offset. Labels above, uppercase mono at `0.75rem`. Error: inline, `error` (#ffb4ab)
* **Glass Panels:** Use the `.glass-panel` utility — `rgba(50, 58, 70, 0.4)` (`surface-bright` at 40%) plus `backdrop-filter: blur(20px)`. For floating elements, modals, sticky CTAs over imagery
* **Section Dividers:** No 1px lines. Separate sections by stepping the surface scale (e.g. `surface` → `surface-container-low`) or by 6rem of negative space. If a divider is unavoidable, use `outline-variant` at 15% opacity

## 5. Hero Section
- **Structure:** Split layout. Left 55%: headline stack + CTA. Right 45%: abstract geometric composition or atmospheric photography (night cityscape with code overlay)
- **Headline:** "El derecho a la velocidad de tu codigo." in Outfit 700, `primary` (#fbf5dc), `clamp(2.5rem, 5vw, 4rem)`. Period included — declarative, not questioning
- **Sub-headline:** In Instrument Serif italic, `outline` (#949186), `1.25rem`. "Somos la firma estrategica en Ecuador que protege el activo mas valioso de las Tech Companies: su innovacion."
- **CTA:** Single button. "Agendar Consulta Estrategica" in `primary-container` fill with `on-primary-container` text. No secondary CTA in hero
- **No filler:** No "Scroll to explore", no chevrons, no bouncing arrows
- **Asymmetric:** Left-aligned text block with right visual. NOT centered

## 6. Layout Principles
- **Grid-First:** CSS Grid for all structural layouts. Never flexbox percentage math
- **Dark-to-Light Flow:** Hero and top sections in `surface` (#0c141f). Transition to `light-surface` (#F8FAFC) for content sections (Practicas, Sectores). Return to `surface-container-lowest` (#070f1a) for footer. Creates visual rhythm
- **Feature Sections (Practicas):** NOT 3 equal cards. Use a stacked zig-zag: Section A full-width with left icon/right text, Section B reversed. Generous 4rem vertical gaps
- **Sectors Grid:** 2x2 asymmetric bento. Top-left large (startups — flagship sector), others standard. Not 4 equal cards
- **Containment:** `max-width: 1200px` centered. Horizontal padding: `1.5rem` mobile, `2rem` tablet, `4rem` desktop
- **Full-Height Hero:** `min-height: 100dvh` — never `height: 100vh`

## 7. Responsive Rules
- **Mobile-First Collapse (< 768px):** Single column. Hero splits to stacked (headline above, visual below). Full-width CTAs. `padding: 1.5rem`
- **No Horizontal Scroll:** Critical failure if any element overflows
- **Typography Scaling:** Headlines via `clamp()`. Body never below `1rem`. Sub-headlines never below `0.9375rem`
- **Touch Targets:** All interactive elements minimum `48px` tap target (legal audience may skew older)
- **Navigation Mobile:** Full-screen overlay, `surface` background, centered links in Outfit 600, staggered reveal animation
- **Cards:** Stack vertically with full-width. Maintain `1.5rem` internal padding
- **Testing Viewports:** 375px, 768px, 1024px, 1440px

## 8. Motion & Interaction (Code-Phase Intent)
- **Physics:** Spring-based. `stiffness: 120, damping: 22`. Slightly stiffer than default — conveys precision
- **Entry Animations:** Sections fade-up on scroll entry. 20px translate, 0.6s duration. Staggered for multi-element sections
- **Nav:** Smooth backdrop-blur transition on scroll. Links have underline-grow animation from left
- **Buttons:** `scale(0.98)` on press. `primary-container` hover brightens to `primary` over 300ms
- **Service Cards:** Subtle border-glow on hover — `primary-container` at 20% opacity
- **No Perpetual Motion:** This is a law firm. No floating icons, no typewriter effects, no particle explosions. Motion exists only in response to user action or scroll entry
- **Hardware Rules:** Animate ONLY `transform` and `opacity`

## 9. Anti-Patterns (Banned)
- No emojis anywhere
- No `Inter` font
- No pure black (#000000) — use `surface-container-lowest` (#070f1a)
- No neon glows or gradients
- No 3-column equal card layouts
- No centered Hero
- No overlapping elements
- No "Scroll to explore", scroll arrows, bouncing chevrons
- No generic names ("John Doe", "Acme")
- No fake numbers ("99.99% uptime", "500+ clients")
- No AI copywriting ("Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize")
- No stock photography of people shaking hands or pointing at screens
- No gavel imagery — this firm rejects traditional legal aesthetics
- No scales-of-justice icons
- No `h-screen` — always `min-h-[100dvh]`
- No circular spinners
- No hamburger icon without label on mobile
- No 1px solid borders for section separation — use the surface scale or whitespace
