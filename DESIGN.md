# Design System: Altius Lexia
**Firm:** Legal Tech — Data Privacy, Cybersecurity, Intellectual Property
**Inspiration:** Hogan Lovells, Fish & Richardson
**Market:** Ecuador tech ecosystem (Startups, Fintech, SaaS, E-commerce)

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
A commanding, dark-anchored interface that feels like walking into a glass-walled law office at night — screens glowing, city below. The atmosphere is precise yet progressive: deep midnight tones dominate, punctuated by a single warm gold accent that signals authority without opulence. Layouts breathe with generous negative space (Density 3), but the asymmetric grid breaks (Variance 7) prevent any corporate-template staleness. The overall impression: this firm understands code as well as contracts.

## 2. Color Palette & Roles
- **Midnight Deep** (#0A192F) — Primary background. The firm's signature. Deep navy-black that reads as sophisticated, never grim
- **Gunmetal Surface** (#2D3436) — Secondary surfaces, card fills, elevated panels. Warm-leaning dark gray
- **Slate Steel** (#8892B0) — Body text on dark backgrounds. Readable, warm-neutral
- **Cloud Pale** (#CCD6F6) — Headlines on dark backgrounds. High contrast without pure white harshness
- **Warm Ivory** (#F5F5F0) — Light section backgrounds. Cream-tinted, never clinical blue-white
- **Oro Authority** (#D4A853) — Single accent. Muted gold — not shiny, not yellow. Used sparingly: CTAs, active states, key data points, section dividers
- **Pure Surface** (#FFFFFF) — Card fills in light sections only

### Accent Application Rules
- Oro Authority appears on: primary CTA buttons, active nav indicators, pull-quote borders, section numbering
- Never used as text color on dark backgrounds (contrast fail)
- Never used as background fill (too loud)
- On hover: shift to `#E0B96A` (slightly lighter, warmer)

### Banned Colors
- Purple/violet neon gradients
- Pure black (#000000) — use Midnight Deep instead
- Bright green/neon accents — too startup-casual for a law firm
- Any red as accent — reserves for error states only
- Mixed warm/cool gray systems

## 3. Typography Rules
- **Display:** `Outfit` weight 600–700 — Geometric confidence, modern but grounded. Track-tight (`-0.02em`). Leading compressed (`1.1`). Scales via `clamp(2rem, 4vw, 3.5rem)`
- **Body:** `Outfit` weight 300–400 — Relaxed leading (`1.7`), 65ch max-width. Slate Steel color on dark, Gunmetal on light backgrounds
- **Mono:** `JetBrains Mono` — For legal reference numbers, article dates, metadata. Weight 400, `0.8125rem`
- **Editorial Accent:** `Instrument Serif` italic — Used ONLY for pull-quotes and the hero sub-headline. One serif instance per page maximum. Adds intellectual warmth without undermining the modern feel

### Banned Fonts
- `Inter` — too generic for premium legal positioning
- `Times New Roman`, `Georgia` — traditional law firm cliche, exactly what this firm rejects
- `Montserrat` — despite client suggestion, too rounded/playful for the firm's sharp identity
- `Roboto` — Google's default, reads as template

## 4. Component Stylings
* **Buttons:** Flat. Primary: Oro Authority fill (#D4A853) with Midnight Deep text. No glow, no gradient. Hover: shift to #E0B96A. Active: `scale(0.98)` + `-1px translateY`. Secondary: ghost outline in Cloud Pale, 1px border. Border-radius: `0.5rem` (sharp but not brutal)
* **Cards/Containers:** On dark: Gunmetal fill with 1px border `rgba(136,146,176,0.15)`. On light: Pure white with whisper shadow `0 20px 40px -15px rgba(10,25,47,0.08)`. Corner radius `1.25rem`. Internal padding `2rem`
* **Navigation:** Fixed top. Midnight Deep background with `backdrop-blur-md`. Logo left, links center-right. Active link: Oro Authority underline, 2px, offset 8px below. Mobile: full-screen overlay with staggered link reveal
* **Service Cards:** No equal-width grids. Use alternating large/small pattern or horizontal scroll. Each card has a thin Oro Authority top-border accent (2px)
* **Forms:** Dark-mode native. Input backgrounds Gunmetal (#2D3436). Border: 1px Slate Steel at 30% opacity. Focus: Oro Authority ring, 2px offset. Labels above, uppercase mono at `0.75rem`. Error: inline, warm red (#E74C3C)
* **Section Dividers:** Thin 1px line in `rgba(212,168,83,0.3)` — Oro at 30% opacity. Or generous negative space (6rem gap)

## 5. Hero Section
- **Structure:** Split layout. Left 55%: headline stack + CTA. Right 45%: abstract geometric composition or atmospheric photography (night cityscape with code overlay)
- **Headline:** "El derecho a la velocidad de tu codigo." in Outfit 700, Cloud Pale, `clamp(2.5rem, 5vw, 4rem)`. Period included — declarative, not questioning
- **Sub-headline:** In Instrument Serif italic, Slate Steel, `1.25rem`. "Somos la firma estrategica en Ecuador que protege el activo mas valioso de las Tech Companies: su innovacion."
- **CTA:** Single button. "Agendar Consulta Estrategica" in Oro Authority fill. No secondary CTA in hero
- **No filler:** No "Scroll to explore", no chevrons, no bouncing arrows
- **Asymmetric:** Left-aligned text block with right visual. NOT centered

## 6. Layout Principles
- **Grid-First:** CSS Grid for all structural layouts. Never flexbox percentage math
- **Dark-to-Light Flow:** Hero and top sections in Midnight Deep. Transition to Warm Ivory for content sections (Practicas, Sectores). Return to Midnight Deep for CTA and footer. Creates visual rhythm
- **Feature Sections (Practicas):** NOT 3 equal cards. Use a stacked zig-zag: Section A full-width with left icon/right text, Section B reversed. Generous 4rem vertical gaps
- **Sectors Grid:** 2x2 asymmetric bento. Top-left large (startups — flagship sector), others standard. Not 4 equal cards
- **Containment:** `max-width: 1200px` centered. Horizontal padding: `1.5rem` mobile, `2rem` tablet, `4rem` desktop
- **Full-Height Hero:** `min-height: 100dvh` — never `height: 100vh`

## 7. Responsive Rules
- **Mobile-First Collapse (< 768px):** Single column. Hero splits to stacked (headline above, visual below). Full-width CTAs. `padding: 1.5rem`
- **No Horizontal Scroll:** Critical failure if any element overflows
- **Typography Scaling:** Headlines via `clamp()`. Body never below `1rem`. Sub-headlines never below `0.9375rem`
- **Touch Targets:** All interactive elements minimum `48px` tap target (legal audience may skew older)
- **Navigation Mobile:** Full-screen overlay, Midnight Deep background, centered links in Outfit 600, staggered reveal animation
- **Cards:** Stack vertically with full-width. Maintain `1.5rem` internal padding
- **Testing Viewports:** 375px, 768px, 1024px, 1440px

## 8. Motion & Interaction (Code-Phase Intent)
- **Physics:** Spring-based. `stiffness: 120, damping: 22`. Slightly stiffer than default — conveys precision
- **Entry Animations:** Sections fade-up on scroll entry. 20px translate, 0.6s duration. Staggered for multi-element sections
- **Nav:** Smooth backdrop-blur transition on scroll. Links have underline-grow animation from left
- **Buttons:** `scale(0.98)` on press. Oro Authority hover brightens to #E0B96A over 300ms
- **Service Cards:** Subtle border-glow on hover — Oro Authority at 20% opacity
- **No Perpetual Motion:** This is a law firm. No floating icons, no typewriter effects, no particle explosions. Motion exists only in response to user action or scroll entry
- **Hardware Rules:** Animate ONLY `transform` and `opacity`

## 9. Anti-Patterns (Banned)
- No emojis anywhere
- No `Inter` font
- No pure black (#000000)
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
