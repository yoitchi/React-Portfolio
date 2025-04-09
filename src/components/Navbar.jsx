import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Static nav items
const navItems = [
  { id: '#heroSection', label: 'Home' },
  { id: '#AboutMe', label: 'About' },
  { id: '#Certificates', label: 'Certificates' },
  { id: '#Project', label: 'Projects' },
  { id: '#Contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('#heroSection'); // Default to heroSection
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      triggerAnimations(section);
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const triggerAnimations = (section) => {
    const animatedElements = section.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      el.classList.remove('visible');
      void el.offsetWidth; // Force reflow
      setTimeout(() => el.classList.add('visible'), 100);
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          setActiveSection(sectionId);
          triggerAnimations(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#heroSection" onClick={(e) => handleNavClick(e, '#heroSection')}>
              <img
                src={`${process.env.PUBLIC_URL}/img/Logo.png`}
                alt="VoidStack Logo"
                className="logo-img"
              />
            </a>
            <div className="logo-text">CodeVerse</div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
                {activeSection === item.id && <span className="active-underline" />}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="navbar-toggle">
            <button onClick={toggleMenu} className="toggle-btn">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="navbar-dropdown">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`dropdown-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
                {activeSection === item.id && <span className="dropdown-underline" />}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;