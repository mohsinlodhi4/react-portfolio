import React from 'react';
import { FaLinkedinIn, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiCode, HiSparkles } from 'react-icons/hi';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
              {/* Badge */}
              <div className="hero-badge mb-4" data-aos="fade-up" data-aos-delay="100">
                <HiSparkles className="me-2" />
                <span>Available for Opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title mb-4" data-aos="fade-up" data-aos-delay="200">
                Hi, I'm <span className="text-gradient">Mohsin Khan Lodhi</span>
              </h1>

              {/* Subtitle */}
              <div className="hero-subtitle mb-4" data-aos="fade-up" data-aos-delay="300">
                <HiCode className="subtitle-icon" />
                <h2>Software Engineer & Solution Architect</h2>
              </div>

              {/* Description */}
              <p className="hero-description mb-5" data-aos="fade-up" data-aos-delay="400">
                Passionate about <strong>Software Architecture</strong> and <strong>AI integration</strong>. 
                With a strong background in full-stack development, I specialize in building 
                <strong> scalable, high-performance solutions</strong> that solve real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="hero-buttons d-flex flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay="500">
                <a 
                  href="#projects" 
                  className="btn-primary-custom btn-hover-scale"
                >
                  View My Work
                  <FaArrowRight />
                </a>
                <a 
                  href="#footer" 
                  className="btn-outline-custom btn-hover-scale"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="hero-social" data-aos="fade-up" data-aos-delay="600">
                <p className="social-label mb-3">Connect with me:</p>
                <div className="social-links d-flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/mohsin-lodhi-53685b202/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="https://github.com/mohsinlodhi4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link github"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="hero-image-wrapper" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <div className="hero-image-card">
                <div className="image-decoration decoration-1"></div>
                <div className="image-decoration decoration-2"></div>
                <img 
                  src="/mohsin.png" 
                  className="img-fluid hero-image" 
                  alt="Mohsin Khan Lodhi - Software Engineer" 
                />
              </div>
              
              {/* Floating Stats */}
              <div className="floating-stat stat-1" data-aos="fade-up" data-aos-delay="800">
                <div className="stat-icon">
                  <HiCode />
                </div>
                <div className="stat-content">
                  <h4>3+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              
              <div className="floating-stat stat-2" data-aos="fade-up" data-aos-delay="1000">
                <div className="stat-icon">
                  <HiSparkles />
                </div>
                <div className="stat-content">
                  <h4>15+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1200">
        <a href="#aboutus" className="scroll-link">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-arrow"></span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
