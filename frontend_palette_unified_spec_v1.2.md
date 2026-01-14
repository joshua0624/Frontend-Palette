# Frontend Palette — Unified Product Specification (v1.2)

## 1. Purpose

Frontend Palette is a constraint-based design exploration tool for web developers using AI-assisted coding workflows.

Its purpose is to allow users to compose a frontend design direction by selecting from a curated set of visual examples through a **live preview interface**, and to export a deterministic, structured design intent that downstream tools can reliably interpret.

The system prioritizes clarity, consistency, and taste constraint over flexibility or creativity.

---

## 2. Problem Statement

AI-assisted frontend generation tools tend to produce generic, repetitive, and stylistically incoherent interfaces due to:

- Vague natural-language prompts
- Overly broad descriptors
- Lack of structured design intent

Frontend Palette solves this by replacing free-form description with example-driven, fixed-vocabulary selection displayed through **real-time visual preview**, producing a stable and repeatable design specification.

---

## 3. Target Users

### Primary Users
- Developers using AI-assisted coding tools
- Indie hackers and technical founders
- Engineers with limited formal design training

### Secondary Users
- Designers seeking rapid design direction alignment
- Small teams needing a shared visual language

**This product is not intended to replace design tools or generate final layouts.**

---

## 4. Core Principles

The system must adhere to the following principles at all times:

**Constraint over choice**
- Fewer, higher-quality options are preferred over breadth.

**Live preview over static examples**
- Users see their selections applied to a real interface in real-time.

**Determinism over interpretation**
- The same inputs always produce the same outputs.

**Closed vocabulary**
- All outputs are pre-authored and fixed.

**Composability**
- Individual selections combine without conflict or contradiction.

**Non-generative**
- The system does not generate new descriptions or content.

---

## 5. Core User Flow

1. User enters the Palette Builder
2. User sees a live preview of a sample website displaying all current selections
3. User cycles through options for each dimension using arrow controls
4. Preview updates in real-time with each selection
5. User navigates through all 9 dimensions, making selections
6. User clicks Export button
7. Modal overlay displays summary with preview thumbnail and text specification
8. User copies plain text or downloads JSON

**No step includes free-form text input.**

---

## 6. Design Dimensions (v1 Scope)

The system supports a limited, curated set of design dimensions. Each dimension represents a single axis of frontend design decision-making.

### Required Dimensions (9 Total)

1. **Color** — Overall palette character and contrast philosophy
2. **Typography** — Typeface category and hierarchy emphasis
3. **Motion** — Presence, subtlety, and functional intent of motion
4. **Spacing** — Layout breathing room and rhythm
5. **Layout** — Structural approach to content organization
6. **Geometry** — Component shape and form
7. **Depth** — Use of borders, shadows, and elevation
8. **Emphasis** — How interactive elements are visually distinguished
9. **Tone** — Overall emotional and stylistic posture

**Note:** Dimension names are shortened for space in the UI. Full names are used in export output.

**Each dimension allows exactly one selection.**

**Architecture Note:** The system should be architected to support adding 1-2 additional dimensions and more options per dimension in future versions, but v1 implements only these 9 dimensions with their specified option counts.

---

## 7. Option Structure

Each selectable option consists of:

**Short Label**
- Human-readable name displayed in UI
- Shown in dimension selector with arrows

**Full Descriptor**
- Pre-authored semantic description (1-2 sentences)
- Shown on hover tooltip
- Used in export output

**Visual Effect**
- When selected, updates the live preview interface
- Applied via CSS custom properties
- Changes are immediate and reversible

**Descriptors are authored once and never altered at runtime.**

---

## 8. Predetermined Options (v1)

**CRITICAL:** The system uses ONLY the predetermined options defined below. No new options are generated at runtime. The architecture supports adding new options in future versions, but all options must be pre-authored and added to this specification.

### 8.1 Color System (12 Options)

**Full Dimension Name:** Color System  
**UI Display Name:** Color  
**Purpose:** Define palette behavior and contrast strategy.

**Scope:** Includes saturation, contrast, accent usage. Excludes specific colors, brand palettes, light/dark logic.

1. **Muted Neutral with Accent**: Use a low-saturation neutral color palette with warm or cool undertones, and apply a single restrained accent color sparingly to highlight primary actions and key states.

2. **High-Contrast Functional**: Use a high-contrast color palette with clear foreground and background separation, and apply accent colors primarily to reinforce interactive states and system feedback.

3. **Soft Monochrome**: Use a predominantly monochrome color palette with subtle tonal variation, and rely on value shifts rather than hue changes to establish hierarchy and emphasis.

