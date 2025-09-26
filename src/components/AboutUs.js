import React from 'react';

const AboutUs = () => {
  const teamMembers = [
     {
      name: 'Raymond B. Sundby',
      role: 'Whats his face?',
      image: '/images/team/team-member-3.svg',
      bio: 'Kjapp lten bio om Raymond her'
    },
    {
      name: 'Jørn W. Larsen',
      role: 'CTO',
      image: '/images/team/jorn-larsen.png',
      bio: 'Teknisk arkitekt med lidenskap for skalerbare løsninger'
    },
     {
      name: 'Tom Gjerde',
      role: 'CEO & Grunnlegger',
      image: '/images/team/tom-gjerde.jpeg',
      bio: 'Grunnlegger av Fritim med visjon om rettferdig dugnad'
    },
  ];

  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <h2 className="section-title">Fra dugnadskaos til fellesskap – derfor startet vi Fritim</h2>
        <p className="section-subtitle">
          Fritim ble startet av Tom Gjerde og teamet hans med et enkelt mål: å gjøre dugnaden rettferdig og håndterbar for alle.
Vi så hvor mye tid familier bruker på oppgaver som ofte kolliderer med jobb, fritid og andre forpliktelser. <br /> Samtidig så vi ungdommer som ønsker å bidra og tjene egne penger – men som mangler en enkel vei inn.
        </p>
        {/* 
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.image} 
                alt={member.name}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  border: '4px solid #f0f0f0'
                }}
              />
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
        */}
        {/* Company Story */}
        {/* 
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          padding: '3rem',
          background: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <h3 style={{ marginBottom: '2rem', color: '#1a1a1a' }}>Én plattform – flere løsninger</h3>
           <ul style={{ 
             fontSize: '1.1rem', 
             lineHeight: '1.8', 
             color: '#666',
             maxWidth: '800px',
             margin: '0 auto',
             listStyle: 'none',
             padding: 0
           }}>
             <li className='li-bold'>Frikjøp av dugnad</li>
             <p>Foreldre kan kjøpe seg fri fra oppgaver. Da stepper registrerte frivillige inn – og klubben er alltid dekket.</p>
             
             <li className='li-bold'>Fondstøtte</li>
             <p>En del av Fritims inntekter går tilbake til et eget fond som støtter familier som ellers ikke har råd til å delta.</p>
             
             <li className='li-bold'>Kjøp og salg (Gi bort/selg)</li>
             <p>Klubber og foreldre kan enkelt selge eller gi bort sportsutstyr via plattformen. Fritim tar et lite gebyr – resten går rett tilbake til fellesskapet.</p>
             
             <li className='li-bold'>Dugnadsplanlegger</li>
             <p>Klubbledelsen får oversikt og kan tildele oppgaver rettferdig. Foreldre kan svare med ett klikk: "Kommer" – "Frikjøper" – "Kan ikke".</p>
             
             <li className='li-bold'>Kiosk, cup og arrangement</li>
             <p>Alt på ett sted – betaling, oversikt, oppgjør og administrasjon.</p>
           </ul>
          
        </div>
        */}
      </div>
    </section>
  );
};

export default AboutUs;
