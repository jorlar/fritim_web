import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Fritim AS
        </a>
        
        <nav>
          <ul className="nav">
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Hjem</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('app-showcase'); }}>App</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>Om oss</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontakt</a></li>
          </ul>
        </nav>
        
        <button className="mobile-menu-btn">☰</button>
      </div>
    </header>
  );
};

export default Header;
