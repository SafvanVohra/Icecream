import React, { useState } from "react";
import { Link } from "react-router-dom";
import scoopImg from "../img/scoop_pistachio.jpg";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    occupation: "",
    interestedIn: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        occupation: "",
        interestedIn: "",
        message: ""
      });
    }, 4500);
  }

  return (
    <>
      {/* 1. Reach Out To Us Section - Placed ABOVE the footer */}
      <section id="contact" className="reach-us-section">
        <div className="reach-us-header">
          <h2 className="scream-title-top">We hear you scream</h2>
          <h2 className="scream-title-bottom">for ice-cream</h2>
        </div>

        <div className="reach-us-container">
          {/* Left Card: Corporate / Parlor Office */}
          <div className="office-card">
            <div className="office-img-wrapper">
              <img
                src={scoopImg}
                alt="Delicious Artisanal Ice Cream"
                className="office-scoop-img"
              />
            </div>
            <div className="office-details">
              <h4 className="office-heading">CORPORATE OFFICE</h4>
              <h3 className="office-name">Delicious House</h3>
              <p className="office-address">
                Delicious Enterprises Ltd., Nr. Navrangpura Crossing,
                <br />
                Amul Dairy Road, Anand - 388001, Gujarat, INDIA
              </p>
              <p className="office-contact-line">
                <span className="contact-label">Tel:</span> +91 2692 256401 to 24
              </p>
              <p className="office-contact-line">
                <span className="contact-label">Fax :</span> +91 2692 256407
              </p>
              <p className="office-contact-line">
                <span className="contact-label">E-mail:</span>{" "}
                <a href="mailto:info@delicious.com">info@delicious.com</a>
              </p>
            </div>
          </div>

          {/* Right Card: Reach Out Form */}
          <div className="form-card">
            <h3 className="form-title">Reach Out To Us</h3>
            {submitted ? (
              <div className="form-success-banner">
                <span className="success-icon">🍦</span>
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. Our Anand parlor team will connect with you shortly.</p>
              </div>
            ) : (
              <form className="reach-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="reach-input"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="reach-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="reach-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="reach-input"
                  />
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="reach-input"
                  />
                  <input
                    type="text"
                    name="interestedIn"
                    placeholder="Interested in"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    className="reach-input"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="reach-textarea"
                  />
                </div>
                <div className="form-action-row">
                  <button type="submit" className="reach-send-btn">
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. Site Footer - Pure Waffle Texture with Melting Cream Drips */}
      <footer id="footer" className="site-footer">
        {/* Authentic Melting Ice Cream Drip Divider */}
        <div className="footer-cream-drip"></div>

        <div className="footer-content-wrap">
          <div className="footer-top-row">
            {/* Brand Logo & Slogan */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-brand-logo">
                Delicious
              </Link>
              <p className="footer-brand-slogan">
                Pure creamy happiness in every artisanal scoop.
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="footer-links-col">
              <a href="/#about-section" className="footer-nav-link">Brand Story</a>
              <Link to="/products" className="footer-nav-link">Products</Link>
              <a href="/#review-card" className="footer-nav-link">Chronicles</a>
            </div>

            {/* Links Column 2 */}
            <div className="footer-links-col">
              <Link to="/products" className="footer-nav-link">Now For Ever Cafe</Link>
              <Link to="/products" className="footer-nav-link">Hangout</Link>
              <a href="#contact" className="footer-nav-link">Locate Us</a>
            </div>

            {/* Links Column 3 */}
            <div className="footer-links-col">
              <a href="#contact" className="footer-nav-link">Contact Us</a>
              <a href="#contact" className="footer-nav-link">Careers</a>
              <a href="#contact" className="footer-nav-link">Franchise</a>
            </div>

            {/* Social Media Column */}
            <div className="footer-social-col">
              <span className="social-label">Follow Us On</span>
              <div className="social-icon-group">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-btn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.46 11.82 5 14.5 5c1.28 0 2.62.23 2.62.23v2.88h-1.48c-1.5 0-1.97.93-1.97 1.88V12h3.25l-.52 3h-2.73v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-btn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="social-btn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Direct Row on Waffle Background */}
          <div className="footer-bottom-direct">
            <span className="copyright-text">
              Copyright 2026 Delicious Group
            </span>
            <span className="privacy-link">
              <a href="#contact">Privacy Policy</a>
            </span>
            <div className="powered-by">
              <span>Powered By</span>
              <strong className="powered-logo">delicious</strong>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}