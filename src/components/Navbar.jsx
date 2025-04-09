// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

// Move navItems outside the component since it's static
const navItems = [
  { id: '#heroSection', label: 'Home' },
  { id: '#AboutMe', label: 'About' },
  { id: '#Certificates', label: 'Certificates' },
  { id: '#Project', label: 'Projects' },
  { id: '#Contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('#home'); // Track active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track dropdown menu state

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      triggerAnimations(section); // Trigger animations on click
      setActiveSection(sectionId); // Set the clicked section as active
      setIsMenuOpen(false); // Close dropdown on mobile after click
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const triggerAnimations = (section) => {
    const animatedElements = section.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      el.classList.remove('visible');
      void el.offsetWidth; // Force reflow
      setTimeout(() => {
        el.classList.add('visible');
      }, 100);
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          setActiveSection(sectionId); // Update active section
          triggerAnimations(entry.target); // Trigger animations when section is in view
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
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
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
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