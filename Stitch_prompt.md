# Stitch Prompt — Personal Website Prototype (English)

Use the following specification to generate **high-fidelity UI prototype screens** for a **personal portfolio / homepage website**. Output should read as a **cohesive multi-page product prototype**, not generic templates.

---

## Role & Output Type

You are an expert **UI/UX designer and visual design specialist**. Produce **prototype frames** (desktop-first, then mobile variants if space allows) suitable for handoff to engineering.

**Deliverables**

- Clear frames for: **Home**, **About Me**, **Contact Me**
- A **fixed top navigation** present on every frame (consistent component)
- **No real photography or raster portraits** anywhere: use **abstract placeholders** only (e.g., geometric clay “orb”, silhouette glyph, dashed frame labeled “Avatar placeholder”, or empty circular clay plate). **Do not** depict identifiable human faces or stock people.

---

## Product Scope (from brief)

**Site purpose:** Personal homepage + ways to reach the owner.

**Pages**

1. **Home**
   - **Fixed navigation bar** pinned to the **very top** of the viewport.
   - A **hero / landing poster** area with strong visual hierarchy (headline, subcopy, primary CTA). **Creative freedom** for layout and decorative composition, but **no photos**—use abstract clay shapes, gradients, and typographic emphasis instead of imagery.

2. **About Me**
   - Open-ended layout: biography, skills/interests, timeline, or “bento” cards—designer’s choice, as long as it matches the design system and feels personal but **image-free** (icons/abstract shapes only).

3. **Contact Me**
   - Include a clear **avatar region** that is visibly a **placeholder** (no face).
   - List **contact methods** with recognizable affordances:
     - **WeChat**
     - **Phone**
     - **YouTube**
   - Use **text labels + icon orbs** (clay-style) rather than QR codes or screenshots unless shown as neutral wireframe boxes labeled “QR placeholder”.

---

## Navigation & Wayfinding

- **Nav position:** **Fixed at the top** on all pages (sticky/fixed header behavior implied in visuals).
- **Nav items (exact labels in UI copy):** **Home** · **About Me** · **Contact Me**
- **Interaction story (annotate on prototype):** switching pages happens **on click** (standard in-app navigation). Show **active state** for the current section in the nav.

---

## Motion & Interaction Notes (annotate on frames)

- **Page transition:** When changing pages, use a **page-flip / book-turn** style transition (show as a **note** or **interaction panel** on the prototype, not necessarily multi-frame animation unless your tool supports it).
- **Scrolling effects:** **None** — avoid parallax, scroll-jacking, sticky section gimmicks, or scroll-driven animations. Keep scrolling **plain** if content exceeds viewport (or keep content within one screen height per page if you choose a non-scroll layout—either is fine, but **no special scroll effects**).
- **Loading:** Include a dedicated **loading state** treatment (splash / overlay / progress “clay” module) with a **short looping loading animation** concept—again, annotate behavior; keep it tasteful and on-brand.

---

## Visual Style — High-Fidelity Claymorphism (mandatory)

Apply **High-Fidelity Claymorphism**: premium “digital clay” — **volume, weight, tactility** — not flat minimalism. Think **matte silicone / soft toy / molded plastic** with **soft top-left lighting** and **deep ambient occlusion** below elements.

### Non-negotiables

- **No sharp corners:** minimum about **20px radius** on controls; large surfaces **48–60px** radius. Avoid tiny radii that read as generic UI.
- **Depth engine:** use **multi-layer shadows** (minimum **four layers**): outer soft drop shadow, top-left highlight, subtle inner colored bounce light, inner rim light. Cards feel **convex / floating**; inputs or “pressed” states feel **concave** (inset shadows).
- **Background:** never flat white. Use canvas **`#F4F1FA`** plus **3–4 large blurred “blob” shapes** at low opacity for ambient light.
- **Palette (“candy shop”):** vivid but controlled accents — e.g. **violet `#7C3AED`**, **hot pink `#DB2777`**, **sky `#0EA5E9`**, **emerald `#10B981`**, **amber `#F59E0B`**, with **foreground `#332F3A`** and **muted `#635F69`** (do not use lighter grays than `#635F69` for body text on light surfaces).
- **Gradients:** primary CTAs as **violet gradient** (lighter violet → `#7C3AED`); icon orbs as **pastel → saturated** diagonal gradients.
- **Glass-clay cards:** semi-transparent white (`~60–80%`) with **backdrop blur** where appropriate so blobs subtly show through.
- **Typography:** **Nunito** (700–900) for headings, numbers, nav; **DM Sans** (400–700) for body. Tight tracking on huge headlines; relaxed body leading.
- **Micro-interactions (describe on components):** hover **lift** (slight negative translate) + stronger shadow; active **squish** (`scale` down ~0.92) + pressed/inset shadow on buttons.
- **Accessibility:** visible **focus rings** on interactive elements; respect **reduced motion** in notes (disable decorative motion where relevant).

### Component cues to show in the prototype

- **Nav bar:** chunky clay pill or bar, floating above content, with tactile buttons/links.
- **Hero:** oversized headline, optional gradient text on largest line only, clay CTA button, abstract 3D-ish composition (overlapping rounded panels), **no photos**.
- **Cards:** rounded containers with clay shadow stack; hover state callouts optional.
- **Contact row items:** each channel as a **clay row** or **card** with icon orb + label + value/placeholder text.

---

## Content & Copy (English UI text)

Use concise English placeholder copy (you may localize tone slightly, but keep structure):

- Home hero: title like **“Hi, I’m [Name]”** + one-line subtitle + **Primary CTA** (e.g. “Get in touch”).
- About: section headings such as **“About me”**, **“What I do”**, short paragraphs of lorem-like **meaningful** placeholder (not pure “Lorem ipsum” walls—2–3 short paragraphs max per section).
- Contact: heading **“Contact me”**; fields/rows labeled **WeChat**, **Phone**, **YouTube** with placeholder values (e.g. `your.handle`, `+1 000 000 0000`, `youtube.com/@handle`).

---

## What to Avoid

- Realistic **photos**, **avatars**, **hero images**, or **YouTube thumbnails** with faces.
- **Neumorphism-only** flat extrusion without colored ambient shadows (must feel **high-fidelity clay**, not 2020 basic neu).
- **Harsh black** backgrounds, **neon cyberpunk**, or **corporate sterile gray** dashboards.
- **Scroll-based** motion effects (parallax, reveal-on-scroll, etc.).

---

## Final Quality Bar

The prototype should feel **playful, optimistic, premium, and tactile**, with **consistent clay tokens** across all pages. Layouts should be **responsive-minded** (show how mobile would stack: full-width CTA, compact nav, maintained radii and shadows).

**End of prompt.**
