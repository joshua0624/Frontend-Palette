## Available Skills

This project uses the frontend-design skill located in `.claude/skills/frontend-design/`.

**When to use it:**
- Implementing the preview component CSS
- Choosing fonts, colors, and visual details for each design option
- Making the preview feel polished and professional

**When NOT to use it:**
- Overriding the predetermined design options in the spec
```

# Frontend Palette v1.2 - Project Instructions

## Project Overview

Frontend Palette is a constraint-based design exploration tool featuring a **live preview system**. Users select from predetermined design options across 9 dimensions using arrow navigation while seeing their choices applied to a real website interface in real-time.

**Key Principle:** This is a non-generative, constraint-based system with live compositional preview. NO new options are created at runtime. ALL design choices are predetermined.

## Core Documents

1. **Primary Specification:** `frontend_palette_unified_spec_v1.2.md`
   - Single source of truth for all product requirements
   - Contains all 9 dimensions and 51 predetermined options
   - Includes complete UI/UX specification and implementation guidance

2. **This File:** Project-level context and development guidelines

## Critical Constraints

### What This System MUST Do
- Display a live preview of a sample website
- Update preview in real-time as users cycle through options
- Present exactly 9 dimensions with arrow navigation
- Show predetermined options only (no generation)
- Use CSS custom properties for all design tokens
- Produce deterministic, reproducible output
- Use fixed descriptors verbatim from spec
- Export in plain text and JSON formats
- Show dots indicators for progress
- Provide hover tooltips with full descriptors

### What This System MUST NOT Do
- Generate new options or descriptors
- Accept free-form text input
- Modify or interpret descriptors
- Create layouts or generate code for users
- Adapt output based on context
- Use static card examples instead of live preview

**Violating these constraints means the implementation is incorrect.**

## UX Pattern: Live Preview with Arrow Navigation

**Core Interaction:**
1. User sees live preview of sample website (70% of screen)
2. Sidebar (30%) shows all 9 dimensions with arrow controls
3. User clicks arrows to cycle through options within each dimension
4. Preview updates immediately to reflect the selection
5. User can see how all dimensions work together compositionally
6. When satisfied, user clicks Export to get text specification

**Key Difference from v1.1:** No card-based selection. The preview IS the visual feedback.

## Layout Structure

### Desktop (Primary)

```
┌─────────────────────────────────────────────┐
│  Sidebar 30%        │  Preview 70%          │
│                     │                       │
│  [Logo]             │  [Live Sample Site]   │
│  Frontend Palette   │                       │
│                     │  - Header/Nav         │
│  1. Color           │  - Hero Section       │
│  ← Muted Neutral →  │  - Buttons            │
│  ● ○ ○ ○ ○ ○ ○     │  - Cards/Dashboard    │
│                     │  - Content Sections   │
│  2. Typography      │                       │
│  ← Sans Dominant →  │  Updates in real-time │
│  ● ○ ○ ○ ○ ○       │  as user cycles       │
│                     │  through options      │
│  3. Motion          │                       │
│  ← Subtle →         │                       │
│  ○ ● ○              │                       │
│                     │                       │
│  [... 6 more dims]  │                       │
│                     │                       │
│  [Export]           │                       │
└─────────────────────────────────────────────┘
```

### Small Screen (<1024px)

```
┌─────────────────────────────────────────────┐
│  Sidebar 30%        │  Preview 70%          │
│                     │                       │
│  [Logo]             │  [Live Sample Site]   │
│  Frontend Palette   │                       │
│                     │                       │
│  ← Color →          │  Same preview,        │
│  ● ○ ○ ○ ○ ○ ○ ○ ○ │  potentially smaller  │
│  (dimension dots)   │                       │
│                     │                       │
│  ← Muted Neutral →  │                       │
│  ● ○ ○ ○ ○ ○ ○     │                       │
│  (option dots)      │                       │
│                     │                       │
│  [Export]           │                       │
└─────────────────────────────────────────────┘
```

## Implementation Priorities (v1.2)

### Phase 1: Data Structure & CSS Architecture
1. Create `dimensions.js` with all 9 dimensions and 51 options
2. Define complete CSS custom properties structure
3. Map each option to its CSS variable values
4. Ensure extensibility for future additions

### Phase 2: Preview Component
5. Build sample website preview (specific content in spec Section 10.2)
6. Implement CSS variable application system
7. Test that changing variables updates preview correctly
8. Add smooth CSS transitions

### Phase 3: Sidebar Navigation (Desktop)
9. Build dimension selector component
10. Implement arrow navigation for cycling options
11. Add dots indicators showing current selection
12. Wire up state management to update preview

### Phase 4: Responsive Small Screen
13. Add dimension navigation (cycling between dimensions 1-9)
14. Show dimension dots (9 dots)
15. Maintain option navigation and dots
16. Test that selections persist when navigating between dimensions

### Phase 5: Interactions & Polish
17. Implement smooth transitions (delay + CSS transitions)
18. Add hover tooltips with full descriptors
19. Build export modal overlay
20. Implement copy to clipboard and JSON download

### Phase 6: Landing Page & Final
21. Create landing page
22. Final responsive testing
23. Performance optimization
24. User testing

## Technical Guidelines

### CSS Custom Properties Architecture

**CRITICAL:** All design tokens must be CSS variables.

```css
:root {
  /* Color System */
  --color-background: #fafafa;
  --color-text-primary: #1a1a1a;
  --color-accent: #0066cc;
  
  /* Typography */
  --font-heading: 'System-UI', sans-serif;
  --font-size-h1: 3rem;
  --font-weight-heading: 700;
  
  /* Spacing */
  --spacing-section: 4rem;
  --spacing-component: 2rem;
  
  /* Geometry */
  --border-radius-button: 4px;
  --border-radius-card: 8px;
  
  /* Depth */
  --shadow-subtle: 0 1px 3px rgba(0,0,0,0.1);
  
  /* Motion */
  --transition-duration: 150ms;
  --transition-easing: ease-out;
}
```

**When user selects an option:**
```javascript
// Update CSS variables
document.documentElement.style.setProperty('--color-accent', '#0066cc');

