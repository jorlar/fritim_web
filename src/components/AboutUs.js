import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 10+ years in tech innovation'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Technical architect passionate about scalable solutions'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in mobile technologies'
    },
    {
      name: 'Emma Wilson',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer focused on user-centered experiences'
    }
  ];

  return (
    <section id="about-us" className="section about-us">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          We are a passionate team of innovators, developers, and designers 
          dedicated to creating exceptional digital experiences that make a difference.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.image} 
                alt={member.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div 
                style={{ 
                  display: 'none',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}
              >
                👤
              </div>
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
        
        {/* Company Story */}
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          padding: '3rem',
          background: '#f8f9fa',
          borderRadius: '12px'
        }}>
          <h3 style={{ marginBottom: '2rem', color: '#1a1a1a' }}>Our Story</h3>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Founded in 2024, Fritim AS emerged from a simple yet powerful vision: to create 
            mobile applications that not only solve problems but transform the way people 
            interact with technology. Our team combines years of industry experience with 
            fresh perspectives to deliver innovative solutions that exceed expectations.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div>
              <h4 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '0.5rem' }}>100+</h4>
              <p style={{ color: '#666' }}>Projects Completed</p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '0.5rem' }}>50+</h4>
              <p style={{ color: '#666' }}>Happy Clients</p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '0.5rem' }}>5+</h4>
              <p style={{ color: '#666' }}>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
