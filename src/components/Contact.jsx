import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending - replace with actual backend call
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2 className={styles.heading}>
            Let's <span className={styles.headingAccent}>Connect</span>
          </h2>
          <p className={styles.subtitle}>I'm always open to discussing new projects, opportunities, or partnerships.</p>
          
          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <div className={styles.methodIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.methodInfo}>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            
            <div className={styles.method}>
              <div className={styles.methodIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.methodInfo}>
                <h3>Location</h3>
                <p>Bengaluru, India</p>
              </div>
            </div>
          </div>
          
          <div className={styles.social}>
            <a href="#" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form 
            className={styles.form} 
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={sending || sent}
            >
              {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
              {!sending && !sent && <FaPaperPlane className={styles.sendIcon} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;