4. **Balanced Neutral Spectrum**: Use a balanced neutral palette with moderate saturation and controlled contrast, and distribute color evenly across surfaces, text, and interactive elements without relying on a dominant accent.

5. **Dark-Forward Interface**: Use a dark-forward color palette with subdued backgrounds and elevated foreground contrast, and reserve brighter tones for primary actions and critical states only.

6. **Muted Pastel Accents**: Use a low-saturation neutral palette and apply soft pastel accent tones selectively to highlight interface states without compromising overall readability.

7. **Functional Warm Palette**: Use a warm-toned palette with medium contrast, applying accent colors to primary actions while keeping secondary elements subdued for hierarchy clarity.

8. **Soft Tinted Canvas**: Use a subtle colored background instead of white or neutral tones, applying soft blue or lavender base tones throughout the interface to create a calm, distinctive atmosphere.

9. **Vibrant Accent Highlights**: Use a neutral base palette and apply vibrant, high-saturation accent colors strategically to draw attention to primary actions and critical interface states.

10. **Organic Earth Tones**: Use a warm earth-toned palette with natural browns and greens, applying subdued contrast to create a grounded, organic interface aesthetic.

11. **Retro Warm Burst**: Use a saturated warm color palette inspired by vintage design, applying rich oranges, browns, and golden yellows to create an energetic, nostalgic interface aesthetic.

12. **Bold Electric Contrast**: Use high-contrast color combinations with bright, energetic accent tones to create a playful, modern interface that draws attention and conveys vibrancy.

### 8.2 Typography & Hierarchy (6 Options)

**Full Dimension Name:** Typography & Hierarchy  
**UI Display Name:** Typography  
**Purpose:** Define typeface class and text hierarchy.

**Scope:** Includes pairing, hierarchy, readability. Excludes specific fonts, decorative/novelty fonts.

1. **Sans Dominant**: Use a sans-serif typeface for headings and body, emphasizing clear hierarchy by applying larger, bolder headings above smaller body text, with consistent spacing to guide reading order.

2. **Serif Dominant**: Use a serif typeface for headings with a sans-serif body, applying clear hierarchy and proportional scaling to distinguish headings from content while maintaining consistent readability.

3. **Balanced Serif + Sans**: Pair serif and sans-serif typefaces evenly across headings and body text, ensuring visual hierarchy is clear and consistent while prioritizing legibility and structured content flow.

4. **Neutral Sans + Serif Mix**: Use sans-serif for body and serif for headings selectively, emphasizing structured hierarchy while maintaining readability and visual balance.

5. **Monoline Sans**: Use a single sans-serif typeface for headings and body text, applying size and weight differences to create clear hierarchy without typographic variety.

6. **Classic Serif Only**: Use a single serif typeface for both headings and body, maintaining hierarchy through size, weight, and spacing while prioritizing readability.

### 8.3 Motion Philosophy (3 Options)

**Full Dimension Name:** Motion Philosophy  
**UI Display Name:** Motion  
**Purpose:** Define motion to guide attention and communicate function.

**Scope:** Includes presence/absence, subtlety, functional intent. Excludes complex/decorative motion.

1. **None**: Do not use motion effects. All transitions should be instantaneous, and interface feedback relies solely on static visual changes.

2. **Subtle & Functional**: Use minimal, purposeful motion to indicate state changes or transitions. Keep durations short and easing gentle, emphasizing clarity over expression.

3. **Expressive but Restrained**: Apply restrained motion for transitions and interactive feedback, ensuring all movement serves functional guidance and never draws attention unnecessarily from primary content.

### 8.4 Spacing & Density (5 Options)

**Full Dimension Name:** Spacing & Density  
**UI Display Name:** Spacing  
**Purpose:** Define layout breathing room and information density.

1. **Spacious & Airy**: Use generous vertical and horizontal spacing throughout the interface, creating distinct separation between elements to maximize readability and minimize visual clutter.

2. **Balanced**: Use moderate spacing between components, ensuring clear separation without creating excessive white space, maintaining a clean, comfortable rhythm.

3. **Compact Functional**: Reduce spacing between elements while maintaining sufficient separation for clarity, prioritizing information density without overwhelming the user.

4. **Tight Grid**: Apply a consistent, tight spacing system across components, emphasizing structural alignment and visual rhythm for efficient content display.

5. **Hierarchy-Driven**: Vary spacing deliberately based on content importance, using larger separation for high-priority elements and tighter spacing for secondary content to reinforce hierarchy.

