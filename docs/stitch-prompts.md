# Stitch Prompts — Altius Lexia

Use these prompts on [labs.google.com/stitch](https://labs.google.com/stitch) to generate each screen. Copy the DESIGN.md as context, then paste each prompt below.

> **Before each prompt:** Upload or paste the `DESIGN.md` file as context so Stitch follows the design system.

---

## Screen 1: Hero + Navigation (Homepage Top)

```
Design the homepage hero section for "Altius Lexia", a legal tech law firm in Ecuador.

LAYOUT: Split screen. Left 55%, right 45%. Full viewport height (100dvh). Background: deep midnight navy (#0A192F).

NAVIGATION (fixed top):
- Logo "Altius Lexia" left in Outfit 600 weight, Cloud Pale (#CCD6F6)
- Links right: Practicas, Sectores, Insights, Nosotros, Contacto — in Outfit 400, Slate Steel (#8892B0)
- Active link has a muted gold (#D4A853) underline, 2px thick, 8px below text
- Background: #0A192F with subtle backdrop blur

LEFT SIDE (text block, vertically centered, left-aligned):
- Headline: "El derecho a la velocidad de tu codigo." in Outfit 700, Cloud Pale (#CCD6F6), large display size. Track-tight. Period at end.
- Below headline: Sub-headline in Instrument Serif italic, Slate Steel (#8892B0), smaller: "Somos la firma estrategica en Ecuador que protege el activo mas valioso de las Tech Companies: su innovacion."
- Below sub-headline: One CTA button "Agendar Consulta Estrategica" with muted gold fill (#D4A853), dark text (#0A192F), flat, no glow, rounded corners 0.5rem

RIGHT SIDE: Abstract geometric composition — overlapping translucent rectangles and lines in Slate Steel and Oro (#D4A853) at low opacity, suggesting code structure or circuit paths. No stock photos. No people. Clean, architectural.

SPACING: Generous negative space. No clutter. No secondary CTA. No "scroll to explore" text. No arrows.

TYPOGRAPHY: Outfit for all text. NO Inter, NO Times New Roman, NO emojis.
COLORS: Only #0A192F, #2D3436, #8892B0, #CCD6F6, #D4A853. No purple, no neon, no gradients.
```

---

## Screen 2: Value Proposition Section

```
Design the value proposition section for Altius Lexia. This appears directly below the hero.

BACKGROUND: Warm ivory (#F5F5F0) — transition from dark hero to light section.

SECTION HEADER: Small uppercase mono label "POR QUE ALTIUS LEXIA" in JetBrains Mono, 0.75rem, muted gold (#D4A853), tracking wide. Below it: larger heading "Estrategia legal para la era digital" in Outfit 600, Gunmetal (#2D3436).

THREE VALUE COLUMNS (NOT equal-width cards. Use asymmetric grid: first column 40%, second 30%, third 30%):

Column 1 — "Vision Global"
- Thin gold top border (2px, #D4A853)
- Number "01" in JetBrains Mono, muted gold, small
- Title in Outfit 600, Gunmetal
- Body: "Estandares internacionales aplicados al marco legal ecuatoriano." in Outfit 300, Slate Steel (#8892B0)

Column 2 — "ADN Tecnologico"
- Same structure, number "02"
- Body: "Entendemos algoritmos, APIs y arquitecturas de nube tanto como las leyes."

Column 3 — "Agilidad"
- Same structure, number "03"
- Body: "Respuestas en tiempos de startup, no de despacho tradicional."

SPACING: 6rem top padding, 6rem bottom. Generous gaps between columns (2rem+). Content contained at max-width 1200px centered.

NO equal-height cards with shadows. NO icons. NO emojis. Clean typography-driven layout.
TYPOGRAPHY: Outfit + JetBrains Mono only. NO Inter.
```

---

## Screen 3: Practicas (Services) — Zig-Zag Layout

```
Design the services section for Altius Lexia law firm. Title: "Practicas".

BACKGROUND: Midnight Deep (#0A192F) — back to dark.

SECTION HEADER: Uppercase mono label "PRACTICAS" in JetBrains Mono, muted gold (#D4A853). Main heading: "Areas de Especialidad" in Outfit 600, Cloud Pale (#CCD6F6).

THREE SERVICES in a stacked zig-zag layout (NOT 3 equal cards side by side):

SERVICE A — "Privacidad y Proteccion de Datos"
- Full-width row. Left side: large heading in Outfit 600 + body text. Right side: abstract geometric icon/illustration in thin gold lines
- Sub-headline: "Privacidad como Ventaja Competitiva." in Outfit 600, Cloud Pale
- Body: "En un mercado regulado por la LOPDP, el cumplimiento no es un freno, es un generador de confianza." in Outfit 300, Slate Steel
- Below body: 4 service items as a clean list (small text, Slate Steel, bullet replaced by thin gold dash): Implementacion LOPDP, Auditorias de impacto, DPO Externo, Cloud Compliance
- Thin horizontal divider below (1px, gold at 30% opacity)

SERVICE B — "Ciberseguridad Legal" (REVERSED: text right, visual left)
- Same structure but mirrored
- Sub-headline: "Resiliencia ante la Amenaza Digital."
- Body: "La seguridad de la informacion es un imperativo juridico."
- Services: Gestion de brechas, Evidencia digital, Normativas financieras, Concientizacion legal

SERVICE C — "Propiedad Intelectual para Tech" (back to original: text left)
- Sub-headline: "Blindaje de Activos Intangibles."
- Body: "Tu software y tu marca son tu mayor patrimonio."
- Services: Software y Derechos de Autor, Secretos Industriales, Marcas y Patentes, Licenciamiento SaaS

SPACING: 4rem between each service block. Content max-width 1200px.
NO card borders, NO shadows, NO icons from icon libraries. Abstract line art only.
TYPOGRAPHY: Outfit + JetBrains Mono. NO Inter, NO emojis.
```

---

## Screen 4: Sectores (Industries)

```
Design the sectors/industries section for Altius Lexia law firm.

BACKGROUND: Warm Ivory (#F5F5F0) — light section.

SECTION HEADER: Mono label "SECTORES" in JetBrains Mono, gold (#D4A853). Heading: "Industrias que asesoramos" in Outfit 600, Gunmetal (#2D3436).

FOUR SECTORS in an asymmetric 2x2 bento grid (top-left card is LARGER — 60% width, others share remaining space):

CARD 1 (Large — Startups):
- Gunmetal background (#2D3436), Cloud Pale text
- "Startups" in Outfit 600, large
- "Estructuracion legal para rondas de inversion y proteccion de IP desde el dia 1." in Outfit 300
- Thin gold top border accent (2px)

CARD 2 (Standard — Fintech):
- White background, Gunmetal text
- "Fintech" heading
- "Navegacion regulatoria ante la Junta de Politica y Regulacion Financiera."
- Thin gold top border

CARD 3 (Standard — Software & SaaS):
- White background
- "Software & SaaS"
- "Contratos de nivel de servicio y terminos y condiciones robustos."

CARD 4 (Standard — E-commerce):
- Gunmetal background, light text
- "E-commerce"
- "Proteccion al consumidor digital y logistica de datos masivos."

Cards have 1.25rem border-radius. No shadows on dark cards. Whisper shadow on white cards. 1rem gap between cards.

NO stock photos. NO icons. NO emojis. NO equal-size grid.
TYPOGRAPHY: Outfit only. NO Inter.
```

---

## Screen 5: Nosotros (About)

```
Design the about section for Altius Lexia law firm.

BACKGROUND: Midnight Deep (#0A192F).

LAYOUT: Asymmetric split. Left 40%: section label + pull quote. Right 60%: main content.

LEFT SIDE:
- Mono label "NOSOTROS" in JetBrains Mono, gold (#D4A853)
- Pull quote in Instrument Serif italic, Cloud Pale (#CCD6F6), large (1.5rem): "Donde la Ley y la Tecnologia convergen."
- Left border: 3px solid gold (#D4A853)

RIGHT SIDE:
- Body text in Outfit 300, Slate Steel (#8892B0), comfortable line height (1.7):
  "No somos una firma de abogados tradicional. Nacimos de la necesidad de un ecosistema tecnologico en Ecuador que exigia respuestas sofisticadas. Nos inspiramos en los estandares globales para ofrecer una asesoria tecnica-legal que permite a los fundadores y CTOs escalar con seguridad juridica."

Below the split: A row of 3 credential markers (not cards, just text groups):
- "LOPDP Certified" / "ISO 27001 Advisory" / "Tech Law Network"
- In JetBrains Mono, small, Slate Steel, separated by thin gold vertical dividers

SPACING: Generous. 6rem vertical padding. Max-width 1200px.
NO team photos (demo). NO headshots. NO emojis. NO "Meet the Team" generic sections.
TYPOGRAPHY: Outfit + Instrument Serif + JetBrains Mono. NO Inter.
```

---

## Screen 6: Contacto (Contact + CTA)

```
Design the contact section and footer for Altius Lexia law firm.

BACKGROUND: Gunmetal (#2D3436) — distinct from both midnight and ivory sections.

LAYOUT: Split. Left 45%: headline + micro-copy. Right 55%: contact form.

LEFT SIDE:
- Mono label "CONTACTO" in JetBrains Mono, gold (#D4A853)
- Heading: "Hablemos de tu siguiente hito." in Outfit 700, Cloud Pale (#CCD6F6), display size
- Below: "Entendemos la urgencia del sector tech. Procesamos tu solicitud en menos de 24 horas laborables." in Outfit 300, Slate Steel

RIGHT SIDE — Form (dark-mode styled):
- Input fields on Midnight Deep (#0A192F) backgrounds
- Labels above each input in JetBrains Mono uppercase, 0.75rem, Slate Steel
- Fields: Nombre, Empresa, Correo Corporativo
- Dropdown: "Asunto" with options (Privacidad de Datos, Ciberseguridad, Propiedad Intelectual, Otro)
- Textarea: "Mensaje" — taller, same styling
- Focus state: gold (#D4A853) ring, 2px
- Submit button: "Enviar Consulta" — gold fill (#D4A853), dark text, full-width, 0.5rem radius

FOOTER (below, full-width, Midnight Deep #0A192F):
- Logo "Altius Lexia" left, Outfit 600, Cloud Pale
- Links center: Privacidad, Terminos, Contacto — Slate Steel, small
- Right: "Quito, Ecuador" in JetBrains Mono, small
- Thin gold divider line above footer
- Copyright: "2026 Altius Lexia. Todos los derechos reservados." in mono, small

NO social media icons (not yet). NO map embed. NO emojis. NO chat widget.
TYPOGRAPHY: Outfit + JetBrains Mono. NO Inter.
```

---

## Screen 7: Mobile Version — Hero + Nav

```
Design the MOBILE version (375px width) of the Altius Lexia homepage hero.

BACKGROUND: Midnight Deep (#0A192F). Full viewport height.

NAVIGATION: Fixed top bar. Logo "Altius Lexia" left in Outfit 600, Cloud Pale. Hamburger menu icon right (3 horizontal lines, Cloud Pale, with label "Menu" next to it in small text).

HERO (stacked, single column):
- Headline: "El derecho a la velocidad de tu codigo." in Outfit 700, Cloud Pale, clamp-scaled to fit mobile (~2rem). Left-aligned.
- Sub-headline: Instrument Serif italic, Slate Steel, 1rem. Below headline.
- CTA button: "Agendar Consulta Estrategica" — full-width, gold fill (#D4A853), dark text, 48px minimum height for touch target
- Below CTA: generous spacing, then the abstract geometric composition scaled down and centered

SPACING: padding 1.5rem horizontal. Generous vertical gaps between elements.
All text left-aligned. No centering. No horizontal scroll.

TYPOGRAPHY: Outfit + Instrument Serif. NO Inter. NO emojis.
COLORS: #0A192F, #8892B0, #CCD6F6, #D4A853 only.
```
