import React from 'react';

const AppShowcase = () => {
  const features = [
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Built with modern mobile-first principles to deliver exceptional user experiences across all devices.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your app runs smoothly even under heavy load conditions.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures protect your data and ensure reliable operation 24/7.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI/UX',
      description: 'Thoughtfully designed interfaces that are both functional and visually stunning.'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics help you understand user behavior and optimize your business strategy.'
    },
    {
      icon: '🌐',
      title: 'Cross-Platform',
      description: 'Seamless experience across iOS, Android, and web platforms with native performance.'
    }
  ];

  return (
    <section id="app-showcase" className="section app-showcase">
      <div className="container">
        <h2 className="section-title">Slk fungerer Fritim</h2>
        <p className="section-subtitle">
          Fritim er en plattform som frigjør tid for familier, skaper muligheter for ungdom og bygger fellesskap i idrett og organisasjoner. Vi kobler sammen klubber, foreldre, frivillige og støttespillere i én løsning
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* App Screenshots Placeholder */}
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          padding: '3rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
        }}>
          <h3 style={{ marginBottom: '2rem', color: '#1a1a1a' }}>Utdrag av appen vår</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{
              height: '400px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              📱 App Screen 1
            </div>
            <div style={{
              height: '400px',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              📱 App Screen 2
            </div>
            <div style={{
              height: '400px',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              📱 App Screen 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