### 8.5 Layout Philosophy (5 Options)

**Full Dimension Name:** Layout Philosophy  
**UI Display Name:** Layout  
**Purpose:** Define macro-structure and content flow.

1. **Vertical Stack**: Arrange content primarily in a vertical flow, with clearly separated sections and a predictable top-to-bottom progression for easy scanning.

2. **Modular Segments**: Organize content into clearly defined blocks or cards, allowing independent units to be recognized at a glance while maintaining consistent spacing and alignment.

3. **Grid-Based**: Use a structured grid to position elements, emphasizing alignment and balance while maintaining consistent spacing across rows and columns.

4. **Centered Focus**: Concentrate primary content along the central axis, with secondary content flanking or subordinated, creating a strong visual focus for key interface elements.

5. **Hierarchy-Oriented Flow**: Arrange content according to priority and importance, applying structural spacing and grouping to emphasize high-value information while de-emphasizing less critical elements.

### 8.6 Component Geometry (5 Options)

**Full Dimension Name:** Component Geometry  
**UI Display Name:** Geometry  
**Purpose:** Define component shape and form.

1. **Sharp Corners**: Apply square corners to all components, maintaining a rigid, predictable geometry and consistent alignment across the interface.

2. **Slightly Rounded**: Use subtly rounded corners on components to soften edges while preserving structural consistency and alignment.

3. **Fully Rounded**: Apply fully rounded corners to components where practical, maintaining shape consistency and ensuring a visually friendly interface.

4. **Mixed Geometry**: Combine slightly rounded corners on interactive components with sharp corners on static elements, ensuring deliberate contrast while maintaining cohesion.

5. **Hierarchy-Driven Rounding**: Apply corner radius based on component importance, using more prominent rounding for primary interactive elements and subtler rounding for secondary elements.

### 8.7 Surface & Depth (5 Options)

**Full Dimension Name:** Surface & Depth  
**UI Display Name:** Depth  
**Purpose:** Define layering, elevation, and separation.

1. **Flat Surfaces**: Use minimal elevation and no shadows, relying on spacing and alignment to indicate hierarchy and separation.

2. **Subtle Elevation**: Apply gentle shadows or elevation to interactive elements only, providing visual cues without drawing attention from content hierarchy.

3. **Layered Depth**: Introduce multiple surface layers with increasing elevation to indicate hierarchy, while maintaining subtlety and avoiding visual clutter.

4. **Functional Shadows**: Use shadows purposefully to highlight primary actions or interactive components, ensuring clarity and consistency across all surfaces.

5. **Hierarchy-Driven Depth**: Apply depth selectively based on component importance, providing stronger elevation for critical elements while keeping secondary content flatter.

### 8.8 Interaction Emphasis (5 Options)

**Full Dimension Name:** Interaction Emphasis  
**UI Display Name:** Emphasis  
**Purpose:** Define how interactive elements are visually distinguished.

1. **Primary-Focused**: Highlight only primary interactive elements with distinctive visual treatment, keeping secondary elements subtle and minimally emphasized.

2. **Balanced Emphasis**: Apply consistent visual distinction to both primary and secondary interactive elements, ensuring all actions are clearly perceivable.

3. **Minimal Emphasis**: Apply subtle differentiation between primary and secondary elements, relying on shape, spacing, or positioning rather than color or styling for clarity.

4. **Accent-Driven**: Use accent color or visual style selectively to indicate primary interactive elements while secondary elements remain neutral.

5. **Hierarchy-Based**: Emphasize interactive elements according to functional importance, giving stronger visual cues to higher-priority actions and subtler cues to secondary controls.

### 8.9 Visual Tone (5 Options)

**Full Dimension Name:** Visual Tone  
**UI Display Name:** Tone  
**Purpose:** Define overarching stylistic posture.

1. **Neutral**: Apply a restrained visual tone with consistent weight and minimal embellishment, prioritizing clarity and functional readability throughout the interface.

2. **Minimalist**: Use a clean, simple tone with minimal contrast and decoration, emphasizing structural clarity and straightforward component presentation.

3. **Functional Emphasis**: Apply a practical visual tone that clearly communicates hierarchy and interactivity, ensuring all elements are purposeful and predictable.

4. **Subtle Sophistication**: Maintain a restrained and polished visual tone with slight variation in weight and layering to subtly enhance hierarchy without introducing flair.

5. **Hierarchy-Driven Tone**: Adjust visual posture according to content priority, ensuring high-importance elements are visually prominent while lower-priority elements remain understated.

---

## 9. Descriptor Authoring Rules

