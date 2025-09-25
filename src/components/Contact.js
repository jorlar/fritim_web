import React, { useState } from 'react';

const Contact = () => {
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to transform your business with our innovative app? 
          Let's discuss how we can help you achieve your goals.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              We're excited to hear about your project and discuss how our app 
              can help your business grow. Reach out to us and let's create 
              something amazing together.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Contact Information</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong> contact@fritim.no
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Phone:</strong> +47 XXX XX XXX
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Address:</strong> Oslo, Norway
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Business Hours</h4>
              <div style={{ marginBottom: '0.5rem' }}>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 4:00 PM</div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  Thank you! Your message has been sent successfully.
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
