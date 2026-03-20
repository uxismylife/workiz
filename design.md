# OneVisit / Workiz — iPad app design reference

**Purpose:** Single source of truth for layout, tokens, and Figma alignment. **Design at fixed iPad landscape size first**; scale only for preview devices.

---

## Memorize — scope of work

**Follow only what is explicitly asked.** If the product owner did not request a behavior, feature, or change, **do not add it** (no extra interactivity, hover states, links, navigation handlers, “helpful” refactors, or assumptions beyond the instruction).

Implement **exactly** the request; defer nice-to-haves until they are asked for.

---

## Design process — instructions

When helping with product and design work for this app, be ready to:

- **Writing UX copy and microcopy at scale** — labels, empty states, errors, onboarding, and tone-consistent UI strings across flows.
- **Generating user research interview scripts** — discussion guides, probes, and consent-friendly wording aligned to study goals.
- **Summarising user feedback into insight themes** — cluster quotes and notes into patterns, severity, and actionable themes.
- **Creating design system documentation** — tokens, components, usage rules, and examples that match this repo’s Figma and implementation.
- **Reviewing accessibility before dev handoff** — focus order, labels, contrast, touch targets, and WCAG-oriented checks against what ships.
- **Drafting design critique** — structured feedback (problem, impact, suggestion) on layouts, hierarchy, and consistency with this design reference.

---

## Device & canvas

| Property | Value |
|----------|--------|
| **Target** | iPad landscape |
| **Design width** | **1366px** |
| **Design height** | **1024px** |
| **Orientation** | Landscape only (primary) |
| **Aspect ratio** | 1366 : 1024 |

All screens are composed inside this rectangle (`DESIGN_WIDTH` / `DESIGN_HEIGHT` in `src/canvasSize.ts`, re-exported from `ViewportCanvas.tsx`).

---

## Viewport & IDE preview

- **Production intent:** Full 1:1 layout at **1366×1024** on device or large browser.
- **Dev / Cursor Simple Browser:** `ViewportCanvas` scales with  
  `scale = min(1, innerWidth/1366, innerHeight/1024)` so the **entire 1366×1024 frame fits** the window (no minimum scale — avoids canvas larger than the viewport).
- **DOM / Cursor “Position” overlay:** reports **screen pixels after `transform: scale`**, not artboard px. Example: map **310px** tall in CSS may show **~200px** when scale ≈ **0.65** — **computed style** in DevTools still lists **310px**.
- **Chrome around canvas:** `html` / `body` use background **`#1a1a1a`**; `#root` flex-centers the scaled canvas (**no padding** on `#root` — it was shrinking the usable area).
- **Critical:** Do not use **`max-width: 100%`** on **`.app`** or the header — the percentage resolves against the **scaled** wrapper (~892px) and **shrinks the whole iPad frame** below 1366px. Use fixed **`width` / `min-width: 1366px`** on `.app` instead.

Do **not** vertically center a raw 1024px-tall block without scaling in a short preview — the top (header) will sit off-screen.

---

## App shell (main area)

| Property | Value |
|----------|--------|
| **Class** | `.app` |
| **Size** | 1366 × 1024 px |
| **Layout** | `display: flex; flex-direction: column; align-items: stretch` — header full width; **`.app__main`** is **`flex: 0 0 0`** (map block carries the 1024px-tall composition) |
| **Overflow** | `hidden` |
| **Background** | Linear gradient **87.45deg**, **#E9F0F3** **8.03%** → **#F4ECE5** **89.73%** |

Earlier spec also referenced base **`#F8FAFC`** / **`#F4F2F1`**; the implemented canvas uses the gradient above (Figma-aligned).

---

## Typography (defaults)