**CRITICAL:** These rules apply to all descriptors in the system.

### Purpose
Ensure all output is deterministic, instructive, and fully interpretable by downstream AI tools.

### Global Language Rules
- **Tone:** Instructive, imperative, active voice
- **Length:** 1–2 sentences
- **Vocabulary:** Closed, concrete, consistent
- **Forbidden:** Subjective language, vague qualifiers, metaphors, brand references
- **Consistency:** No cross-dimension leakage; no contradictions

### Authoring Checklist
- [ ] Imperative language
- [ ] 1–2 sentences
- [ ] No banned terms
- [ ] Self-contained
- [ ] Deterministic

---

## 10. Live Preview System

### 10.1 Overview

The palette builder features a **persistent live preview** that displays a sample website interface. This preview updates in real-time as users make selections, allowing them to see the compositional effect of their choices across all 9 dimensions.

**Core Principle:** The preview is the primary visual feedback mechanism. Users should be able to determine their preferences by seeing the preview change, without needing individual visual examples for each option.

### 10.2 Preview Content

The preview displays a full sample website page with the following elements:

**Header/Navigation Section:**
- Site logo/brand text: "Acme Design Studio"
- Navigation links: "Work", "About", "Services", "Contact"
- Primary CTA button: "Get Started"

**Hero Section:**
- Main heading (H1): "Beautiful Interfaces, Thoughtfully Crafted"
- Subheading/body text: "We create digital experiences that connect with your audience and drive meaningful results through design excellence and technical precision."
- Primary button: "View Our Work"
- Secondary button: "Learn More"

**Dashboard/Cards Section:**
- Section heading (H2): "Our Services"
- Three cards with:
  - Card heading: "Design Systems", "Web Development", "Brand Strategy"
  - Card body text: Brief description (2-3 sentences each)
  - Card button: "Learn More"

**Content Section:**
- Section heading (H2): "Why Choose Us"
- Paragraph text (3-4 sentences)
- List items (3-4 bullet points)

**Footer:**
- Footer text: "© 2026 Acme Design Studio. All rights reserved."
- Footer links: "Privacy", "Terms", "Contact"

**Form Elements (Optional but Recommended):**
- Text input with label: "Email Address"
- Checkbox with label: "Subscribe to newsletter"

**Note:** This specific content should be hardcoded in the specification to ensure consistency across implementations.

### 10.3 Preview Behavior

**Real-Time Updates:**
- When a user cycles to a different option, the preview updates immediately
- Changes are applied via CSS custom properties (variables)
- All 9 dimensions affect the preview simultaneously

**Smooth Transitions:**
- Implement a small delay (100-200ms) before applying changes when rapidly cycling
- Use CSS transitions (300-500ms) for visual smoothness
- Prevent violent flashing when users cycle through multiple options quickly
- Balance responsiveness with visual comfort

**Technical Implementation:**
- Use CSS custom properties for all design tokens
- Each option maps to a specific set of CSS variable values
- Preview component subscribes to selection state and updates variables
- Transitions are handled via CSS transition properties

### 10.4 Preview Responsiveness

The preview should demonstrate responsive behavior within its container:
- Adapts to available space
- Shows how the design system scales
- Maintains readability at different sizes

**Note:** The preview itself is not a fully responsive website, but rather a demonstration of the design system at the current viewport size.

---

## 11. User Interface Specification

### 11.1 Layout Structure

The interface uses a **split-view layout** with a sidebar and preview pane.

**Desktop Layout (Primary):**
```
┌────────────────────────────────────────────────────────┐
│  Sidebar (30%)          │  Preview (70%)               │
│                         │                              │
│  [Logo]                 │  [Live Preview Interface]    │
│  "Frontend Palette"     │                              │
│                         │  - Updates in real-time      │
│  1. Color               │  - Shows all selections      │
│  ← Muted Neutral →      │  - Full sample website       │
│  ● ○ ○ ○ ○ ○ ○         │                              │
│                         │                              │
│  2. Typography          │                              │
│  ← Sans Dominant →      │                              │
│  ● ○ ○ ○ ○ ○           │                              │
│                         │                              │
│  3. Motion              │                              │
│  ← Subtle & Functional →│                              │
│  ○ ● ○                  │                              │
│                         │                              │
│  [... 6 more dims]      │                              │
│                         │                              │
│  [Export]               │                              │
└────────────────────────────────────────────────────────┘
```

**Responsive Breakpoint:**
- Transition to compact layout when sidebar becomes difficult to use
- Recommended breakpoint: 1024px or below
- Maintain same split-view structure even on smaller screens
- Do not collapse to single column

