---
name: Tactile Volume
colors:
  surface: '#fef7ff'
  surface-dim: '#dfd7e6'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f1ff'
  surface-container: '#f3ebfa'
  surface-container-high: '#ede5f4'
  surface-container-highest: '#e7e0ee'
  on-surface: '#1d1a24'
  on-surface-variant: '#4a4455'
  inverse-surface: '#332f3a'
  inverse-on-surface: '#f6eefd'
  outline: '#7b7487'
  outline-variant: '#ccc3d8'
  surface-tint: '#732ee4'
  primary: '#630ed4'
  on-primary: '#ffffff'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#d2bbff'
  secondary: '#b5005d'
  on-secondary: '#ffffff'
  secondary-container: '#da2676'
  on-secondary-container: '#fffbff'
  tertiary: '#005479'
  on-tertiary: '#ffffff'
  tertiary-container: '#006d9c'
  on-tertiary-container: '#cfe9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#ffd9e2'
  secondary-fixed-dim: '#ffb1c7'
  on-secondary-fixed: '#3f001c'
  on-secondary-fixed-variant: '#8e0048'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#fef7ff'
  on-background: '#1d1a24'
  surface-variant: '#e7e0ee'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 60px
  stack-lg: 80px
---

## Brand & Style
The design system is centered around a premium "digital clay" aesthetic, emphasizing volume, weight, and physical tactility. It targets a creative, forward-thinking audience that values high-fidelity craft and playful yet professional interaction. The UI should feel like soft-touch silicone or sculpted clay—pliable and inviting.

The style is a sophisticated evolution of Neomorphism, termed Claymorphism. It relies on inner shadows to create convex "puffy" surfaces and multi-layered drop shadows for depth. The emotional response should be one of comfort and curiosity, driven by a 3D-first approach where every element has physical presence.

## Colors
The color strategy uses a neutral, slightly warm lilac-gray canvas (#F4F1FA) to allow the "clay" volumes to catch light and shadow effectively. Large, low-opacity blurred blobs in Violet and Sky should be placed behind main content areas to add environmental depth.

Accents are vibrant and saturated, used primarily for interactive elements or status indicators. Foreground text uses a deep charcoal (#332F3A) for high legibility against the soft backgrounds, while secondary information uses a muted stone-gray (#635F69). Surfaces should never be pure white; they should use subtle gradients to simulate light catching a matte surface.

## Typography
Typography reinforces the friendly, rounded aesthetic. **Nunito Sans** is utilized for all display and heading roles, set with heavy weights (700-900) to match the visual "weight" of the clay components. **DM Sans** provides a clean, geometric counterpoint for body copy, ensuring long-form readability without sacrificing the modern character of the design system.

Headings should use tight letter-spacing to feel more like a cohesive block of "molded" material. Body text should remain airy with a 1.6 line height to balance the heavy visual density of the UI components.

## Layout & Spacing
This design system utilizes a generous, fluid grid with significant "breathing room" to emphasize the 3D nature of the components. Because claymorphic elements require large shadows and thick borders, the spacing rhythm is based on an 8px scale, but leans toward larger increments (e.g., 32px, 64px, 80px) to prevent the UI from feeling cramped.

Layouts should be centered and airy. Content is grouped into large, distinct "islands" rather than tight, edge-to-edge grids. On mobile, margins are reduced, but the internal padding of components must remain high to preserve the "puffy" aesthetic.

## Elevation & Depth
Depth is the defining characteristic of this design system. It is achieved through a specific "stack" of effects:
1.  **Outer Shadows:** A combination of a soft, colored ambient occlusion shadow (low blur, low opacity) and a large, diffused drop shadow (high blur, offset to the bottom-right).
2.  **Inner Shadows:** Two distinct inner shadows are required for the clay effect. A top-left inner shadow in white (opacity 40-80%) to simulate a "highlight" on the rim, and a bottom-right inner shadow using a darker shade of the element's base color to create a sense of curvature and volume.
3.  **Backdrop Blurs:** For "glass-clay" cards, use a semi-transparent surface (alpha 0.6) with a 20px-32px backdrop blur to maintain color vibrance while showing the background ambient blobs.

## Shapes
Sharp corners are strictly prohibited. The minimum radius for small elements (chips, small buttons) is 20px. Primary cards and containers should range between 48px and 60px. Navigation bars and primary call-to-action buttons should be fully "pill-shaped" (circular ends). This extreme roundedness mimics the appearance of molded plastic or clay and is essential for the tactile narrative.

## Components
- **Chunky Clay Navigation:** A floating pill-shaped bar. Use a light background with a subtle inner highlight. Active states should use a secondary "puffy" pill inside the bar in a contrasting accent color.
- **Glass-Clay Cards:** Large containers with heavy rounding (60px). Use a subtle gradient (top-left to bottom-right) and high backdrop-blur. Apply the "Clay" shadow stack to give the glass a sense of physical thickness.
- **Tactile Buttons:** Buttons must feel pressable. Use the multi-layer shadow stack. On hover, the inner shadows should deepen; on active/click, the outer shadows should shrink and the element should move 2px down-right to simulate physical compression.
- **Abstract 3D Compositions:** Replace all photography with 3D renders of matte clay orbs, toruses, and organic blobs. These elements should float at different Z-indexes, casting soft shadows onto the UI layers below.
- **Input Fields:** Recessed "hollow" look. Use inner shadows only (inset) to make the field appear carved out of the surface, with a bright accent border only appearing on focus.