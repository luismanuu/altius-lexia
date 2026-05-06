# Product: Altius Lexia

**Category:** Legal-tech boutique (marketing site)
**Register:** Brand. Design IS the product on this surface — the site's job is to convert founders and operators into a discovery call. There is no internal portal yet, no logged-in app, no client-facing tooling. Marketing wins every disagreement.
**Locale:** Latin American Spanish (Ecuador). Neutral *tuteo*. *Voseo* is strictly prohibited.

## Users

The site speaks to a narrow audience and rejects everyone else on purpose:

- **Ecuadorian tech founders** building software companies that need a legal partner who reads code, not just contracts. Specifically: SaaS, fintech, e-commerce, and data-heavy startups in seed-to-Serie A range.
- **CTOs / engineering leads** who own compliance scope (LOPDP, breach response, cloud DPAs) and want a counterparty that won't slow their roadmap.
- **Operators** at scaling Ecuadorian tech companies who already have product-market fit and need to harden IP, vendor contracts, and data-transfer posture for international growth.
- **Foreign investors and counsel** evaluating Ecuadorian tech companies who land here looking for credible local representation.

Not for: traditional retail consumers, criminal defense, family law, or any practice area outside the privacy / cybersecurity / IP triangle.

## Brand voice

Commanding, tech-native, and dignified. The firm names itself "Altius Lexia" — *higher law*. Every word should feel earned by a senior partner who also writes Python. Concrete over abstract. Verbs over nouns. No legal-firm clichés (gavels, scales of justice, handshake stock photos), no startup clichés ("disrupt", "elevate", "next-gen"), no consultant clichés ("seamless", "synergy", "unlock"). One pull-quote in Instrument Serif italic per page; everything else is geometric Outfit.

## Strategic principles

1. **Authenticity over placeholders.** The CEO has rejected fabricated stats, fake team members, fake phone numbers, and `lorem ipsum` outright. If a section can't ship with real content, the section is removed (Liderazgo was deleted entirely on 2026-05-06 rather than ship with placeholders) or replaced with a methodology / service-pillar block that says something true.
2. **Token discipline locks the look.** Stitch tokens (`surface` family, champagne `primary-container`) live in `globals.css` and are the source of truth. Hex literals in components are a regression. The "Sovereign Blueprint" name in `DESIGN.md` is the visual system; CSS is the contract.
3. **No-line rule + ghost borders only.** Section separation is by surface-scale shifts and whitespace, not by 1px solid lines. When a border is unavoidable, it is `outline-variant` at 15% opacity. Full-opacity gold borders are forbidden.
4. **Asymmetric over template.** Hero is split 55/45, not centered. Practicas is zig-zag, not three equal cards. Sectores is a 6/4 + 4/6 bento, not a 4-up grid. Identical card grids are the AI slop tell.
5. **Marketing surface, not product.** No login, no dashboard, no auth, no internal tooling. Every page's success metric is "did the visitor click Agendar Consulta?" The single conversion CTA repeats; the form on `/contacto` and the landing form are the only interactive moments.

## Anti-references

- Traditional Ecuadorian law-firm sites (gavels, dark wood, navy + maroon, family portraits)
- Bay Area B2B SaaS (gradient hero, hero-metric block, identical card grid, Inter font)
- Crypto / web3 aesthetics (neon, dark + lime, glassmorphism as default)

## Constraints

- All user-facing copy in Spanish (LatAm, neutral tuteo). Code, comments, and docs in English.
- No new dependencies without CEO ruling. `framer-motion` was discussed and deferred.
- Form submit-by-email is currently stubbed (phase 1: client-side echo + status). Wiring to Resend is blocked on API key + domain DNS — do not attempt to ship the email path until those land.
- LOC discipline: polish PRs ≤ 200 LOC each, surgical diffs only, match existing style exactly.