**Small Screen Layout:**
```
┌────────────────────────────────────────────────────────┐
│  Sidebar (30%)          │  Preview (70%)               │
│                         │                              │
│  [Logo]                 │  [Live Preview Interface]    │
│  "Frontend Palette"     │                              │
│                         │                              │
│  ← Color →              │  - Updates in real-time      │
│  ● ○ ○ ○ ○ ○ ○ ○ ○     │  - Shows all selections      │
│  (dimension dots)       │                              │
│                         │                              │
│  ← Muted Neutral →      │                              │
│  ● ○ ○ ○ ○ ○ ○         │                              │
│  (option dots)          │                              │
│                         │                              │
│  [Export]               │                              │
└────────────────────────────────────────────────────────┘
```

### 11.2 Sidebar Components

**Logo:**
- Simple text: "Frontend Palette"
- Positioned at top of sidebar
- Minimal styling (will be updated in future versions)

**Dimension Selectors (Large Screen):**
- All 9 dimensions visible and stacked vertically
- Each dimension shows:
  - Numbered label with shortened name (e.g., "1. Color")
  - Left arrow button
  - Current option label (e.g., "Muted Neutral with Accent")
  - Right arrow button
  - Dots indicator showing current option position (filled dot = selected)

**Dimension Selector (Small Screen):**
- Only one dimension visible at a time
- Dimension navigation:
  - Left arrow button
  - Current dimension name (e.g., "Color")
  - Right arrow button
  - Dimension dots (9 dots, one filled for current dimension)
- Option selection below:
  - Left arrow button
  - Current option label
  - Right arrow button
  - Option dots (number varies by dimension, one filled for current option)

**Export Button:**
- Positioned at bottom of sidebar
- Always enabled (users can export at any time)
- Clear, prominent styling

### 11.3 Interaction Patterns

**Arrow Navigation:**
- Clicking left/right arrows cycles through options
- Navigation loops (last option → first option when clicking right)
- Clicking arrow updates the preview immediately

**Dimension Navigation (Small Screen Only):**
- Clicking left/right arrows next to dimension name cycles through dimensions 1-9
- Loops at beginning and end
- Maintains current selection for each dimension when navigating away and back

**Hover Tooltips:**
- Hovering over the current option label shows custom styled tooltip
- Tooltip displays the full 1-2 sentence descriptor
- Tooltip styling should be readable and visually integrated
- Appears above or below label depending on available space

**Dots Indicators:**
- Visual representation of current position
- Filled dot = current selection
- Empty dots = other available options
- Clickable (optional for v1, recommended for future)

**Selection Behavior:**
- The currently displayed option is always the selected option
- No separate "confirm" or "select" action needed
- Cycling through options temporarily changes preview
- Whatever option is displayed when user moves to next dimension (or clicks Export) is saved

**State Persistence:**
- Each dimension retains its selection independently
- Navigating between dimensions (small screen) preserves previous selections
- All dimensions default to their first option on initial load
- No session persistence (fresh start each time)

### 11.4 Export Modal

**Trigger:**
- User clicks Export button in sidebar

**Behavior:**
- Opens as centered modal overlay
- Dims/darkens background
- Preview pane remains visible but dimmed behind modal

**Modal Content:**
```
┌────────────────────────────────────────────┐
│  Design Intent Summary            [Close]  │
│                                            │
│  ┌──────────────────────────┐             │
│  │  [Preview Thumbnail]     │             │
│  │  (Small version of       │             │
│  │   current preview)       │             │
│  └──────────────────────────┘             │
│                                            │
│  Color System:                             │
│  Use a low-saturation neutral color        │
│  palette with warm or cool undertones...   │
│                                            │
│  Typography & Hierarchy:                   │
│  Use a sans-serif typeface for headings... │
│                                            │
│  [... all 9 dimensions with full names     │
│   and complete descriptors]                │
│                                            │
│  ┌──────────────┐  ┌──────────────┐       │
│  │ Copy Plain   │  │ Download     │       │
│  │ Text         │  │ JSON         │       │
│  └──────────────┘  └──────────────┘       │
│                                            │
└────────────────────────────────────────────┘
```

**Modal Features:**
- Close button (X) in top-right corner
- Clicking outside modal or pressing Escape closes it
- Preview thumbnail shows current state of preview
- All dimension names use full names (not shortened versions)
- All descriptors shown in full
- Two action buttons: Copy Plain Text, Download JSON
- Copy button provides visual feedback ("Copied!")

---

## 12. Output Specification

### 12.1 Output Format

