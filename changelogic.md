# Change Logic

## Date: 2026-01-12

### Removal: Motion Indicator Badge from Preview Header

**Context:**
The motion indicator badge was originally added to provide explicit visual feedback about which motion setting was selected. However, it broke the immersion of the live preview by making it feel less like a real website and more like a demonstration tool.

**Problem:**
The badge displaying "Motion: None/Subtle/Expressive" with a pulsing dot was visible in the header bar alongside the "Get Started" button. While functional, it:
- Broke the fiction of the preview being a real website
- Made the preview feel more like a debug/development interface
- Reduced the immersive quality that helps users evaluate design decisions
- Clashed with the principle that "the preview IS the product"

**Solution:**

**File: src/components/PreviewWebsite.jsx**
- Location: Header section (lines 52-62)
- Change: Removed the entire `.motion-indicator` div and its contents
- Kept: The `.preview-header-actions` wrapper and "Get Started" button
- Result: Cleaner header that looks like a real website navigation

**Removed code:**
```jsx
<div className="motion-indicator">
  <span className="motion-indicator-dot"></span>
  <span className="motion-indicator-label">
    Motion: {getMotionLabel(motionSetting)}
  </span>
</div>
```

**Note: CSS and other motion features remain intact**
- The CSS classes `.motion-indicator`, `.motion-indicator-dot`, `.motion-indicator-label` remain in PreviewWebsite.css
- The `getMotionLabel()` helper function remains in the component
- All motion demonstrations (button pulse, card float, entry animations) still work
- The indicator CSS could be removed in a future cleanup, but leaving it causes no harm

**Logic Behind Removal:**
The core principle of Frontend Palette v1.2 is that users should make design decisions by *seeing*, not by *reading*. The motion philosophy differences are already visible through:
1. Button pulse animation (continuous)
2. Card floating animation (continuous)
3. Entry animations when switching settings (triggered)
4. Overall timing differences between None/Subtle/Expressive

The explicit label was redundant and harmful to the user experience. Users can see and feel the motion differences - they don't need to be told what setting is active. The preview should feel like evaluating a real website, not watching a labeled tech demo.

**Success Criteria:**
✅ Motion indicator removed from header
✅ Header now contains only logo, navigation, and CTA button
✅ Preview maintains higher immersion quality
✅ Motion demonstrations continue to work correctly
✅ Users can still clearly perceive motion differences through animations

---

## Date: 2026-01-12

### Fix: Grid-Based Layout Card Sizing and Related Issues

**Context:**
After implementing motion functionality and text centering fixes, the grid-based layout option was discovered to be broken. The layout was not introduced by the previous changes but was a pre-existing issue that became more visible. This fix addresses the grid-based layout and several related centering issues.

---

#### Problem 1: Grid-Based Layout Card Width

**Issue:**
The grid-based layout option was creating a 12-column grid for the service cards container, but individual cards were not spanning multiple columns. This caused each card to only occupy 1 column, making them extremely narrow (only using 3 of the 12 available columns) and breaking the visual layout.

**Root Cause:**
The grid-based layout option sets `--layout-grid-columns: 'repeat(12, 1fr)'`, which creates 12 equal-width columns in the `.preview-cards` container. However, without explicit column span instructions, each `.preview-card` element defaults to spanning just 1 column, resulting in three very narrow cards side-by-side with 9 empty columns.

**Solution:**

**File: src/data/dimensions.js**
- Location: Layout Philosophy dimension, all 5 options (lines ~401-460)
- Change: Added `--layout-card-span` CSS variable to all layout options
  - `'vertical-stack'`: `'auto'` (single column layout, default behavior)
  - `'modular-segments'`: `'auto'` (auto-fit grid, default behavior)
  - `'grid-based'`: `'span 4'` (3 cards × 4 columns = 12 columns total)
  - `'centered-focus'`: `'auto'` (single column layout, default behavior)
  - `'hierarchy-oriented-flow'`: `'auto'` (single column layout, default behavior)

**File: src/components/PreviewWebsite.css**
- Location: `.preview-card` selector (line 192)
- Change: Added `grid-column: var(--layout-card-span, auto);`
- Effect: Cards now respect the column span defined by the active layout option
- Note: This property only affects CSS Grid layouts; other display modes ignore it

