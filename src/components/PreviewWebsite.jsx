/**
 * PreviewWebsite Component
 *
 * Displays a complete sample website that updates in real-time
 * as users cycle through design options.
 *
 * Content is hardcoded per specification Section 10.2
 */

import { useState, useEffect } from 'react';
import './PreviewWebsite.css';

export default function PreviewWebsite({
  motionSetting = 'subtle-functional',
  motionChangeKey = 0
}) {
  const [showEntryAnimation, setShowEntryAnimation] = useState(false);

  // Trigger entry animation when motion setting changes
  useEffect(() => {
    if (motionChangeKey > 0) {
      setShowEntryAnimation(true);
      const timeout = setTimeout(() => {
        setShowEntryAnimation(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [motionChangeKey]);

  // Helper function to get motion label for indicator
  const getMotionLabel = (setting) => {
    const labels = {
      'none': 'None',
      'subtle-functional': 'Subtle',
      'expressive-restrained': 'Expressive'
    };
    return labels[setting] || 'Subtle';
  };

  return (
    <div className="preview-website">
      {/* Header/Navigation Section */}
      <header className="preview-header">
        <div className="preview-header-content">
          <div className="preview-logo">Acme Design Studio</div>
          <nav className="preview-nav">
            <a href="#" className="preview-nav-link">Work</a>
            <a href="#" className="preview-nav-link">About</a>
            <a href="#" className="preview-nav-link">Services</a>
            <a href="#" className="preview-nav-link">Contact</a>
          </nav>
          <div className="preview-header-actions">
            <button className="preview-button preview-button-primary">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="preview-hero">
        <h1 className="preview-hero-title">
          Beautiful Interfaces, Thoughtfully Crafted
        </h1>
        <p className="preview-hero-subtitle">
          We create digital experiences that connect with your audience and drive meaningful results through design excellence and technical precision.
        </p>
        <div className="preview-hero-actions">
          <button className="preview-button preview-button-primary motion-demo-pulse">
            View Our Work
          </button>
          <button className="preview-button preview-button-secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Dashboard/Cards Section */}
      <section className="preview-services">
        <h2 className="preview-section-title">Our Services</h2>
        <div className="preview-cards">
          <div className={`preview-card motion-demo-float ${showEntryAnimation ? 'motion-demo-enter' : ''}`}>
            <h3 className="preview-card-title">Design Systems</h3>
            <p className="preview-card-body">
              We build comprehensive design systems that bring consistency, efficiency, and scalability to your product development process. From foundational tokens to component libraries, we create the building blocks for cohesive digital experiences.
            </p>
            <div className="preview-card-action">
              <button className="preview-button preview-button-card">
                Learn More
              </button>
            </div>
          </div>

          <div className={`preview-card motion-demo-float ${showEntryAnimation ? 'motion-demo-enter' : ''}`}>
            <h3 className="preview-card-title">Web Development</h3>
            <p className="preview-card-body">
              Our development team transforms designs into performant, accessible, and maintainable web applications. We specialize in modern frameworks and best practices that ensure your product scales with your business needs.
            </p>
            <div className="preview-card-action">
              <button className="preview-button preview-button-card">
                Learn More
              </button>
            </div>
          </div>

          <div className={`preview-card motion-demo-float ${showEntryAnimation ? 'motion-demo-enter' : ''}`}>
            <h3 className="preview-card-title">Brand Strategy</h3>
            <p className="preview-card-body">
              We help you define and articulate your brand's unique position in the market. Through research, workshops, and strategic planning, we create brand foundations that resonate with your target audience and drive business growth.
            </p>
            <div className="preview-card-action">
              <button className="preview-button preview-button-card">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="preview-content">
        <h2 className="preview-section-title">Why Choose Us</h2>
        <p className="preview-content-paragraph">
          We bring a unique combination of design expertise, technical capability, and strategic thinking to every project. Our team has worked with startups and established companies alike, delivering solutions that not only look beautiful but drive real business results. We believe in collaborative partnerships and transparent communication throughout the entire process.
        </p>
        <ul className="preview-content-list">
          <li className="preview-content-list-item">
            <strong>Design Excellence:</strong> Award-winning design team with expertise in user experience, visual design, and interaction design
          </li>
          <li className="preview-content-list-item">
            <strong>Technical Precision:</strong> Modern development practices with focus on performance, accessibility, and maintainability
          </li>
          <li className="preview-content-list-item">
            <strong>Strategic Partnership:</strong> Collaborative approach that aligns design decisions with your business goals and user needs
          </li>
          <li className="preview-content-list-item">
            <strong>Proven Track Record:</strong> Successful projects across industries with measurable impact on user engagement and business metrics
          </li>
        </ul>
      </section>

      {/* Form Elements (Optional but Recommended) */}
      <section className="preview-form-section">
        <div className="preview-form-group">
          <label htmlFor="email" className="preview-form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="preview-form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="preview-form-group">
          <label className="preview-checkbox-label">
            <input type="checkbox" className="preview-checkbox" />
            <span>Subscribe to newsletter</span>
          </label>
        </div>
      </section>

      {/* Footer */}
      <footer className="preview-footer">
        <div className="preview-footer-content">
          <p className="preview-footer-text">
            © 2026 Acme Design Studio. All rights reserved.
          </p>
          <div className="preview-footer-links">
            <a href="#" className="preview-footer-link">Privacy</a>
            <a href="#" className="preview-footer-link">Terms</a>
            <a href="#" className="preview-footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