The output is a structured, human-readable design intent block using **full dimension names**.

**Properties:**
- Plain text
- Ordered by dimension (1-9)
- Uses full dimension names
- No embellishment or stylistic variation
- Stable across sessions

### 12.2 Plain Text Output Format

```
Design Intent:

Color System:
[descriptor]

Typography & Hierarchy:
[descriptor]

Motion Philosophy:
[descriptor]

Spacing & Density:
[descriptor]

Layout Philosophy:
[descriptor]

Component Geometry:
[descriptor]

Surface & Depth:
[descriptor]

Interaction Emphasis:
[descriptor]

Visual Tone:
[descriptor]
```

### 12.3 JSON Output Format

```json
{
  "version": "1.0",
  "timestamp": "2026-01-08T12:00:00Z",
  "selections": {
    "colorSystem": {
      "label": "Muted Neutral with Accent",
      "descriptor": "Use a low-saturation neutral color palette with warm or cool undertones, and apply a single restrained accent color sparingly to highlight primary actions and key states."
    },
    "typographyHierarchy": {
      "label": "Sans Dominant",
      "descriptor": "Use a sans-serif typeface for headings and body, emphasizing clear hierarchy by applying larger, bolder headings above smaller body text, with consistent spacing to guide reading order."
    },
    "motionPhilosophy": {
      "label": "Subtle & Functional",
      "descriptor": "Use minimal, purposeful motion to indicate state changes or transitions. Keep durations short and easing gentle, emphasizing clarity over expression."
    },
    "spacingDensity": {
      "label": "Spacious & Airy",
      "descriptor": "Use generous vertical and horizontal spacing throughout the interface, creating distinct separation between elements to maximize readability and minimize visual clutter."
    },
    "layoutPhilosophy": {
      "label": "Vertical Stack",
      "descriptor": "Arrange content primarily in a vertical flow, with clearly separated sections and a predictable top-to-bottom progression for easy scanning."
    },
    "componentGeometry": {
      "label": "Slightly Rounded",
      "descriptor": "Use subtly rounded corners on components to soften edges while preserving structural consistency and alignment."
    },
    "surfaceDepth": {
      "label": "Subtle Elevation",
      "descriptor": "Apply gentle shadows or elevation to interactive elements only, providing visual cues without drawing attention from content hierarchy."
    },
    "interactionEmphasis": {
      "label": "Primary-Focused",
      "descriptor": "Highlight only primary interactive elements with distinctive visual treatment, keeping secondary elements subtle and minimally emphasized."
    },
    "visualTone": {
      "label": "Neutral",
      "descriptor": "Apply a restrained visual tone with consistent weight and minimal embellishment, prioritizing clarity and functional readability throughout the interface."
    }
  }
}
```

**This output is the sole authoritative artifact produced by the system.**

---

## 13. Determinism & Consistency Rules

The system must guarantee:

- No contradictory descriptors
- No duplicate or overlapping dimensions
- No variation in phrasing between identical selections
- Identical selection sets produce identical output text
- Identical selection sets produce identical visual preview

**If these guarantees are violated, the system is considered incorrect.**

---

## 14. Technical Architecture

### 14.1 CSS Custom Properties

All design tokens must be implemented as CSS custom properties (variables) to enable real-time preview updates.

**Example Structure:**
```css
:root {
  /* Color System */
  --color-background: #fafafa;
  --color-background-elevated: #ffffff;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-accent: #0066cc;
  --color-border: #e0e0e0;
  
  /* Typography & Hierarchy */
  --font-heading: 'System-UI', sans-serif;
  --font-body: 'System-UI', sans-serif;
  --font-size-h1: 3rem;
  --font-size-h2: 2rem;
  --font-size-body: 1rem;
  --font-weight-heading: 700;
  --font-weight-body: 400;
  
  /* Spacing & Density */
  --spacing-section: 4rem;
  --spacing-component: 2rem;
  --spacing-element: 1rem;
  
  /* Component Geometry */
  --border-radius-button: 4px;
  --border-radius-card: 8px;
  
  /* Surface & Depth */
  --shadow-subtle: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-elevated: 0 4px 6px rgba(0,0,0,0.1);
  
  /* Motion Philosophy */
  --transition-duration: 150ms;
  --transition-easing: ease-out;
}
```

**When an option is selected:**
- Update the relevant CSS custom properties
- Changes propagate through the preview automatically
- Use JavaScript to update variables: `document.documentElement.style.setProperty('--color-accent', '#0066cc')`

### 14.2 State Management

