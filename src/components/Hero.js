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
        <h1>Vi gjør dugnad enklere, rettferdigere og mer inkluderende</h1>
        <p>
          Fritim gir barn muligheten til å være med på laget, selv når familien har dårlig råd. Det gir trenere mer tid til idretten, og foreldre en enklere hverdag. Det handler om fellesskap, inkludering og overskudd til det som betyr mest – idrettsgleden.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('app-showcase')}
          >
            Vår app
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Kontakt oss
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
