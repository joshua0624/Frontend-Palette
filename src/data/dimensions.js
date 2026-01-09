/**
 * Frontend Palette v1.2 - Complete Dimension Data
 *
 * 9 dimensions, 51 total options
 * Each option includes CSS variable mappings for live preview
 */

export const DIMENSIONS = [
  // ============================================
  // 1. COLOR SYSTEM (7 options)
  // ============================================
  {
    id: 'colorSystem',
    fullName: 'Color System',
    shortName: 'Color',
    order: 1,
    options: [
      {
        id: 'muted-neutral-accent',
        label: 'Muted Neutral with Accent',
        descriptor: 'Use a low-saturation neutral color palette with warm or cool undertones, and apply a single restrained accent color sparingly to highlight primary actions and key states.',
        cssVars: {
          '--color-background': '#fafaf9',
          '--color-background-elevated': '#ffffff',
          '--color-background-subtle': '#f5f5f4',
          '--color-text-primary': '#1c1917',
          '--color-text-secondary': '#57534e',
          '--color-text-tertiary': '#78716c',
          '--color-accent': '#2563eb',
          '--color-accent-hover': '#1d4ed8',
          '--color-border': '#e7e5e4',
          '--color-border-strong': '#d6d3d1',
        }
      },
      {
        id: 'high-contrast-functional',
        label: 'High-Contrast Functional',
        descriptor: 'Use a high-contrast color palette with clear foreground and background separation, and apply accent colors primarily to reinforce interactive states and system feedback.',
        cssVars: {
          '--color-background': '#ffffff',
          '--color-background-elevated': '#ffffff',
          '--color-background-subtle': '#f9fafb',
          '--color-text-primary': '#000000',
          '--color-text-secondary': '#374151',
          '--color-text-tertiary': '#6b7280',
          '--color-accent': '#dc2626',
          '--color-accent-hover': '#b91c1c',
          '--color-border': '#d1d5db',
          '--color-border-strong': '#9ca3af',
        }
      },
      {
        id: 'soft-monochrome',
        label: 'Soft Monochrome',
        descriptor: 'Use a predominantly monochrome color palette with subtle tonal variation, and rely on value shifts rather than hue changes to establish hierarchy and emphasis.',
        cssVars: {
          '--color-background': '#f8f8f8',
          '--color-background-elevated': '#ffffff',
          '--color-background-subtle': '#f3f3f3',
          '--color-text-primary': '#2d2d2d',
          '--color-text-secondary': '#5a5a5a',
          '--color-text-tertiary': '#8a8a8a',
          '--color-accent': '#4a4a4a',
          '--color-accent-hover': '#363636',
          '--color-border': '#e3e3e3',
          '--color-border-strong': '#d0d0d0',
        }
      },
      {
        id: 'balanced-neutral-spectrum',
        label: 'Balanced Neutral Spectrum',
        descriptor: 'Use a balanced neutral palette with moderate saturation and controlled contrast, and distribute color evenly across surfaces, text, and interactive elements without relying on a dominant accent.',
        cssVars: {
          '--color-background': '#f5f5f5',
          '--color-background-elevated': '#fefefe',
          '--color-background-subtle': '#efefef',
          '--color-text-primary': '#2a2a2a',
          '--color-text-secondary': '#5c5c5c',
          '--color-text-tertiary': '#8f8f8f',
          '--color-accent': '#6366f1',
          '--color-accent-hover': '#4f46e5',
          '--color-border': '#d9d9d9',
          '--color-border-strong': '#c4c4c4',
        }
      },
      {
        id: 'dark-forward-interface',
        label: 'Dark-Forward Interface',
        descriptor: 'Use a dark-forward color palette with subdued backgrounds and elevated foreground contrast, and reserve brighter tones for primary actions and critical states only.',
        cssVars: {
          '--color-background': '#0f0f0f',
          '--color-background-elevated': '#1a1a1a',
          '--color-background-subtle': '#0a0a0a',
          '--color-text-primary': '#f5f5f5',
          '--color-text-secondary': '#a3a3a3',
          '--color-text-tertiary': '#737373',
          '--color-accent': '#3b82f6',
          '--color-accent-hover': '#2563eb',
          '--color-border': '#262626',
          '--color-border-strong': '#404040',
        }
      },
      {
        id: 'muted-pastel-accents',
        label: 'Muted Pastel Accents',
        descriptor: 'Use a low-saturation neutral palette and apply soft pastel accent tones selectively to highlight interface states without compromising overall readability.',
        cssVars: {
          '--color-background': '#fdfcfb',
          '--color-background-elevated': '#ffffff',
          '--color-background-subtle': '#f9f7f5',
          '--color-text-primary': '#2c2722',
          '--color-text-secondary': '#635e5a',
          '--color-text-tertiary': '#8a8581',
          '--color-accent': '#a78bfa',
          '--color-accent-hover': '#8b5cf6',
          '--color-border': '#ebe7e3',
          '--color-border-strong': '#d9d3cd',
        }
      },
      {
        id: 'functional-warm-palette',
        label: 'Functional Warm Palette',
        descriptor: 'Use a warm-toned palette with medium contrast, applying accent colors to primary actions while keeping secondary elements subdued for hierarchy clarity.',
        cssVars: {
          '--color-background': '#fef8f5',
          '--color-background-elevated': '#ffffff',
          '--color-background-subtle': '#fcf3ed',
          '--color-text-primary': '#292421',
          '--color-text-secondary': '#5e5651',
          '--color-text-tertiary': '#8b847e',
          '--color-accent': '#ea580c',
          '--color-accent-hover': '#c2410c',
          '--color-border': '#ede4dd',
          '--color-border-strong': '#ddd0c5',
        }
      },
    ]
  },

  // ============================================
  // 2. TYPOGRAPHY & HIERARCHY (6 options)
  // ============================================
  {
    id: 'typographyHierarchy',
    fullName: 'Typography & Hierarchy',
    shortName: 'Typography',
    order: 2,
    options: [
      {
        id: 'sans-dominant',
        label: 'Sans Dominant',
        descriptor: 'Use a sans-serif typeface for headings and body, emphasizing clear hierarchy by applying larger, bolder headings above smaller body text, with consistent spacing to guide reading order.',
        cssVars: {
          '--font-heading': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-body': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-size-h1': '3rem',
          '--font-size-h2': '2rem',
          '--font-size-h3': '1.5rem',
          '--font-size-body': '1rem',
          '--font-size-small': '0.875rem',
          '--font-weight-heading': '700',
          '--font-weight-body': '400',
          '--line-height-heading': '1.2',
          '--line-height-body': '1.6',
        }
      },
      {
        id: 'serif-dominant',
        label: 'Serif Dominant',
        descriptor: 'Use a serif typeface for headings with a sans-serif body, applying clear hierarchy and proportional scaling to distinguish headings from content while maintaining consistent readability.',
        cssVars: {
          '--font-heading': 'Georgia, "Times New Roman", serif',
          '--font-body': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-size-h1': '3.25rem',
          '--font-size-h2': '2.25rem',
          '--font-size-h3': '1.625rem',
          '--font-size-body': '1rem',
          '--font-size-small': '0.875rem',
          '--font-weight-heading': '600',
          '--font-weight-body': '400',
          '--line-height-heading': '1.25',
          '--line-height-body': '1.65',
        }
      },
      {
        id: 'balanced-serif-sans',
        label: 'Balanced Serif + Sans',
        descriptor: 'Pair serif and sans-serif typefaces evenly across headings and body text, ensuring visual hierarchy is clear and consistent while prioritizing legibility and structured content flow.',
        cssVars: {
          '--font-heading': 'Georgia, "Times New Roman", serif',
          '--font-body': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-size-h1': '3rem',
          '--font-size-h2': '2.125rem',
          '--font-size-h3': '1.5rem',
          '--font-size-body': '1.0625rem',
          '--font-size-small': '0.9375rem',
          '--font-weight-heading': '600',
          '--font-weight-body': '400',
          '--line-height-heading': '1.3',
          '--line-height-body': '1.7',
        }
      },
      {
        id: 'neutral-sans-serif-mix',
        label: 'Neutral Sans + Serif Mix',
        descriptor: 'Use sans-serif for body and serif for headings selectively, emphasizing structured hierarchy while maintaining readability and visual balance.',
        cssVars: {
          '--font-heading': 'Georgia, "Times New Roman", serif',
          '--font-body': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-size-h1': '2.875rem',
          '--font-size-h2': '2rem',
          '--font-size-h3': '1.5rem',
          '--font-size-body': '1rem',
          '--font-size-small': '0.875rem',
          '--font-weight-heading': '500',
          '--font-weight-body': '400',
          '--line-height-heading': '1.3',
          '--line-height-body': '1.65',
        }
      },
      {
        id: 'monoline-sans',
        label: 'Monoline Sans',
        descriptor: 'Use a single sans-serif typeface for headings and body text, applying size and weight differences to create clear hierarchy without typographic variety.',
        cssVars: {
          '--font-heading': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-body': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          '--font-size-h1': '2.75rem',
          '--font-size-h2': '1.875rem',
          '--font-size-h3': '1.375rem',
          '--font-size-body': '1rem',
          '--font-size-small': '0.875rem',
          '--font-weight-heading': '600',
          '--font-weight-body': '400',
          '--line-height-heading': '1.25',
          '--line-height-body': '1.6',
        }
      },
      {
        id: 'classic-serif-only',
        label: 'Classic Serif Only',
        descriptor: 'Use a single serif typeface for both headings and body, maintaining hierarchy through size, weight, and spacing while prioritizing readability.',
        cssVars: {
          '--font-heading': 'Georgia, "Times New Roman", serif',
          '--font-body': 'Georgia, "Times New Roman", serif',
          '--font-size-h1': '3rem',
          '--font-size-h2': '2rem',
          '--font-size-h3': '1.5rem',
          '--font-size-body': '1.0625rem',
          '--font-size-small': '0.9375rem',
          '--font-weight-heading': '600',
          '--font-weight-body': '400',
          '--line-height-heading': '1.3',
          '--line-height-body': '1.7',
        }
      },
    ]
  },

  // ============================================
  // 3. MOTION PHILOSOPHY (3 options)
  // ============================================
  {
    id: 'motionPhilosophy',
    fullName: 'Motion Philosophy',
    shortName: 'Motion',
    order: 3,
    options: [
      {
        id: 'none',
        label: 'None',
        descriptor: 'Do not use motion effects. All transitions should be instantaneous, and interface feedback relies solely on static visual changes.',
        cssVars: {
          '--transition-duration': '0ms',
          '--transition-easing': 'linear',
          '--transition-duration-slow': '0ms',
          '--transition-duration-fast': '0ms',
        }
      },
      {
        id: 'subtle-functional',
        label: 'Subtle & Functional',
        descriptor: 'Use minimal, purposeful motion to indicate state changes or transitions. Keep durations short and easing gentle, emphasizing clarity over expression.',
        cssVars: {
          '--transition-duration': '150ms',
          '--transition-easing': 'ease-out',
          '--transition-duration-slow': '250ms',
          '--transition-duration-fast': '100ms',
        }
      },
      {
        id: 'expressive-restrained',
        label: 'Expressive but Restrained',
        descriptor: 'Apply restrained motion for transitions and interactive feedback, ensuring all movement serves functional guidance and never draws attention unnecessarily from primary content.',
        cssVars: {
          '--transition-duration': '250ms',
          '--transition-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
          '--transition-duration-slow': '400ms',
          '--transition-duration-fast': '150ms',
        }
      },
    ]
  },

  // ============================================
  // 4. SPACING & DENSITY (5 options)
  // ============================================
  {
    id: 'spacingDensity',
    fullName: 'Spacing & Density',
    shortName: 'Spacing',
    order: 4,
    options: [
      {
        id: 'spacious-airy',
        label: 'Spacious & Airy',
        descriptor: 'Use generous vertical and horizontal spacing throughout the interface, creating distinct separation between elements to maximize readability and minimize visual clutter.',
        cssVars: {
          '--spacing-section': '5rem',
          '--spacing-component': '3rem',
          '--spacing-element': '1.5rem',
          '--spacing-inline': '1.25rem',
          '--spacing-compact': '0.75rem',
          '--padding-container': '2.5rem',
          '--padding-component': '2rem',
          '--padding-element': '1rem',
        }
      },
      {
        id: 'balanced',
        label: 'Balanced',
        descriptor: 'Use moderate spacing between components, ensuring clear separation without creating excessive white space, maintaining a clean, comfortable rhythm.',
        cssVars: {
          '--spacing-section': '4rem',
          '--spacing-component': '2rem',
          '--spacing-element': '1rem',
          '--spacing-inline': '1rem',
          '--spacing-compact': '0.5rem',
          '--padding-container': '2rem',
          '--padding-component': '1.5rem',
          '--padding-element': '0.75rem',
        }
      },
      {
        id: 'compact-functional',
        label: 'Compact Functional',
        descriptor: 'Reduce spacing between elements while maintaining sufficient separation for clarity, prioritizing information density without overwhelming the user.',
        cssVars: {
          '--spacing-section': '3rem',
          '--spacing-component': '1.5rem',
          '--spacing-element': '0.75rem',
          '--spacing-inline': '0.75rem',
          '--spacing-compact': '0.375rem',
          '--padding-container': '1.5rem',
          '--padding-component': '1rem',
          '--padding-element': '0.5rem',
        }
      },
      {
        id: 'tight-grid',
        label: 'Tight Grid',
        descriptor: 'Apply a consistent, tight spacing system across components, emphasizing structural alignment and visual rhythm for efficient content display.',
        cssVars: {
          '--spacing-section': '2.5rem',
          '--spacing-component': '1.25rem',
          '--spacing-element': '0.625rem',
          '--spacing-inline': '0.625rem',
          '--spacing-compact': '0.3125rem',
          '--padding-container': '1.25rem',
          '--padding-component': '0.875rem',
          '--padding-element': '0.5rem',
        }
      },
      {
        id: 'hierarchy-driven',
        label: 'Hierarchy-Driven',
        descriptor: 'Vary spacing deliberately based on content importance, using larger separation for high-priority elements and tighter spacing for secondary content to reinforce hierarchy.',
        cssVars: {
          '--spacing-section': '4.5rem',
          '--spacing-component': '2.5rem',
          '--spacing-element': '1rem',
          '--spacing-inline': '0.875rem',
          '--spacing-compact': '0.5rem',
          '--padding-container': '2.25rem',
          '--padding-component': '1.75rem',
          '--padding-element': '0.875rem',
        }
      },
    ]
  },

  // ============================================
  // 5. LAYOUT PHILOSOPHY (5 options)
  // ============================================
  {
    id: 'layoutPhilosophy',
    fullName: 'Layout Philosophy',
    shortName: 'Layout',
    order: 5,
    options: [
      {
        id: 'vertical-stack',
        label: 'Vertical Stack',
        descriptor: 'Arrange content primarily in a vertical flow, with clearly separated sections and a predictable top-to-bottom progression for easy scanning.',
        cssVars: {
          '--layout-max-width': '1200px',
          '--layout-content-width': '100%',
          '--layout-grid-columns': '1',
          '--layout-align': 'flex-start',
        }
      },
      {
        id: 'modular-segments',
        label: 'Modular Segments',
        descriptor: 'Organize content into clearly defined blocks or cards, allowing independent units to be recognized at a glance while maintaining consistent spacing and alignment.',
        cssVars: {
          '--layout-max-width': '1280px',
          '--layout-content-width': '100%',
          '--layout-grid-columns': 'repeat(auto-fit, minmax(280px, 1fr))',
          '--layout-align': 'flex-start',
        }
      },
      {
        id: 'grid-based',
        label: 'Grid-Based',
        descriptor: 'Use a structured grid to position elements, emphasizing alignment and balance while maintaining consistent spacing across rows and columns.',
        cssVars: {
          '--layout-max-width': '1400px',
          '--layout-content-width': '100%',
          '--layout-grid-columns': 'repeat(12, 1fr)',
          '--layout-align': 'flex-start',
        }
      },
      {
        id: 'centered-focus',
        label: 'Centered Focus',
        descriptor: 'Concentrate primary content along the central axis, with secondary content flanking or subordinated, creating a strong visual focus for key interface elements.',
        cssVars: {
          '--layout-max-width': '900px',
          '--layout-content-width': '75%',
          '--layout-grid-columns': '1',
          '--layout-align': 'center',
        }
      },
      {
        id: 'hierarchy-oriented-flow',
        label: 'Hierarchy-Oriented Flow',
        descriptor: 'Arrange content according to priority and importance, applying structural spacing and grouping to emphasize high-value information while de-emphasizing less critical elements.',
        cssVars: {
          '--layout-max-width': '1200px',
          '--layout-content-width': '100%',
          '--layout-grid-columns': '1',
          '--layout-align': 'flex-start',
        }
      },
    ]
  },

  // ============================================
  // 6. COMPONENT GEOMETRY (5 options)
  // ============================================
  {
    id: 'componentGeometry',
    fullName: 'Component Geometry',
    shortName: 'Geometry',
    order: 6,
    options: [
      {
        id: 'sharp-corners',
        label: 'Sharp Corners',
        descriptor: 'Apply square corners to all components, maintaining a rigid, predictable geometry and consistent alignment across the interface.',
        cssVars: {
          '--border-radius-button': '0px',
          '--border-radius-card': '0px',
          '--border-radius-input': '0px',
          '--border-radius-small': '0px',
        }
      },
      {
        id: 'slightly-rounded',
        label: 'Slightly Rounded',
        descriptor: 'Use subtly rounded corners on components to soften edges while preserving structural consistency and alignment.',
        cssVars: {
          '--border-radius-button': '4px',
          '--border-radius-card': '8px',
          '--border-radius-input': '4px',
          '--border-radius-small': '3px',
        }
      },
      {
        id: 'fully-rounded',
        label: 'Fully Rounded',
        descriptor: 'Apply fully rounded corners to components where practical, maintaining shape consistency and ensuring a visually friendly interface.',
        cssVars: {
          '--border-radius-button': '24px',
          '--border-radius-card': '16px',
          '--border-radius-input': '12px',
          '--border-radius-small': '8px',
        }
      },
      {
        id: 'mixed-geometry',
        label: 'Mixed Geometry',
        descriptor: 'Combine slightly rounded corners on interactive components with sharp corners on static elements, ensuring deliberate contrast while maintaining cohesion.',
        cssVars: {
          '--border-radius-button': '6px',
          '--border-radius-card': '0px',
          '--border-radius-input': '6px',
          '--border-radius-small': '3px',
        }
      },
      {
        id: 'hierarchy-driven-rounding',
        label: 'Hierarchy-Driven Rounding',
        descriptor: 'Apply corner radius based on component importance, using more prominent rounding for primary interactive elements and subtler rounding for secondary elements.',
        cssVars: {
          '--border-radius-button': '12px',
          '--border-radius-card': '6px',
          '--border-radius-input': '6px',
          '--border-radius-small': '3px',
        }
      },
    ]
  },

  // ============================================
  // 7. SURFACE & DEPTH (5 options)
  // ============================================
  {
    id: 'surfaceDepth',
    fullName: 'Surface & Depth',
    shortName: 'Depth',
    order: 7,
    options: [
      {
        id: 'flat-surfaces',
        label: 'Flat Surfaces',
        descriptor: 'Use minimal elevation and no shadows, relying on spacing and alignment to indicate hierarchy and separation.',
        cssVars: {
          '--shadow-subtle': 'none',
          '--shadow-elevated': 'none',
          '--shadow-button': 'none',
          '--shadow-card': 'none',
          '--border-width': '1px',
        }
      },
      {
        id: 'subtle-elevation',
        label: 'Subtle Elevation',
        descriptor: 'Apply gentle shadows or elevation to interactive elements only, providing visual cues without drawing attention from content hierarchy.',
        cssVars: {
          '--shadow-subtle': '0 1px 3px rgba(0, 0, 0, 0.08)',
          '--shadow-elevated': '0 2px 4px rgba(0, 0, 0, 0.1)',
          '--shadow-button': '0 1px 2px rgba(0, 0, 0, 0.05)',
          '--shadow-card': '0 1px 3px rgba(0, 0, 0, 0.08)',
          '--border-width': '1px',
        }
      },
      {
        id: 'layered-depth',
        label: 'Layered Depth',
        descriptor: 'Introduce multiple surface layers with increasing elevation to indicate hierarchy, while maintaining subtlety and avoiding visual clutter.',
        cssVars: {
          '--shadow-subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
          '--shadow-elevated': '0 4px 6px rgba(0, 0, 0, 0.12)',
          '--shadow-button': '0 2px 4px rgba(0, 0, 0, 0.08)',
          '--shadow-card': '0 2px 8px rgba(0, 0, 0, 0.1)',
          '--border-width': '0px',
        }
      },
      {
        id: 'functional-shadows',
        label: 'Functional Shadows',
        descriptor: 'Use shadows purposefully to highlight primary actions or interactive components, ensuring clarity and consistency across all surfaces.',
        cssVars: {
          '--shadow-subtle': '0 1px 2px rgba(0, 0, 0, 0.06)',
          '--shadow-elevated': '0 4px 8px rgba(0, 0, 0, 0.12)',
          '--shadow-button': '0 2px 4px rgba(0, 0, 0, 0.1)',
          '--shadow-card': '0 1px 3px rgba(0, 0, 0, 0.08)',
          '--border-width': '1px',
        }
      },
      {
        id: 'hierarchy-driven-depth',
        label: 'Hierarchy-Driven Depth',
        descriptor: 'Apply depth selectively based on component importance, providing stronger elevation for critical elements while keeping secondary content flatter.',
        cssVars: {
          '--shadow-subtle': '0 1px 2px rgba(0, 0, 0, 0.05)',
          '--shadow-elevated': '0 8px 16px rgba(0, 0, 0, 0.15)',
          '--shadow-button': '0 4px 8px rgba(0, 0, 0, 0.12)',
          '--shadow-card': '0 2px 4px rgba(0, 0, 0, 0.08)',
          '--border-width': '1px',
        }
      },
    ]
  },

  // ============================================
  // 8. INTERACTION EMPHASIS (5 options)
  // ============================================
  {
    id: 'interactionEmphasis',
    fullName: 'Interaction Emphasis',
    shortName: 'Emphasis',
    order: 8,
    options: [
      {
        id: 'primary-focused',
        label: 'Primary-Focused',
        descriptor: 'Highlight only primary interactive elements with distinctive visual treatment, keeping secondary elements subtle and minimally emphasized.',
        cssVars: {
          '--button-primary-weight': '600',
          '--button-secondary-weight': '400',
          '--button-primary-transform': 'scale(1)',
          '--button-secondary-opacity': '0.8',
        }
      },
      {
        id: 'balanced-emphasis',
        label: 'Balanced Emphasis',
        descriptor: 'Apply consistent visual distinction to both primary and secondary interactive elements, ensuring all actions are clearly perceivable.',
        cssVars: {
          '--button-primary-weight': '600',
          '--button-secondary-weight': '500',
          '--button-primary-transform': 'scale(1)',
          '--button-secondary-opacity': '1',
        }
      },
      {
        id: 'minimal-emphasis',
        label: 'Minimal Emphasis',
        descriptor: 'Apply subtle differentiation between primary and secondary elements, relying on shape, spacing, or positioning rather than color or styling for clarity.',
        cssVars: {
          '--button-primary-weight': '500',
          '--button-secondary-weight': '400',
          '--button-primary-transform': 'scale(1)',
          '--button-secondary-opacity': '0.9',
        }
      },
      {
        id: 'accent-driven',
        label: 'Accent-Driven',
        descriptor: 'Use accent color or visual style selectively to indicate primary interactive elements while secondary elements remain neutral.',
        cssVars: {
          '--button-primary-weight': '600',
          '--button-secondary-weight': '400',
          '--button-primary-transform': 'scale(1.02)',
          '--button-secondary-opacity': '0.75',
        }
      },
      {
        id: 'hierarchy-based',
        label: 'Hierarchy-Based',
        descriptor: 'Emphasize interactive elements according to functional importance, giving stronger visual cues to higher-priority actions and subtler cues to secondary controls.',
        cssVars: {
          '--button-primary-weight': '700',
          '--button-secondary-weight': '400',
          '--button-primary-transform': 'scale(1.03)',
          '--button-secondary-opacity': '0.7',
        }
      },
    ]
  },

  // ============================================
  // 9. VISUAL TONE (5 options)
  // ============================================
  {
    id: 'visualTone',
    fullName: 'Visual Tone',
    shortName: 'Tone',
    order: 9,
    options: [
      {
        id: 'neutral',
        label: 'Neutral',
        descriptor: 'Apply a restrained visual tone with consistent weight and minimal embellishment, prioritizing clarity and functional readability throughout the interface.',
        cssVars: {
          '--tone-contrast-boost': '1',
          '--tone-visual-weight': '400',
          '--tone-decoration': 'none',
          '--tone-border-width': '0',
          '--tone-border-opacity': '1',
        }
      },
      {
        id: 'minimalist',
        label: 'Minimalist',
        descriptor: 'Use a clean, simple tone with minimal contrast and decoration, emphasizing structural clarity and straightforward component presentation.',
        cssVars: {
          '--tone-contrast-boost': '0.95',
          '--tone-visual-weight': '300',
          '--tone-decoration': 'none',
          '--tone-border-width': '0',
          '--tone-border-opacity': '1',
        }
      },
      {
        id: 'functional-emphasis',
        label: 'Functional Emphasis',
        descriptor: 'Apply a practical visual tone that clearly communicates hierarchy and interactivity, ensuring all elements are purposeful and predictable.',
        cssVars: {
          '--tone-contrast-boost': '1.05',
          '--tone-visual-weight': '500',
          '--tone-decoration': 'none',
          '--tone-border-width': '0',
          '--tone-border-opacity': '1',
        }
      },
      {
        id: 'subtle-sophistication',
        label: 'Subtle Sophistication',
        descriptor: 'Maintain a restrained and polished visual tone with slight variation in weight and layering to subtly enhance hierarchy without introducing flair.',
        cssVars: {
          '--tone-contrast-boost': '1',
          '--tone-visual-weight': '400',
          '--tone-decoration': 'subtle',
          '--tone-border-width': '1px',
          '--tone-border-opacity': '0.85',
        }
      },
      {
        id: 'hierarchy-driven-tone',
        label: 'Hierarchy-Driven Tone',
        descriptor: 'Adjust visual posture according to content priority, ensuring high-importance elements are visually prominent while lower-priority elements remain understated.',
        cssVars: {
          '--tone-contrast-boost': '1.1',
          '--tone-visual-weight': '600',
          '--tone-decoration': 'visible',
          '--tone-border-width': '2px',
          '--tone-border-opacity': '1',
        }
      },
    ]
  },
];

/**
 * Get dimension by ID
 */
export function getDimensionById(id) {
  return DIMENSIONS.find(dim => dim.id === id);
}

/**
 * Get option by dimension ID and option ID
 */
export function getOption(dimensionId, optionId) {
  const dimension = getDimensionById(dimensionId);
  return dimension?.options.find(opt => opt.id === optionId);
}

/**
 * Get default selections (first option for each dimension)
 */
export function getDefaultSelections() {
  return DIMENSIONS.reduce((acc, dimension) => {
    acc[dimension.id] = 0; // Index of first option
    return acc;
  }, {});
}

/**
 * Apply CSS variables to document root
 */
export function applyCSSVariables(cssVars) {
  Object.entries(cssVars).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}

/**
 * Get all CSS variables for current selections
 */
export function getAllCSSVariables(selections) {
  let allVars = {};

  DIMENSIONS.forEach(dimension => {
    const selectedIndex = selections[dimension.id] || 0;
    const option = dimension.options[selectedIndex];
    if (option && option.cssVars) {
      allVars = { ...allVars, ...option.cssVars };
    }
  });

  return allVars;
}
