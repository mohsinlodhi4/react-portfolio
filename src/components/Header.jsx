import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaHome, FaBriefcase, FaProjectDiagram, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            // const sections = ['home', 'aboutus', 'projects', 'skills1', 'education', 'footer'];
            const sections = ['home', 'projects', 'skills1', 'footer'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { href: '/', label: 'Home', icon: <FaHome />, id: 'home' },
        // { href: '#aboutus', label: 'Experience', icon: <FaBriefcase />, id: 'aboutus' },
        { href: '#projects', label: 'Projects', icon: <FaProjectDiagram />, id: 'projects' },
        { href: '#skills1', label: 'Skills', icon: <FaCode />, id: 'skills1' },
        // { href: '#education', label: 'Education', icon: <FaGraduationCap />, id: 'education' },
    ];

    return (
        <header className={`header-modern ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo/Brand */}
                    <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
                        <span className="brand-text">Mohsin</span>
                        <span className="brand-dot">.</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-toggle d-lg-none" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>

                    {/* Navigation Links */}
                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a 
                                        href={item.href} 
                                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
                                        // data-aos="fade-down"
                                        // data-aos-delay={index * 50}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-text">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <a 
                            href="#footer" 
                            className="btn-primary-custom header-cta"
                            onClick={closeMobileMenu}
                            // data-aos="fade-down"
                            // data-aos-delay="250"
                        >
                            <FaEnvelope />
                            <span>Let's Connect</span>
                        </a>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
