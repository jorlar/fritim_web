import React from 'react';

const AppShowcase = () => {
  const features = [
    {
      icon: '📝',
      title: 'Frikjøp av dugnad',
      description: 'Foreldre kan kjøpe seg fri fra oppgaver. Da stepper registrerte frivillige inn – og klubben er alltid dekket.'
    },
    {
      icon: '💰',
      title: 'Fondstøtte',
      description: 'En del av Fritims inntekter går tilbake til et eget fond som støtter familier som ellers ikke har råd til å delta.'
    },
    {
      icon: '💰',
      title: 'Kjøp og salg (Gi bort/selg)',
      description: 'Klubber og foreldre kan enkelt selge eller gi bort sportsutstyr via plattformen. Fritim tar et lite gebyr – resten går rett tilbake til fellesskapet.'
    },
    {
      icon: '📝',
      title: 'Dugnadsplanlegger',
      description: 'Klubbledelsen får oversikt og kan tildele oppgaver rettferdig. Foreldre kan svare med ett klikk: "Kommer" – "Frikjøper" – "Kan ikke".'
    },
    {
      icon: '📊',
      title: 'Kiosk, cup og arrangement',
      description: 'Alt på ett sted – betaling, oversikt, oppgjør og administrasjon.'
    },
    {
      icon: '🌐',
      title: 'Cross-Platform',
      description: 'Sømløs integrasjon mot støttesystemer hos idrettskretser, forbund og frivilligportaler.'
    }
  ];

  return (
    <section id="app-showcase" className="section app-showcase">
      <div className="container">
        <h2 className="section-title">Slik fungerer Fritim</h2>
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
