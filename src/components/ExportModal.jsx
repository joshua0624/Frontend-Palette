/**
 * ExportModal Component
 *
 * Displays export summary with:
 * - Preview thumbnail
 * - All 9 dimensions with full names and descriptors
 * - Copy to clipboard (plain text)
 * - Download JSON
 */

import { useState, useRef, useEffect } from 'react';
import { DIMENSIONS } from '../data/dimensions';
import './ExportModal.css';

export default function ExportModal({ selections, onClose }) {
  const [copyFeedback, setCopyFeedback] = useState('');
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Close on click outside
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Generate plain text output
  const generatePlainText = () => {
    let text = 'Design Intent:\n\n';

    DIMENSIONS.forEach(dimension => {
      const selectedIndex = selections[dimension.id];
      const selectedOption = dimension.options[selectedIndex];

      text += `${dimension.fullName}:\n`;
      text += `${selectedOption.descriptor}\n\n`;
    });

    return text.trim();
  };

  // Generate JSON output
  const generateJSON = () => {
    const output = {
      version: '1.2',
      timestamp: new Date().toISOString(),
      selections: {}
    };

    DIMENSIONS.forEach(dimension => {
      const selectedIndex = selections[dimension.id];
      const selectedOption = dimension.options[selectedIndex];

      // Convert dimension id to camelCase for JSON keys
      const key = dimension.id;

      output.selections[key] = {
        label: selectedOption.label,
        descriptor: selectedOption.descriptor
      };
    });

    return JSON.stringify(output, null, 2);
  };

  // Copy plain text to clipboard
  const handleCopyText = async () => {
    try {
      const text = generatePlainText();
      await navigator.clipboard.writeText(text);
      setCopyFeedback('Copied!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch (err) {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  };

  // Download JSON file
  const handleDownloadJSON = () => {
    const json = generateJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `frontend-palette-${new Date().getTime()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="export-modal-backdrop" onClick={handleBackdropClick}>
      <div className="export-modal" ref={modalRef}>
        {/* Header */}
        <div className="export-modal-header">
          <h2>Design Intent Summary</h2>
          <button
            className="export-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="export-modal-content">
          {/* Preview Thumbnail Note */}
          <div className="export-preview-note">
            <p className="export-note-text">
              Preview thumbnail: See the live preview on the right →
            </p>
          </div>

          {/* Design Specifications */}
          <div className="export-specifications">
            {DIMENSIONS.map(dimension => {
              const selectedIndex = selections[dimension.id];
              const selectedOption = dimension.options[selectedIndex];

              return (
                <div key={dimension.id} className="export-dimension">
                  <h3 className="export-dimension-title">{dimension.fullName}:</h3>
                  <p className="export-dimension-descriptor">{selectedOption.descriptor}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="export-modal-actions">
          <button
            className="export-action-button export-copy-button"
            onClick={handleCopyText}
          >
            {copyFeedback || 'Copy Plain Text'}
          </button>
          <button
            className="export-action-button export-download-button"
            onClick={handleDownloadJSON}
          >
            Download JSON
          </button>
        </div>
      </div>
    </div>
  );
}
