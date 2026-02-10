import { socialIcons } from "../constants";
import { FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-section">
      {/* Gradient top border */}
      <div className="footer-gradient-line" />

      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">Dileep Kumar Sharma</h3>
            <p className="footer-tagline">
              Full-Stack Developer & AI Enthusiast crafting innovative digital
              experiences with modern technologies.
            </p>
            <a
              href="https://s3-personal-bucket.s3.amazonaws.com/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-resume-btn"
            >
              <FaFileDownload className="text-sm" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-column">
            <h4 className="footer-column-title">Get in Touch</h4>
            <div className="footer-contact-list">
              <a
                href="mailto:dkus2896@gmail.com"
                className="footer-contact-item"
              >
                <FaEnvelope className="footer-contact-icon" />
                <span>dkus2896@gmail.com</span>
              </a>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Rochester, NY</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-socials">
              {socialIcons.map(({ name, Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} Dileep Kumar Sharma. All rights reserved.
        </p>
        <p className="footer-made-with">
          Built with React, Three.js & GSAP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
