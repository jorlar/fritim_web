import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Fritim AS</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Innovation in Motion - Creating exceptional mobile experiences
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>About Us</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Our Team</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Careers</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>App Development</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>UI/UX Design</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Consulting</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>LinkedIn</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Twitter</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>GitHub</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ opacity: 0.8 }}>contact@fritim.no</span>
              <span style={{ opacity: 0.8 }}>+47 XXX XX XXX</span>
              <span style={{ opacity: 0.8 }}>Oslo, Norway</span>
            </div>
          </div>
        </div>
        
        <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '2rem 0' }} />
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ opacity: 0.8 }}>
            © {currentYear} Fritim AS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