**Selection State:**
```javascript
{
  colorSystem: 0,           // Index of selected option (0-6)
  typographyHierarchy: 0,   // Index of selected option (0-5)
  motionPhilosophy: 0,      // Index of selected option (0-2)
  spacingDensity: 0,        // Index of selected option (0-4)
  layoutPhilosophy: 0,      // Index of selected option (0-4)
  componentGeometry: 0,     // Index of selected option (0-4)
  surfaceDepth: 0,          // Index of selected option (0-4)
  interactionEmphasis: 0,   // Index of selected option (0-4)
  visualTone: 0             // Index of selected option (0-4)
}
```

**UI State (Small Screen Only):**
```javascript
{
  currentDimension: 0  // Which dimension is visible (0-8)
}
```

### 14.3 Extensibility Architecture

**CRITICAL:** The codebase must be structured to support future additions without breaking changes.

**Requirements:**
- Adding a new option to an existing dimension should require only updating the data file
- Adding a new dimension should require minimal code changes
- All dimension-specific logic should be data-driven, not hardcoded
- CSS custom properties should be namespaced by dimension

**Data Structure:**
```javascript
// dimensions.js
export const DIMENSIONS = [
  {
    id: 'colorSystem',
    fullName: 'Color System',
    shortName: 'Color',
    description: 'Define palette behavior and contrast strategy',
    order: 1,
    options: [
      {
        id: 'muted-neutral-accent',
        label: 'Muted Neutral with Accent',
        descriptor: 'Use a low-saturation neutral color palette...',
        cssVars: {
          '--color-background': '#fafafa',
          '--color-text-primary': '#1a1a1a',
          // ... all CSS variables for this option
        }
      },
      // ... more options
    ]
  },
  // ... more dimensions
];
```

**Note:** While v1 implements 9 dimensions with fixed option counts, the architecture must accommodate 1-2 additional dimensions and additional options per dimension in future versions.

---

## 15. Non-Goals

The system explicitly does **not**:

- Generate layouts
- Write code
- Replace design software
- Provide branding strategy
- Adapt output dynamically
- Create new options at runtime
- Accept free-form text input
- Interpret or modify descriptors
- Provide multiple preview templates (v1 has one fixed template)

**These are outside scope by design.**

---

## 16. Success Criteria

The product is successful if:

- Users consistently produce clearer AI-generated UIs downstream
- Users reuse the output verbatim across projects
- The system remains simple and fast despite feature growth pressure
- Design decisions feel deliberate, not overwhelming
- Output is deterministic and reproducible
- Users understand the constraint-based approach
- The tool reduces "AI slop" in generated interfaces
- Users can see and understand how their selections work together compositionally

---

## 17. Future-Proofing (Non-Implementational)

The architecture should allow for:

- Additional dimensions added sparingly (1-2 more)
- New options within existing dimensions (pre-authored only)
- Export formats beyond plain text and JSON
- Multiple preview templates (different types of websites/interfaces)
- Team-based comparison of design intent
- Version tracking of palette selections

**No assumptions are made about future extensions beyond maintaining the core principles and extensibility architecture.**

---

## 18. Implementation Addendum (v1.2)

This section documents specific implementation decisions for v1.2 development.

### 18.1 Live Preview System

**Decision:** Use real-time preview with CSS custom properties rather than static visual examples.

**Rationale:**
- Shows compositional effect of all selections
- Provides immediate visual feedback
- Demonstrates how dimensions interact
- More intuitive than isolated examples
- Aligns with "examples over abstraction" principle

**Implementation:**
- Single fixed preview template (sample website)
- Specific placeholder content defined in Section 10.2
- All design tokens as CSS custom properties
- Smooth transitions (100-200ms delay + 300-500ms CSS transitions)
- Preview updates on every option change

### 18.2 Site Design Philosophy

**Decision:** Neutral, functional design for the Frontend Palette site itself.

**Rationale:**
- Avoids biasing users toward a particular aesthetic
- Lets the preview be the focus
- Maintains credibility as a constraint-based system

**Guidelines:**
- Clean, readable typography
- Clear hierarchy and navigation
- Minimal decoration
- Fast and responsive
- Desktop-first design (optimize for desktop, then adapt to mobile)
- Follows good frontend design practices without being opinionated

**Note:** The site may eventually use its own palette methodology to demonstrate the tool's effectiveness.

### 18.3 Export Functionality (v1.2)

**Formats:**
- Plain text (copy to clipboard)
- JSON (download file)

**Delivery Method:**
- Centered modal overlay
- Dimmed background
- Close button and click-outside-to-close
- Preview thumbnail included
- All 9 dimensions with full descriptors

