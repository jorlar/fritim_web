import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_pk0bz5l', // Replace with your EmailJS service ID
        'template_hamw12d', // Replace with your EmailJS template ID
        formRef.current,
        'R_B_JKQLJnXj0kX7u' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Ta Kontakt</h2>
        <p className="section-subtitle">
          Vi er ivrig på å høre fra deg. Hvis du har spørsmål, eller ønsker å komme i kontakt, kan du kontakte oss på e-post eller fyll ut kontaktinformasjonen under.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktinformasjon</h3>
            
            <div style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong> hei@fritim.no
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Address:</strong> Oslo, Norway
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Fullt Navn *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Addresse *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Klubb / Idrettslag</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Melding *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv inn meldingen din her..."
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Sender...' : 'Send Melding'}
              </button>
              
              {submitStatus === 'success' && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '1rem', 
                  background: '#d4edda', 
                  color: '#155724', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  Takk! Meldingen din er sendt.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '1rem', 
                  background: '#f8d7da', 
                  color: '#721c24', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  Beklager, det oppstod en feil ved sending. Prøv igjen eller kontakt oss direkte på hei@fritim.no
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