| Use | Spec |
|-----|------|
| **UI / body** | `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, sans-serif |
| **Logo wordmark (Figma)** | **Archivo Bold**, **24px**, line-height **1.2**, color **#101828** (embedded in `Logo.svg` when using combined asset) |

---

## Color tokens (in use)

| Token / role | Hex |
|--------------|-----|
| Text / icons (primary dark) | **#182230** (Gray/800) |
| Primary text (logo label in Figma) | **#101828** |
| Notification badge fill | **#ef4444** |
| Badge border | **#f5eee8** |
| Canvas gradient start | **#E9F0F3** |
| Canvas gradient end | **#F4ECE5** |
| Preview chrome | **#1a1a1a** |
| Icon button hover | `rgba(0,0,0,0.05)` |

---

## Header (top navigation)

**Figma:** [Header — node `60:28528`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28528)

| Layer | Size / notes |
|-------|----------------|
| **`.header-shell`** | **Width 100%** of `.app`. Fixed **88** px tall, **`overflow: hidden`** — stays inside the 1024px artboard (no extra safe-area padding on the shell; that was pushing content past the frame). |
| **Top nav gradient layer** | Full shell; soft CSS gradient (see `Header.css`) |
| **`.header-shell__bar`** | **88** px tall; horizontal padding **`min(max(33px, safe-area-inset), 48px)`**; **`overflow-x: clip`**; left cluster **`flex: 1; min-width: 0`** so the bar never spills horizontally. |

### Left cluster

| Element | Spec |
|---------|------|
| Menu → logo gap | **12** px |
| Icon buttons (menu, etc.) | **52 × 52** px touch target, **12** px radius |
| Icon glyph (SVG) | **36 × 36** px (legible on iPad + scaled previews) |
| Brand row / logo height | **48** px tall `Logo.svg` |
| Brand column max width | **min(280px, 100%)** of logo row |

### Right cluster (nav actions)

| Element | Spec |
|---------|------|
| Gap between items | **12** px |
| Row min-height | **72** px (aligns with avatar) |
| Notification dot | **18 × 18** px, radius **9** px, border **2** px **#f5eee8** |
| Avatar | **72 × 72** px; **`/elements/header/avatar.png`** (ring/shadow in asset — **no** extra CSS border/shadow) |

### Assets (header)

All under **`public/elements/header/`**:

- `hamburger.svg`
- `search.svg`
- `bell.svg`
- `Logo.svg`
- `avatar.png`

---

## Breadcrumbs (under header)

**Figma:** [`60-28470`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28470)

| Property | Value |
|----------|--------|
| **Placement** | Below **`<Header />`**, inside **`.app`** (`<Breadcrumbs />`) |
| **Horizontal padding** | **90px** (`max(90px, safe-area-inset-left/right)`) — matches frame [`60-28380`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28380) |
| **Vertical padding** | **15px** top (below 88px header → trail @ **y=103**), **32px** bottom (with **26px** min inner row → content @ **y=161**) |
| **Gap** (crumb / chevron) | **15px** |
| **Typography** | **Inter** 500 / 600, **18px**, line-height **26px** |
| **Current crumb** | **#3538cd**, semibold |
| **Other crumbs** | **#475467**, medium; separators **`/elements/header/arrow-right.svg`** (9×20) |
| **Interaction** | Display-only (no links, no hover) |
| **Component** | `src/components/Breadcrumbs.tsx` |

---

## Map area & two-column stack (Property brief screen)

**Full screen Figma:** [`60-28380`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28380)  
**Map card node:** [`60-28481`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28481)

| Property | Value |
|----------|--------|
| **Placement** | First item in **`.app__map-stack`** (inside **`.app__map-layout__sync`**) |
| **Wrapper padding** | **0** top (vertical rhythm comes from breadcrumbs); **left** **`max(90px, safe-area-inset-left)`**; **right** **`max(80px, safe-area-inset-right)`**; **bottom** **`max(31px, safe-area-inset-bottom)`** |
| **Column geometry** | **540px** + **58px** gap + **598px** = **1196px** content width; **80px** right inset via **`.app__map`** padding |
| **Layout** | **`.app__map-layout`**: **column**. **`.app__map-layout__sync`**: **flex row**, **`gap: 58px`**, **`align-items: stretch`**. Left **`.app__map-stack`**: map, courier, **`app__map-stack__spacer`** (`flex: 1`), AI Coach; **`gap: 32px`**. Right **`.app__map-right__cards`**: Property, Energy, Available savings; **`gap: 32px`**. **`.app__map-cta-row`**: **`margin-top: 29px`**, **540px** spacer + **DoorCta**. **Do not switch this to CSS Grid** unless the product owner asks — it has repeatedly broken the layout. |
| **Bottom cards** | **AI Coach** and **Available savings** are both **281px** tall (fixed) so card heights match without grid. |
| **Card size** | **540 × 310** px (Figma) |
| **Card** | White, **24px** radius, shadow **0 24px 48px** `rgba(0,0,0,0.08)` |
| **Basemap** | **`/elements/map/basemap.png`**, **left −189px, top −81px**, **802 × 602**, `object-fit: cover` |
| **Address pill** | **20px** from top-left, **24px** radius, shadow **0 4px 16px** `rgba(0,0,0,0.1)`, **16px / 10px** padding, text **Inter** 500 **16px** / **24px** **#111827** |
| **Controls** | Bottom-right **20px**, **36 × 36** buttons, **10px** gap, **10px** radius, same shadow as pill |
| **Assets** | `public/elements/map/` — `basemap.png`, `pin-icon.svg`, `locate-icon.svg`; plus icon inline SVG (Figma FA “plus”) |
| **Component** | `src/components/MapCard.tsx` |

---

## Courier card (under map)

**Figma:** [`60-28501`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28501)

| Property | Value |
|----------|--------|
| **Placement** | Below **`<MapCard />`** in **`.app__map-stack`** — **32px** via **`gap`** |
| **Size** | **540 × 88** px fixed (`height` / `min-height` / `max-height` **88** — overlay may show scaled px under `ViewportCanvas`) |
| **Layout** | Row, **12px** gap, horizontal padding **20px** |
| **Shadow / radius** | Same as map card shadow; **20px** radius |
| **Customer** | Label **14px** regular **#667085** / **20px** lh; name **16px** medium **#101828** / **24px** lh |
| **Phone** | Right-aligned block, **8px** right padding on margin wrapper, **4px** gap between label rows |
| **Icon** | **48 × 48** **#111827**, **14px** radius; white mobile icon (**inline SVG**, Figma FA “mobile”) |
| **Component** | `src/components/CourierCard.tsx` |

---

## AI Coach card (under courier card)

**Figma:** [`60-28517`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28517)

| Property | Value |
|----------|--------|
| **Placement** | After **`app__map-stack__spacer`** in **`.app__map-stack`** — **32px** via **`gap`** |
| **Size** | **540 × 281** px fixed (Figma **60-28517**; overlay may show scaled px under `ViewportCanvas`) |
| **Surface** | **`rgba(255,255,255,0.75)`**, **`backdrop-filter: blur(12px)`**, border **`1px solid rgba(255,255,255,0.6)`**, radius **24px**, shadow **0 24px 48px** `rgba(0,0,0,0.08)` |
| **Padding** | **32px** |
| **Badge** | Pill: **#eef4ff** bg, **#c7d7fe** border, **#3538cd** label **14px** medium; icon **`/elements/header/magic.svg`** (16×16 display) |
| **Divider** | **2px** dashed **#cbd5e1**, full inner width |
| **List** | **`<ol>`**, **16px** regular **#101828**, **47px** line-height; **Then say** / **Avoid** spans **500** weight |
| **Component** | `src/components/AiCoachCard.tsx` |

---

## Property details card (right column)

**Figma:** [`60-28393`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28393)

| Property | Value |
|----------|--------|
| **Placement** | First card in **`.app__map-right__cards`** |
| **Size** | **598 × 238** px fixed (Figma **60-28393**; overlay may show scaled px under `ViewportCanvas`) |
| **Surface** | Same glass treatment as AI Coach card (blur, white tint, border, **24px** radius, shadow) |
| **Padding** | **32px** |
| **Header** | **Property details** — **18px** medium **#101828**, **28px** lh; **Attom** badge **#fffaeb** / **#fedf89** / text **#b54708** **14px** medium |
| **Body** | Rows **Property type**, **Size**, **Year built** — label **16px** medium **#667085**, value **16px** medium **#101828** right-aligned, **20px** row gap |
| **Figma** | Pen/camera icons are **opacity 0** — omitted |
| **Component** | `src/components/PropertyDetailsCard.tsx` |

---

## Energy profile card (under Property details)

**Figma:** [`60-28422`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28422)

| Property | Value |
|----------|--------|
| **Placement** | After **`<PropertyDetailsCard />`** in **`.app__map-right__cards`** — **32px** **`gap`** |
| **Size** | **598 × 179** px fixed (Figma **60-28422**; overlay may show scaled px under `ViewportCanvas`) |
| **Padding** | **24px** (Figma `--spacing-3xl` on card) |
| **Surface** | Same glass as other cards (**blur**, white tint, border, **24px** radius, shadow) |
| **Header** | **Energy profile** **18px** medium **#101828**; badges **Arcadia** + **Genability** (**12px** gap), warning pill styles |
| **Body** | **Utility provider** / **Austin Energy**, **Rate** / **$0.12 per kWh** — **16px** medium, **20px** row gap |
| **Component** | `src/components/EnergyProfileCard.tsx` |

---

## Available savings card

**Figma:** [`60-28443`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28443)

| Property | Value |
|----------|--------|
| **Placement** | After **`<EnergyProfileCard />`** in **`.app__map-right__cards`** — **32px** **`gap`** |
| **Size** | **598 × 281** px fixed (matches AI Coach height); body **`flex: 1`**, **`overflow: hidden`** |
| **Inner stack** | **`gap: 8px`** between **`.savings-card__top`** (title **18px** / **21px** lh per node **60:28448** + **22px** + dashed divider) and **`.savings-card__body`** (**hero** `align-items: flex-end`, **10px** gap, **`gap: 20px`** between hero / divider / rows) |
| **Padding** | **24px** on section |
| **Surface** | Same glass treatment as other right-column cards |
| **Header** | **Available savings** + **DSIRE** badge |
| **Hero** | **$500** — **48px** semibold (**600**), **60px** lh, **-0.96px** tracking; caption **16px** medium **#667085**; row **10px** gap, **`align-items: flex-end`** |
| **Details** | **Rebate type** / **Utility rebate**; **Expires** / **June 30, 2026** (value **#b54708**) |
| **Component** | `src/components/AvailableSavingsCard.tsx` |

---

## Door CTA (“I’m at the door”)

**Figma:** [`60-28527`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28527) (within [`60-28380`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28380))

| Property | Value |
|----------|--------|
| **Placement** | In **`.app__map-cta-row`** under **`.app__map-layout__sync`**; row **`margin-top: 29px`** (Figma `60-28380`) |
| **Size** | **598 × 60** px |
| **Style** | Background **#ffd400**, border **1px #c8a700**, radius **24px**, shadow **0 1px 2px** `rgba(16,24,40,0.05)` |
| **Type** | **Inter** semibold (**600**) **20px** / **30px** **#101828** |
| **Icon** | **30×30** wrap, inline arrow SVG (**#101828** stroke) |
| **Interaction** | Display-only **`div`** (no handler) unless product asks for tap |
| **Component** | `src/components/DoorCta.tsx` |

---

## Stack

- **React** (TypeScript) + **Vite**
- **No Tailwind** in this repo unless explicitly added
- Styles: component **`.css`** files

---

## Rules of thumb for new UI

1. **Design in 1366×1024** — use px that match Figma; avoid “fluid” breakpoints unless we add a second breakpoint later.
2. **Keep new screens inside `.app`** (or a child with explicit dimensions) so `ViewportCanvas` scaling stays correct.
3. **Prefer Figma MCP / linked nodes** for spacing, type, and colors; update this doc when tokens change.
4. **Avatars / branded images:** if the asset already includes border or shadow, do not duplicate in CSS.
5. **Icons:** match Figma **24px** glyphs inside **36×36** targets unless the file specifies otherwise.

---

## Related Figma links

| Area | Node |
|------|------|
| **Property brief screen (full composition)** | [`60-28380`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28380) |
| App background (frame “8”) | [`60-30472`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-30472) |
| Header (detailed top nav) | [`60-28528`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28528) |
| Header (earlier ref) | [`60-30671`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-30671) |
| Breadcrumbs | [`60-28470`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28470) |
| Map card | [`60-28481`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28481) |
| Courier card | [`60-28501`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28501) |
| AI Coach card | [`60-28517`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28517) |
| Property details | [`60-28393`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28393) |
| Energy profile | [`60-28422`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28422) |
| Available savings | [`60-28443`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28443) |
| Door CTA | [`60-28527`](https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28527) |

---

*Last aligned with codebase: header + canvas + ViewportCanvas. Update this file when design or implementation drifts.*
