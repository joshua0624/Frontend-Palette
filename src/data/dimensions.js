/**
 * Frontend Palette v1.2 - Complete Dimension Data
 *
 * 9 dimensions, 56 total options
 * Each option includes CSS variable mappings for live preview
 */

export const DIMENSIONS = [
  // ============================================
  // 1. COLOR SYSTEM (12 options)
  // ============================================
  {
    id: 'colorSystem',
    fullName: 'Color System',
    shortName: 'Color',
    order: 1,
    options: [
      {
        id: 'clean-neutral-foundation',
        label: 'Clean Neutral Foundation',
        descriptor: 'Classic neutral palette with warm undertones and subtle contrast variation, using a refined blue accent for primary actions. Professional and timeless, suitable for corporate and business applications.',
        cssVars: {
          '--color-background': '#FFFFFF',
          '--color-background-elevated': '#F8F9FA',
          '--color-background-subtle': '#F1F3F5',
          '--color-text-primary': '#1A1A1A',
          '--color-text-secondary': '#525252',
          '--color-text-tertiary': '#737373',
          '--color-accent': '#0066CC',
          '--color-accent-hover': '#0052A3',
          '--color-border': '#E5E7EB',
          '--color-border-strong': '#9CA3AF',
        }
      },
      {
        id: 'soft-slate-interface',
        label: 'Soft Slate Interface',
        descriptor: 'Muted cool-toned palette with gentle slate backgrounds and controlled contrast, applying a sophisticated teal accent sparingly to interactive elements and maintaining visual calm throughout.',
        cssVars: {
          '--color-background': '#F5F7F9',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#EDF0F3',
          '--color-text-primary': '#1E293B',
          '--color-text-secondary': '#475569',
          '--color-text-tertiary': '#64748B',
          '--color-accent': '#0D9488',
          '--color-accent-hover': '#0F766E',
          '--color-border': '#CBD5E1',
          '--color-border-strong': '#94A3B8',
        }
      },
      {
        id: 'modern-monochrome',
        label: 'Modern Monochrome',
        descriptor: 'Contemporary monochrome system with precise tonal gradation and high contrast, using value shifts for hierarchy and a single vibrant accent for critical actions only.',
        cssVars: {
          '--color-background': '#FAFAFA',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#F3F3F3',
          '--color-text-primary': '#0A0A0A',
          '--color-text-secondary': '#404040',
          '--color-text-tertiary': '#737373',
          '--color-accent': '#DC2626',
          '--color-accent-hover': '#B91C1C',
          '--color-border': '#E5E5E5',
          '--color-border-strong': '#A3A3A3',
        }
      },
      {
        id: 'warm-corporate-canvas',
        label: 'Warm Corporate Canvas',
        descriptor: 'Warm-leaning neutral base with honeyed undertones and medium contrast, featuring a rich amber accent that brings approachability to professional interfaces while maintaining credibility.',
        cssVars: {
          '--color-background': '#FAF8F5',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#F2EFE9',
          '--color-text-primary': '#292524',
          '--color-text-secondary': '#57534E',
          '--color-text-tertiary': '#78716C',
          '--color-accent': '#D97706',
          '--color-accent-hover': '#B45309',
          '--color-border': '#E7E5E4',
          '--color-border-strong': '#A8A29E',
        }
      },
      {
        id: 'deep-charcoal-system',
        label: 'Deep Charcoal System',
        descriptor: 'Dark-forward interface with rich charcoal backgrounds and elevated contrast, reserving lighter tones for emphasis and using a crisp cyan accent for primary interactions.',
        cssVars: {
          '--color-background': '#1A1A1A',
          '--color-background-elevated': '#262626',
          '--color-background-subtle': '#171717',
          '--color-text-primary': '#FAFAFA',
          '--color-text-secondary': '#D4D4D4',
          '--color-text-tertiary': '#A3A3A3',
          '--color-accent': '#06B6D4',
          '--color-accent-hover': '#0891B2',
          '--color-border': '#404040',
          '--color-border-strong': '#525252',
        }
      },
      {
        id: 'serene-blue-foundation',
        label: 'Serene Blue Foundation',
        descriptor: 'Soft blue-tinted backgrounds create a calm digital environment with subtle color presence, paired with balanced neutrals and a complementary indigo accent for trustworthy interactions.',
        cssVars: {
          '--color-background': '#F0F4F8',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#E6EDF4',
          '--color-text-primary': '#1E293B',
          '--color-text-secondary': '#475569',
          '--color-text-tertiary': '#64748B',
          '--color-accent': '#4F46E5',
          '--color-accent-hover': '#4338CA',
          '--color-border': '#CBD5E1',
          '--color-border-strong': '#94A3B8',
        }
      },
      {
        id: 'balanced-earth-tones',
        label: 'Balanced Earth Tones',
        descriptor: 'Organic palette featuring warm browns and muted greens with subdued contrast, creating a grounded and natural aesthetic that conveys authenticity and environmental consciousness.',
        cssVars: {
          '--color-background': '#F9F7F4',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#F1EDE6',
          '--color-text-primary': '#3E2723',
          '--color-text-secondary': '#5D4037',
          '--color-text-tertiary': '#795548',
          '--color-accent': '#6B8E23',
          '--color-accent-hover': '#556B2F',
          '--color-border': '#D7CCC8',
          '--color-border-strong': '#A1887F',
        }
      },
      {
        id: 'sunset-burst-canvas',
        label: 'Sunset Burst Canvas',
        descriptor: 'Vibrant warm palette inspired by golden hour, featuring peachy pink backgrounds with rich coral and burnt orange accents that create an energetic, optimistic, and distinctly memorable interface aesthetic.',
        cssVars: {
          '--color-background': '#FFF5F0',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#FFE8DC',
          '--color-text-primary': '#4A1E0A',
          '--color-text-secondary': '#7C3A1E',
          '--color-text-tertiary': '#9C5D3F',
          '--color-accent': '#FF6B35',
          '--color-accent-hover': '#E85A2B',
          '--color-border': '#FFD4BC',
          '--color-border-strong': '#FFAA7F',
        }
      },
      {
        id: 'electric-lime-pulse',
        label: 'Electric Lime Pulse',
        descriptor: 'Bold high-energy palette combining sharp lime green accents with deep charcoal foundations, creating striking contrast and modern vibrancy perfect for tech-forward and innovative brands seeking maximum visual impact.',
        cssVars: {
          '--color-background': '#FAFAFA',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#F3F3F3',
          '--color-text-primary': '#1A1A1A',
          '--color-text-secondary': '#404040',
          '--color-text-tertiary': '#737373',
          '--color-accent': '#84CC16',
          '--color-accent-hover': '#65A30D',
          '--color-border': '#E5E5E5',
          '--color-border-strong': '#A3A3A3',
        }
      },
      {
        id: 'amethyst-dusk-system',
        label: 'Amethyst Dusk System',
        descriptor: 'Rich violet-forward palette with deep purple backgrounds and rose gold accents, evoking luxury and sophistication with an unconventional color harmony that feels both elegant and contemporary.',
        cssVars: {
          '--color-background': '#2D1B3D',
          '--color-background-elevated': '#3A2449',
          '--color-background-subtle': '#241634',
          '--color-text-primary': '#F3E8FF',
          '--color-text-secondary': '#D8B4FE',
          '--color-text-tertiary': '#C084FC',
          '--color-accent': '#E879F9',
          '--color-accent-hover': '#D946EF',
          '--color-border': '#4C3060',
          '--color-border-strong': '#6B4A87',
        }
      },
      {
        id: 'tropical-coral-reef',
        label: 'Tropical Coral Reef',
        descriptor: 'Playful combination of soft coral backgrounds with turquoise and seafoam accents, bringing beach-inspired warmth and approachability while maintaining professional readability through careful contrast control.',
        cssVars: {
          '--color-background': '#FFF5F2',
          '--color-background-elevated': '#FFFFFF',
          '--color-background-subtle': '#FFE9E3',
          '--color-text-primary': '#1F2937',
          '--color-text-secondary': '#4B5563',
          '--color-text-tertiary': '#6B7280',
          '--color-accent': '#14B8A6',
          '--color-accent-hover': '#0D9488',
          '--color-border': '#FED7CA',
          '--color-border-strong': '#FCA78F',
        }
      },
      {
        id: 'midnight-neon-glow',
        label: 'Midnight Neon Glow',
        descriptor: 'Dramatic dark interface with deep navy backgrounds and electric pink accents, creating a cyberpunk-inspired aesthetic that balances edgy modern energy with functional clarity for bold digital experiences.',
        cssVars: {
          '--color-background': '#0F1419',
          '--color-background-elevated': '#1A1F2E',
          '--color-background-subtle': '#0A0E14',
          '--color-text-primary': '#F0F0F0',
          '--color-text-secondary': '#B4B4B4',
          '--color-text-tertiary': '#8A8A8A',
          '--color-accent': '#FF2D95',
          '--color-accent-hover': '#E6007A',
          '--color-border': '#2A2F3E',
          '--color-border-strong': '#3E4556',
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
          '--layout-card-span': 'auto',
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
          '--layout-card-span': 'auto',
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
          '--layout-card-span': 'span 4',
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
          '--layout-card-span': 'auto',
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
          '--layout-card-span': 'auto',
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