// Or batch update
Object.entries(option.cssVars).forEach(([key, value]) => {
  document.documentElement.style.setProperty(key, value);
});
```

### Data Structure

```javascript
export const DIMENSIONS = [
  {
    id: 'colorSystem',
    fullName: 'Color System',           // Used in export
    shortName: 'Color',                 // Used in UI
    order: 1,
    options: [
      {
        id: 'muted-neutral-accent',
        label: 'Muted Neutral with Accent',
        descriptor: 'Use a low-saturation neutral color palette...',
        cssVars: {
          '--color-background': '#fafafa',
          '--color-text-primary': '#1a1a1a',
          '--color-accent': '#0066cc',
          // ... all variables this option affects
        }
      },
      // ... 6 more options
    ]
  },
  // ... 8 more dimensions
];
```

### State Management

```javascript
// Selection state (indices)
const [selections, setSelections] = useState({
  colorSystem: 0,
  typographyHierarchy: 0,
  motionPhilosophy: 0,
  spacingDensity: 0,
  layoutPhilosophy: 0,
  componentGeometry: 0,
  surfaceDepth: 0,
  interactionEmphasis: 0,
  visualTone: 0
});

// UI state (small screen only)
const [currentDimension, setCurrentDimension] = useState(0);
```

### Smooth Transitions

To prevent flashing when rapidly cycling:

```javascript
// Option 1: Debounce (simpler)
const debouncedUpdate = debounce((cssVars) => {
  applyCSSVars(cssVars);
}, 200);

// Option 2: Delay + CSS transitions (recommended)
setTimeout(() => {
  applyCSSVars(cssVars);
}, 150);

