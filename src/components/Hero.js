import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Innovation in Motion</h1>
        <p>
          Fritim AS is developing cutting-edge mobile applications that transform 
          the way businesses operate. Join us on our journey to revolutionize 
          digital experiences.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('app-showcase')}
          >
            Discover Our App
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
