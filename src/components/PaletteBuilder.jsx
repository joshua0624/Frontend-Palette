/**
 * PaletteBuilder Component
 *
 * Main interface featuring split-view layout:
 * - Sidebar (30%): Dimension selectors with arrow navigation
 * - Preview (70%): Live preview that updates in real-time
 */

import { useState, useEffect } from 'react';
import PreviewWebsite from './PreviewWebsite';
import DimensionSelector from './DimensionSelector';
import ExportModal from './ExportModal';
import { DIMENSIONS, getDefaultSelections, getAllCSSVariables, applyCSSVariables } from '../data/dimensions';
import './PaletteBuilder.css';

export default function PaletteBuilder() {
  // Selection state: stores index of selected option for each dimension
  const [selections, setSelections] = useState(getDefaultSelections());

  // UI state for small screens: which dimension is currently visible (0-8)
  const [currentDimension, setCurrentDimension] = useState(0);

  // Modal state
  const [showExportModal, setShowExportModal] = useState(false);

  // Track motion dimension changes to trigger entry animations
  const [motionChangeKey, setMotionChangeKey] = useState(0);

  // Apply CSS variables whenever selections change
  useEffect(() => {
    const cssVars = getAllCSSVariables(selections);

    // Small delay to prevent flashing when rapidly cycling options
    const timeoutId = setTimeout(() => {
      applyCSSVariables(cssVars);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [selections]);

  // Track motion dimension changes separately to trigger entry animations
  useEffect(() => {
    setMotionChangeKey(prev => prev + 1);
  }, [selections.motionPhilosophy]);

  // Handle cycling to next/previous option within a dimension
  const cycleOption = (dimensionId, direction) => {
    const dimension = DIMENSIONS.find(d => d.id === dimensionId);
    if (!dimension) return;

    setSelections(prev => {
      const currentIndex = prev[dimensionId];
      const totalOptions = dimension.options.length;

      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % totalOptions;
      } else {
        newIndex = currentIndex === 0 ? totalOptions - 1 : currentIndex - 1;
      }

      return {
        ...prev,
        [dimensionId]: newIndex
      };
    });
  };

  // Handle cycling between dimensions (small screen only)
  const cycleDimension = (direction) => {
    if (direction === 'next') {
      setCurrentDimension(prev => (prev + 1) % DIMENSIONS.length);
    } else {
      setCurrentDimension(prev => prev === 0 ? DIMENSIONS.length - 1 : prev - 1);
    }
  };

  return (
    <div className="palette-builder">
      {/* Sidebar (30%) */}
      <aside className="palette-sidebar">
        <div className="palette-sidebar-content">
          {/* Logo */}
          <div className="palette-logo">
            <h1>Frontend Palette</h1>
            <p className="palette-version">v1.2</p>
          </div>

          {/* Desktop: All dimensions visible */}
          <div className="palette-dimensions-desktop">
            {DIMENSIONS.map((dimension, index) => (
              <DimensionSelector
                key={dimension.id}
                dimension={dimension}
                selectedIndex={selections[dimension.id]}
                onCycle={(direction) => cycleOption(dimension.id, direction)}
                number={index + 1}
              />
            ))}
          </div>

          {/* Small Screen: One dimension at a time with dimension navigation */}
          <div className="palette-dimensions-mobile">
            {/* Dimension Navigation */}
            <div className="dimension-nav">
              <button
                className="dimension-nav-arrow"
                onClick={() => cycleDimension('prev')}
                aria-label="Previous dimension"
              >
                ←
              </button>
              <span className="dimension-nav-label">
                {DIMENSIONS[currentDimension].shortName}
              </span>
              <button
                className="dimension-nav-arrow"
                onClick={() => cycleDimension('next')}
                aria-label="Next dimension"
              >
                →
              </button>
            </div>

            {/* Dimension Dots */}
            <div className="dimension-dots">
              {DIMENSIONS.map((_, index) => (
                <button
                  key={index}
                  className={`dimension-dot ${index === currentDimension ? 'active' : ''}`}
                  onClick={() => setCurrentDimension(index)}
                  aria-label={`Go to dimension ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Dimension Selector */}
            <DimensionSelector
              dimension={DIMENSIONS[currentDimension]}
              selectedIndex={selections[DIMENSIONS[currentDimension].id]}
              onCycle={(direction) => cycleOption(DIMENSIONS[currentDimension].id, direction)}
              number={currentDimension + 1}
              isMobile
            />
          </div>

          {/* Export Button */}
          <button
            className="palette-export-button"
            onClick={() => setShowExportModal(true)}
          >
            Export Design Intent
          </button>
        </div>
      </aside>

      {/* Preview (70%) */}
      <main className="palette-preview-pane">
        <PreviewWebsite
          motionSetting={DIMENSIONS[2].options[selections.motionPhilosophy].id}
          motionChangeKey={motionChangeKey}
        />
      </main>

      {/* Export Modal */}
      {showExportModal && (
        <ExportModal
          selections={selections}
          onClose={() => setShowExportModal(false)}
        />
      )}
    </div>
  );
}
