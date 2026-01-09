/**
 * DimensionSelector Component
 *
 * Displays a single dimension with:
 * - Dimension name and number
 * - Arrow navigation to cycle through options
 * - Current option label (with tooltip on hover)
 * - Dots indicator showing position
 */

import { useState } from 'react';
import './DimensionSelector.css';

export default function DimensionSelector({ dimension, selectedIndex, onCycle, number, isMobile = false }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const currentOption = dimension.options[selectedIndex];

  return (
    <div className={`dimension-selector ${isMobile ? 'mobile' : ''}`}>
      {/* Dimension Label */}
      <div className="dimension-label">
        <span className="dimension-number">{number}.</span>
        <span className="dimension-name">{dimension.shortName}</span>
      </div>

      {/* Option Navigation */}
      <div className="option-navigation">
        <button
          className="option-arrow"
          onClick={() => onCycle('prev')}
          aria-label={`Previous ${dimension.shortName} option`}
        >
          ←
        </button>

        <div
          className="option-label-container"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className="option-label">{currentOption.label}</span>

          {/* Tooltip with full descriptor */}
          {showTooltip && (
            <div className="option-tooltip">
              <div className="tooltip-arrow" />
              <div className="tooltip-content">
                {currentOption.descriptor}
              </div>
            </div>
          )}
        </div>

        <button
          className="option-arrow"
          onClick={() => onCycle('next')}
          aria-label={`Next ${dimension.shortName} option`}
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="option-dots">
        {dimension.options.map((_, index) => (
          <span
            key={index}
            className={`option-dot ${index === selectedIndex ? 'active' : ''}`}
            aria-label={`Option ${index + 1} of ${dimension.options.length}`}
          />
        ))}
      </div>
    </div>
  );
}