// Plus in CSS:
.preview * {
  transition: all 300ms ease-out;
}
```

### Preview Content (Exact Specification)

**Header:**
- Logo: "Acme Design Studio"
- Nav: "Work", "About", "Services", "Contact"
- Button: "Get Started"

**Hero:**
- H1: "Beautiful Interfaces, Thoughtfully Crafted"
- Paragraph: "We create digital experiences that connect with your audience and drive meaningful results through design excellence and technical precision."
- Buttons: "View Our Work", "Learn More"

**Services Section:**
- H2: "Our Services"
- Three cards: "Design Systems", "Web Development", "Brand Strategy"
- Each card: heading, 2-3 sentence description, "Learn More" button

**Why Choose Us:**
- H2: "Why Choose Us"
- Paragraph (3-4 sentences)
- List (3-4 bullet points)

**Footer:**
- "© 2026 Acme Design Studio. All rights reserved."
- Links: "Privacy", "Terms", "Contact"

**Optional:**
- Email input field with label
- Newsletter checkbox

## Common Pitfalls to Avoid

❌ **Don't** create card-based option selectors  
❌ **Don't** show static visual examples per option  
❌ **Don't** use hardcoded values instead of CSS variables  
❌ **Don't** forget smooth transitions  
❌ **Don't** create new options or descriptors  
❌ **Don't** let users type free-form input  
❌ **Don't** make the site itself overly designed  

✅ **Do** use live preview as the only visual feedback  
✅ **Do** use CSS custom properties for all design tokens  
✅ **Do** implement smooth transitions between options  
✅ **Do** use exact descriptors from spec  
✅ **Do** ensure same selections = same output  
✅ **Do** make preview prominent (70% of screen)  
✅ **Do** use arrow navigation with dots indicators  
✅ **Do** show tooltips on hover for full descriptors  

## Interaction Details

### Arrow Navigation
- Click left/right arrows to cycle options
- Loops at beginning/end
- Preview updates immediately (with smooth transition)
- Currently displayed option = selected option

### Dots Indicators
- Desktop: Each dimension shows option dots (e.g., 7 dots for Color)
- Small screen: Dimension dots (9) + option dots (varies)
- Filled dot = current selection
- Empty dots = other options

### Hover Tooltips
- Hover over option label shows custom tooltip
- Tooltip contains full 1-2 sentence descriptor
- Styled to be readable and visually integrated
- Positioned above/below based on space

### Export Modal
- Click Export button in sidebar
- Opens centered modal overlay
- Background dimmed
- Shows preview thumbnail
- Lists all 9 dimensions with full names and descriptors
- Copy to clipboard and Download JSON buttons
- Close button + click-outside-to-close

## Extensibility Requirements

**CRITICAL:** Code must support future additions.

**Must Support:**
- Adding new options to existing dimensions (update data file only)
- Adding 1-2 new dimensions (minimal code changes)
- All dimension logic should be data-driven
- No hardcoded dimension counts or option counts

**Example:**
```javascript
// Good (data-driven)
DIMENSIONS.map(dimension => (
  <DimensionSelector key={dimension.id} dimension={dimension} />
))

// Bad (hardcoded)
<DimensionSelector dimension="colorSystem" />
<DimensionSelector dimension="typography" />
// ... etc
```

## Testing Checklist

Before considering v1.2 complete:

- [ ] All 9 dimensions present with correct option counts
- [ ] All descriptors match spec verbatim
- [ ] Live preview updates when cycling options
- [ ] Smooth transitions prevent flashing
- [ ] Dots indicators show correct state
- [ ] Hover tooltips display full descriptors
- [ ] Export modal shows all dimensions correctly
- [ ] Plain text export matches spec format
- [ ] JSON export matches spec structure
- [ ] Same selections produce identical output
- [ ] Responsive layout works on small screens
- [ ] Dimension navigation works (small screen)
- [ ] Selections persist when navigating dimensions
- [ ] Preview content matches specification exactly
- [ ] No console errors or warnings
- [ ] Performance is acceptable (<2s load, smooth animations)

## Success Criteria

The v1.2 implementation is successful if:
- Users can see their design decisions come together compositionally
- The live preview makes it obvious how choices interact
- Navigation is intuitive and responsive
- Output is deterministic and reproducible
- The tool produces better input for AI-assisted frontend generation
- Interface is fast, smooth, and delightful to use

---

**Remember:** The live preview is the core innovation. Users should be able to make confident decisions by seeing, not reading. The preview is the product.
