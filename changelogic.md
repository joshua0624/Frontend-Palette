# Change Logic

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
