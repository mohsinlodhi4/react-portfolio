import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* CTA Section */}
          <div className="footer-cta text-center" data-aos="fade-up">
            <div className="cta-icon mb-4">
              <HiMail />
            </div>
            <h2 className="cta-title mb-3">Let's Work Together!</h2>
            <p className="cta-description mb-5">
              Discuss a project or just want to say hi? My inbox is open for all.
              <br />
              Contact me directly or connect via social media.
            </p>

            {/* Contact Methods */}
            <div className="contact-methods row g-4 justify-content-center mb-5">
              <div className="col-lg-4 col-md-6">
                <a 
                  href="mailto:mohsinlodhi4@gmail.com" 
                  className="contact-card"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <h4>Email</h4>
                  <p>mohsinlodhi4@gmail.com</p>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a 
                  href="https://www.linkedin.com/in/mohsin-lodhi-53685b202/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="contact-icon">
                    <FaLinkedinIn />
                  </div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a 
                  href="https://github.com/mohsinlodhi4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="contact-icon">
                    <FaGithub />
                  </div>
                  <h4>GitHub</h4>
                  <p>Check out my code</p>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section" data-aos="fade-up" data-aos-delay="400">
              <p className="social-label mb-3">Let's connect on social media</p>
              <div className="social-links d-flex justify-content-center gap-3">
                <a 
                  href="https://github.com/mohsinlodhi4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohsin-lodhi-53685b202/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="mailto:mohsinlodhi4@gmail.com"
                  className="social-link"
                  aria-label="Send Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="footer-brand mb-3 mb-lg-0">
                <h3 className="brand-name">Mohsin<span className="brand-dot">.</span></h3>
                <p className="brand-tagline">Software Engineer & Solution Architect</p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <p className="copyright">
                © {new Date().getFullYear()} Mohsin Khan Lodhi. Built with <FaHeart className="heart-icon" /> using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        data-aos="fade-up"
      >
        <FaArrowUp />
      </button>

      {/* Background Decoration */}
      <div className="footer-decoration"></div>
    </footer>
  );
};

export default Footer;
