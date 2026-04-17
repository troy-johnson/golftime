# Design System Specification: Heritage & Precision

 

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Prestigious Curator."** 

 

This system does not simply display information; it presents it with the gravity of a storied tradition and the sharpness of modern excellence. To move beyond a "templated" look, we reject the rigid, boxy layouts of standard web design in favor of **Editorial Asymmetry**. This means using expansive white space, overlapping imagery, and a dramatic typographic scale that mirrors a high-end physical program or a luxury broadsheet. We are building a digital experience that feels as intentional as a hand-manicured green.

 

## 2. Colors: Tonal Depth & The "No-Line" Rule

The palette is rooted in the deep, authoritative greens of the fairways, accented by the "Flag Yellow" of championship Sunday. 

 

### Core Palette

*   **Primary (#004d34) & Primary-Container (#006747):** Our "Masters Green." Use these for brand-critical moments and deep immersive backgrounds.

*   **Secondary (#705d00) & Secondary-Container (#fcd400):** Our "Flag Yellow/Gold." Use sparingly for high-action triggers and prestigious accents.

*   **Surface Hierarchy:** We utilize `surface-container-lowest` (#ffffff) through `surface-container-highest` (#cdead4) to define structure.

 

### The "No-Line" Rule

**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. Traditional lines feel "digital" and "cheap." Instead, boundaries must be defined solely through:

1.  **Background Color Shifts:** A `surface-container-low` section sitting against a `surface` background.

2.  **Tonal Transitions:** Using subtle `primary-container` to `primary` gradients to define the start of a footer or hero section.

 

### Glass & Signature Textures

To achieve a custom, premium feel, use **Glassmorphism** for floating navigation or overlays. Use a semi-transparent `surface` color with a `backdrop-blur` (20px+) to allow the rich greens or photography to bleed through, softening the interface.

 

## 3. Typography: Editorial Authority

Our typography is a dialogue between the "Old World" and the "New Era."

 

*   **The Serifs (Noto Serif / Tiempos):** Used for all `display` and `headline` tiers. These should be tracked slightly tighter than default (-2%) to feel like high-end print. 

*   **The Sans (Public Sans / Benton Sans):** Used for `title`, `body`, and `label` tiers. This provides a clean, technical contrast to the romantic serifs, ensuring readability in complex data or UI controls.

 

**Hierarchy as Identity:**

*   **Display-LG (3.5rem):** Use for "Hero" moments. Never center-align by default; use intentional left-alignment with generous right-side negative space.

*   **Label-SM (0.6875rem):** All-caps with increased letter spacing (+10%) for category tags to mimic the precision of a scorecard.

 

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are forbidden. We convey hierarchy through the **Layering Principle**.

 

*   **Stacking Tiers:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "soft lift" that feels architectural.

*   **Ambient Shadows:** If an element must float (e.g., a primary action menu), use a "Ghost Shadow": Blur: 40px, Spread: -5px, Opacity: 6% using a tinted version of `on-surface` (#082013).

*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. A 100% opaque border is a failure of the system.

 

## 5. Components: The Signature Kit

 

### Buttons

*   **Primary:** Solid `primary` background with `on-primary` (white) text. **Radius: 0.25rem (DEFAULT).** No shadow; use a subtle `secondary` (Gold) 2px bottom-accent on hover.

*   **Secondary:** `surface-container-lowest` with a "Ghost Border."

*   **Tertiary:** All-caps `label-md` text with a `secondary` (Gold) underline that expands on hover.

 

### Cards & Lists

*   **Forbid Dividers:** Do not use horizontal rules (`

`). Separate list items using `1.5rem` of vertical white space or by alternating background tones between `surface` and `surface-container-low`.



*   **Editorial Cards:** Use overlapping elements—place an image that breaks the top boundary of the card container to create depth.

 

### Input Fields

*   **Styling:** Minimalist. Only a bottom-weighted `outline-variant` (20% opacity). On focus, the border transitions to a `secondary` (Gold) 2px stroke. Label should use `label-md` in `primary` color.

 

### Chips

*   **Filter Chips:** Use `surface-container-high` with a `0.25rem` radius. When selected, transition to `primary` with `on-primary` text.

 

## 6. Do's and Don'ts

 

### Do

*   **Do** use asymmetrical layouts where the left column is significantly narrower than the right to create an editorial feel.

*   **Do** use `secondary_container` (Gold) for the most critical action on the page (e.g., "Tickets" or "Live").

*   **Do** embrace "Deep Green" backgrounds for long-form reading modes to reduce eye strain and increase prestige.

 

### Don't

*   **Don't** use pure black (#000000). Use `on-surface` (#082013) for all "black" text to maintain the organic, green-tinted depth.

*   **Don't** use large border-radii. Keep it to `0.25rem` (md) or `0px` (none) to maintain a crisp, professional edge. Rounded "pill" shapes are only for small `chips`.

*   **Don't** crowd the interface. If a section feels full, add 32px of white space. Prestige is measured in pixels of "empty" space.