**Logic Behind Solution:**
- The 12-column grid is a standard design system pattern providing maximum layout flexibility
- For a three-card layout: 12 columns ÷ 3 cards = 4 columns per card
- Introducing `--layout-card-span` variable maintains the CSS custom property architecture
- Solution is data-driven, extensible, and requires no conditional logic
- Each layout option can specify its own card spanning behavior

---

#### Problem 2: Card Button Centering

**Issue:**
After fixing the grid layout, the "Learn More" buttons within cards appeared off-centered and visually jarring, especially in the grid-based layout where centered titles and body text made the left-aligned buttons look inconsistent.

**Root Cause:**
Buttons were direct children of `.preview-card` without a centering container. They inherited left alignment from default block-level element behavior.

**Solution:**

**File: src/components/PreviewWebsite.jsx**
- Location: All three service cards (lines 93-97, 105-109, 117-121)
- Change: Wrapped each `<button className="preview-button preview-button-card">` in:
  ```jsx
  <div className="preview-card-action">
    <button className="preview-button preview-button-card">
      Learn More
    </button>
  </div>
  ```
- Effect: Provides structural container for button positioning control

**File: src/components/PreviewWebsite.css**
- Location: New selector after `.preview-card-body` (lines 219-223)
- Change: Added `.preview-card-action` class:
  ```css
  .preview-card-action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
- Effect: Centers button horizontally within the card using flexbox

**Logic Behind Solution:**
- Wrapping in a flex container provides precise control over button positioning
- Flexbox centering is reliable across all browsers and card widths
- Maintains consistency with centered card titles and body text
- Doesn't interfere with button's own styling or interactions

---

#### Problem 3: Responsive Grid-Column Conflict

**Issue:**
After implementing the grid-column span fix, the layout compressed again on smaller viewports. The responsive media query was causing a conflict between the single-column mobile grid and the multi-column span value.

**Root Cause:**
The responsive media query at `@media (max-width: 768px)` overrides the grid to a single column (`grid-template-columns: 1fr`), but cards retained `grid-column: span 4` from the grid-based layout option. A card trying to span 4 columns in a 1-column grid causes layout calculation issues.

**Solution:**

**File: src/components/PreviewWebsite.css**
- Location: Inside `@media (max-width: 768px)` block (lines 526-528)
- Change: Added `.preview-card { grid-column: auto; }` rule
- Effect: Resets card column span to default when grid becomes single-column
- Scope: Only affects viewports narrower than 768px

**Logic Behind Solution:**
- Mobile/tablet layouts benefit from single-column card stacks regardless of desktop layout choice
- Resetting to `auto` lets the browser use default grid placement in 1-column grids
- Desktop grid-based layout (>768px) remains unaffected
- Prevents CSS Grid calculation conflicts between column count and span value

---

#### Summary of Changes

**Files Modified:**
1. `src/data/dimensions.js` - Added `--layout-card-span` to 5 layout options
2. `src/components/PreviewWebsite.jsx` - Wrapped 3 card buttons in centering containers
3. `src/components/PreviewWebsite.css` - Added card span rule, button centering class, and responsive override

**Technical Approach:**
- Maintains existing CSS custom property architecture
- Data-driven solution (layout behavior defined in dimension data)
- No JavaScript conditional logic needed
- Fully responsive and extensible
- Works seamlessly with live preview system

**Success Criteria Met:**
✅ Grid-based layout displays three properly-sized cards at 4 columns each
✅ Card buttons are centered consistently with other card content
✅ Responsive layout works correctly on mobile/tablet (single column)
✅ All other layout options remain unaffected
✅ Solution is extensible for future layout additions
✅ No performance impact or code complexity increase

---

## Date: 2026-01-12

### Issue: Title and Description Text Centering

**Problem:**
The title and description preview text were not properly centered and appeared jarring depending on the chosen font. The root cause was that the CSS was using `text-align: var(--layout-align, center)` where `--layout-align` could be set to flex-specific values like `flex-start`, which are not valid values for the `text-align` property. This caused the text alignment to fail or behave unexpectedly across different layout options.

**Changes Made:**

1. **Hero Section Title** (`PreviewWebsite.css:132`)
   - Added explicit `text-align: center` to `.preview-hero-title`
   - Removed dependency on `--layout-align` variable for text alignment
   - Ensures the main hero title is always centered regardless of layout option

2. **Hero Section Subtitle** (`PreviewWebsite.css:143`)
   - Added explicit `text-align: center` to `.preview-hero-subtitle`
   - Ensures the hero subtitle/description is centered
   - Works in conjunction with existing `margin: 0 auto` to center both the block and its text

3. **Hero Section Container** (`PreviewWebsite.css:121`)
   - Changed from `text-align: var(--layout-align, center)` to `text-align: center`
   - Provides consistent centering for all hero section children

4. **Section Titles** (`PreviewWebsite.css:169`)
   - Added explicit `text-align: center` to `.preview-section-title`
   - Affects "Our Services" and "Why Choose Us" section headers
   - Ensures all major section titles are centered for visual consistency

5. **Card Titles** (`PreviewWebsite.css:199`)
   - Added explicit `text-align: center` to `.preview-card-title`
   - Ensures card titles like "Design Systems", "Web Development", "Brand Strategy" are centered
   - Creates better visual hierarchy within card components

6. **Card Body Text** (`PreviewWebsite.css:208`)
   - Added explicit `text-align: center` to `.preview-card-body`
   - Ensures card description text is centered
   - Maintains consistent alignment throughout the card component

**Logic Behind Changes:**

The fundamental issue was mixing layout alignment concepts (flex values) with text alignment CSS properties. The `text-align` property accepts values like `left`, `center`, `right`, and `justify` - but not flex-specific values like `flex-start`.

By explicitly setting `text-align: center` on all titles and key descriptive text elements, we:
- Ensure consistent, predictable centering across all font choices
- Remove dependency on CSS variables that may contain inappropriate values
- Create a more polished, professional appearance for the preview website
- Maintain visual hierarchy and balance in the layout

The changes follow the design principle that titles and short-form text should be centered for visual impact, while keeping the existing layout system for structural alignment intact. This ensures the preview website looks good regardless of which design options are selected by the user.

---

## Date: 2026-01-12

### Feature: Motion Dimension Visual Demonstrations

**Problem:**
The Motion Philosophy dimension (None, Subtle & Functional, Expressive but Restrained) was not visibly demonstrating motion in the preview. Users had to hover over interactive elements to see the effect of different motion settings, which defeated the purpose of a "live preview" system. The motion CSS variables were correctly applied, but there were no automatic animations to showcase the differences between motion options.

**Solution:**
Implemented a three-layer approach to make motion differences immediately visible:
1. **Continuous subtle animations** - Always-visible gentle motion on key elements
2. **Staggered entry animations** - Triggered when user changes motion settings
3. **Motion indicator badge** - Visual indicator showing current motion setting

**Changes Made:**

### 1. PaletteBuilder.jsx

**Added motion change tracking** (Lines 26-27, 41-44):
- Added `motionChangeKey` state to track when motion dimension changes
- Created separate useEffect hook that watches `selections.motionPhilosophy`
- Increments `motionChangeKey` whenever motion setting changes
- This triggers entry animations in the preview component

**Passed motion props to PreviewWebsite** (Lines 159-162):
- Passes `motionSetting` prop containing the current motion option ID
- Passes `motionChangeKey` prop to trigger animations on changes
- Motion setting retrieved from `DIMENSIONS[2]` (motion is dimension index 2)

**Logic:** By tracking motion changes separately from general selection changes, we can trigger specific one-time entry animations without affecting the overall CSS variable application system.

### 2. PreviewWebsite.jsx

**Added React hooks and component props** (Lines 10, 13-38):
- Imported `useState` and `useEffect` from React
- Component now accepts `motionSetting` and `motionChangeKey` props
- Added `showEntryAnimation` state to control when entry animation classes are applied
- Created useEffect that triggers entry animation for 1.5 seconds when `motionChangeKey` changes
- Added `getMotionLabel()` helper function to convert motion IDs to display labels

**Logic:** The entry animation state is temporary - it's enabled when motion changes, then automatically disabled after 1.5 seconds (long enough for the staggered card entrance to complete). This prevents animation classes from persisting and interfering with continuous float animations.

**Added motion indicator badge to header** (Lines 52-58):
- Created `preview-header-actions` wrapper div to hold indicator and button
- Motion indicator displays a pulsing dot and the current motion setting label
- Shows "Motion: None", "Motion: Subtle", or "Motion: Expressive"
- Badge color and styling respond to other dimension variables (accent color, border, background)

**Logic:** The motion indicator serves three purposes:
1. Explicitly tells users which motion setting is selected
2. The pulsing dot provides a continuous visual demonstration of motion timing
3. Badge updates in real-time as users cycle through options

**Added continuous pulse to hero button** (Line 75):
- Added `motion-demo-pulse` class to "View Our Work" button
- Button now has a subtle continuous pulse animation
- Pulse speed and easing curve controlled by motion CSS variables

**Logic:** The hero CTA button is a natural focal point that users' eyes are drawn to. A subtle pulse here demonstrates motion philosophy without being distracting.

**Added float and entry animations to service cards** (Lines 88, 98, 108):
- All three service cards now have `motion-demo-float` class for continuous floating
- Cards conditionally receive `motion-demo-enter` class when `showEntryAnimation` is true
- Template literal syntax combines static and dynamic classes: `className={`preview-card motion-demo-float ${showEntryAnimation ? 'motion-demo-enter' : ''}`}`

**Logic:** Three cards allow for staggered animation delays, making timing differences highly visible. The floating effect is subtle but constant, while the entry animation provides a dramatic moment when users switch motion settings.

### 3. PreviewWebsite.css

**Added header actions layout** (Lines 37-41):
- Created `.preview-header-actions` class to layout motion indicator and header button
- Uses flexbox with gap spacing that responds to the spacing dimension
- Ensures proper alignment of indicator badge next to the button

**Logic:** The indicator needed to fit naturally into the existing header layout without breaking responsive behavior.

**Added motion demonstration styles** (Lines 364-497):
All animation styles grouped in a dedicated section with clear structure:

**Motion Indicator Badge** (Lines 369-405):
- `.motion-indicator`: Badge container with padding, background, border, and border-radius all driven by CSS variables
- `.motion-indicator-dot`: 8px circular dot with `motion-indicator-pulse` animation
- `.motion-indicator-label`: Text label with nowrap to prevent line breaks
- `@keyframes motion-indicator-pulse`: Animates opacity (1 → 0.6) and scale (1 → 0.85) with 50% midpoint
- Duration: `calc(var(--transition-duration) * 10)` = 1.5s for Subtle, 2.5s for Expressive
- Easing: Uses `var(--transition-easing)` so animation curve matches motion philosophy

**Logic:** The pulse animation duration is calculated from the motion CSS variable, so it automatically scales:
- None (0ms): Animation disabled by CSS rule (line 483-487)
- Subtle (150ms × 10 = 1500ms): Quick, gentle pulse every 1.5 seconds
- Expressive (250ms × 10 = 2500ms): Slower, more pronounced pulse every 2.5 seconds

**Button Pulse Animation** (Lines 407-422):
- `.motion-demo-pulse`: Applied to hero CTA button
- `@keyframes motion-demo-button-pulse`: Animates scale from 1 → 1.015 (1.5% growth)
- Duration: `calc(var(--transition-duration) * 20)` = 3s for Subtle, 5s for Expressive
- Very subtle effect that draws attention without being intrusive

**Logic:** The pulse is barely perceptible at rest but clearly shows timing differences when switching between motion settings. The 1.5% scale is intentionally small to avoid looking cartoonish.

**Card Float Animation** (Lines 424-450):
- `.motion-demo-float`: Applied to all three service cards
- `@keyframes motion-demo-card-float`: Animates translateY from 0px → -3px (gentle vertical movement)
- Duration: Same as button pulse (3s Subtle, 5s Expressive)
- Staggered delays using `:nth-child()` selectors:
  - Card 1: 0ms delay (starts immediately)
  - Card 2: `calc(var(--transition-duration) * 2)` = 300ms Subtle, 500ms Expressive
  - Card 3: `calc(var(--transition-duration) * 4)` = 600ms Subtle, 1000ms Expressive

**Logic:** Staggered delays create a "wave" effect where cards float at different times. This makes the animation less uniform and more organic. The delays also demonstrate motion timing differences - with Expressive motion, the wave is slower and more spread out.

**Card Entry Animation** (Lines 452-480):
- `.motion-demo-enter`: Applied temporarily when motion setting changes
- `@keyframes motion-demo-card-enter`: Animates opacity (0 → 1) and translateX (-20px → 0)
- Duration: Uses `--transition-duration-slow` (250ms Subtle, 400ms Expressive)
- Animation mode: `forwards` (maintains final state after completion)
- Staggered delays identical to float animation but using different duration variable
  - Card 1: 0ms
  - Card 2: 150ms Subtle, 250ms Expressive
  - Card 3: 300ms Subtle, 500ms Expressive
- Total animation sequence: ~450ms Subtle, ~750ms Expressive

**Logic:** The entry animation creates a dramatic "reveal" moment when users switch motion settings. Because cards enter from left with staggered timing, the motion philosophy difference becomes immediately obvious. The class is automatically removed after 1.5 seconds (handled in PreviewWebsite.jsx), so it doesn't interfere with the continuous float animation.

**Animation Disabling Rules** (Lines 482-497):

**None Motion Setting** (Lines 483-487):
- CSS attribute selector targets elements where parent has `style*="--transition-duration: 0ms"`
- Sets `animation: none !important` on all motion demo classes
- Effectively disables all animations when "None" is selected

**Logic:** When motion is set to None (0ms), animations would complete instantaneously, which could cause janky visual effects. Instead, we completely disable animations with `none`, making elements truly static.

**Accessibility - Reduced Motion Preference** (Lines 490-497):
- Media query `@media (prefers-reduced-motion: reduce)`
- Disables all motion demo animations when user has system-level reduced motion preference
- Respects OS/browser accessibility settings

**Logic:** Some users have vestibular disorders or motion sensitivity. Respecting the `prefers-reduced-motion` system preference is critical for accessibility compliance and inclusive design.

**Technical Implementation Details:**

**Why calculate animation duration from CSS variables?**
Instead of hardcoding animation durations, we use `calc(var(--transition-duration) * multiplier)`. This ensures:
- Animations automatically adapt when motion settings change
- No JavaScript needed to update animation timing
- Maintains single source of truth (dimension data defines all timing)
- Easy to extend if new motion options are added

**Why use transform and opacity only?**
All animations exclusively use `transform` (scale, translateY, translateX) and `opacity` properties:
- These properties are GPU-accelerated in all modern browsers
- Avoids layout thrashing and repaints
- Smooth 60fps performance even on lower-end devices
- Does not trigger browser reflow/recalculation

**Why stagger animations?**
Staggered timing serves multiple purposes:
1. Makes timing differences highly visible (wave effect shows motion philosophy clearly)
2. Creates more organic, less mechanical feel
3. Reduces simultaneous motion (better for accessibility)
4. Demonstrates that animations are coordinated by the same timing system

**Why separate entry and float animations?**
- **Float**: Continuous, infinite, demonstrates sustained motion philosophy
- **Entry**: One-time, triggered on change, creates dramatic "reveal" moment
- Both animations can coexist because they animate different properties (float: translateY, entry: translateX + opacity)
- Entry animation is removed after completion to avoid class pollution

**Performance Considerations:**
- Limited to 5 continuously animated elements (1 button, 3 cards, 1 indicator dot)
- All animations are pure CSS (no JavaScript animation loops)
- Entry animations are temporary (max 1.5s + cleanup)
- GPU-accelerated properties only
- No impact on layout or painting outside animation boundaries

**Success Criteria Met:**
✅ Motion differences immediately visible without user interaction
✅ "None" setting shows no perceptible motion (animations disabled)
✅ "Subtle" and "Expressive" settings show clear timing differences
✅ Animations are smooth with no performance issues
✅ Accessibility preferences respected (`prefers-reduced-motion`)
✅ Animations compose well with other dimension changes
✅ Motion indicator provides explicit feedback on current setting
✅ Three-layer approach (continuous, triggered, indicator) creates comprehensive demonstration