**Plain Text Format:** See Section 12.2

**JSON Format:** See Section 12.3

### 18.4 Interaction Pattern

**Primary Pattern:** Arrow-based cycling with live preview

**Desktop Experience:**
- All 9 dimensions visible in sidebar
- Each dimension has left/right arrows to cycle options
- Dots indicator shows current option
- Preview updates in real-time on right side
- No dimension navigation needed (all visible)

**Small Screen Experience:**
- One dimension visible at a time
- Dimension navigation arrows (← Dimension Name →)
- Dimension dots (9 dots showing current dimension)
- Option navigation arrows (← Option Label →)
- Option dots (showing current option within dimension)
- Preview maintained on right side (may be smaller)

**Transition Breakpoint:**
- Approximately 1024px width
- Switch when sidebar becomes difficult to interact with
- Maintain split-view layout at all screen sizes

### 18.5 Data Persistence

**Decision:** No persistence (fresh start each session)

**Rationale:**
- Simplifies v1 implementation
- Encourages deliberate, complete sessions
- Avoids state management complexity
- Users can save their exports externally

**Behavior:**
- All dimensions default to first option on load
- Page refresh resets all selections
- No localStorage or session storage

**Future:** May add session persistence in v2 based on user feedback.

### 18.6 Feature Scope (v1.2)

**Included:**
- ✅ Landing page with explanation and example output
- ✅ Palette Builder with live preview
- ✅ Arrow-based navigation for all dimensions
- ✅ Dots indicators for progress
- ✅ Responsive layout (desktop-first)
- ✅ Hover tooltips with full descriptors
- ✅ Export modal with preview thumbnail
- ✅ Plain text copy to clipboard
- ✅ JSON download
- ✅ Real-time preview updates
- ✅ Smooth transitions between options
- ✅ Custom styled tooltips

**Excluded (Future Versions):**
- ❌ Library/browse mode
- ❌ Share URL with encoded selections
- ❌ User accounts or saved palettes
- ❌ Backend/database
- ❌ Analytics or usage tracking
- ❌ Team collaboration features
- ❌ Multiple preview templates
- ❌ Session persistence
- ❌ Keyboard shortcuts (beyond basic tab/enter)

### 18.7 Technical Stack Recommendations

**Framework:** React (recommended) or vanilla HTML/CSS/JS
- React preferred for state management and component reusability
- Vanilla acceptable for simplicity

**No Backend Required:** Fully client-side application

**Libraries:**
- Minimal dependencies preferred
- CSS-in-JS or CSS Modules acceptable
- No UI framework dependencies (build custom)

**Hosting:**
- Static site hosting (Vercel, Netlify, GitHub Pages, Cloudflare Pages)
- No server-side rendering required

### 18.8 Development Priorities

**Phase 1: Data & Structure**
1. Create dimension data structure with all options
2. Define CSS custom properties for all design tokens
3. Map options to CSS variable values

**Phase 2: Preview Component**
4. Build sample website preview component
5. Implement CSS variable application
6. Test real-time updates

**Phase 3: Sidebar & Navigation**
7. Build dimension selectors (desktop version)
8. Implement arrow navigation
9. Add dots indicators
10. Build responsive small-screen version

**Phase 4: Interaction & Polish**
11. Implement smooth transitions
12. Add hover tooltips
13. Build export modal
14. Implement copy/download functionality

**Phase 5: Landing & Final**
15. Create landing page
16. Final responsive testing
17. Performance optimization
18. User testing and refinement

---

## 19. Version History

- **v1.0** — Initial unified specification combining product requirements and dimension specifications
  - Consolidates original documents
  - Establishes 9 dimensions as canonical
  - Clarifies predetermined options approach

- **v1.1** — Added Implementation Addendum
  - Documents visual examples approach (generated style tiles)
  - Specifies neutral site design philosophy
  - Defines export formats (plain text + JSON)
  - Establishes card carousel interaction pattern
  - Sets data persistence strategy
  - Scopes v1 features

- **v1.2** — Complete UX redesign with live preview system
  - Replaces card-based selection with live preview interface
  - Adds split-view layout specification
  - Defines arrow-based navigation pattern
  - Adds dots progress indicators
  - Specifies responsive small-screen behavior
  - Adds hover tooltips for descriptors
  - Defines export modal overlay
  - Adds specific placeholder content for preview
  - Specifies CSS custom properties architecture
  - Adds smooth transition requirements
  - Clarifies extensibility requirements
  - Shortens dimension names for UI display

---

**End of Specification**
