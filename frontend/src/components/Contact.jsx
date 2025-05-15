import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');
  const [formTouched, setFormTouched] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  // Client-side validation
  const validateForm = () => {
    const newErrors = {
      name: form.name.trim() === '' ? 'Name is required' : '',
      email: form.email.trim() === '' 
        ? 'Email is required' 
        : !validateEmail(form.email) 
          ? 'Please enter a valid email address'
          : '',
      message: form.message.trim() === '' 
        ? 'Message is required' 
        : form.message.length < 10 
          ? 'Message is too short (minimum 10 characters)'
          : form.message.length > 3000 
            ? 'Message is too long (maximum 3000 characters)'
            : ''
    };

    setErrors(newErrors);
    
    // Check if any errors exist
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormTouched(true);
    
    // Clear server error when form is changed
    if (serverError) {
      setServerError('');
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Validate the field that just lost focus
    if (name === 'name') {
      setErrors({
        ...errors,
        name: value.trim() === '' ? 'Name is required' : ''
      });
    } else if (name === 'email') {
      setErrors({
        ...errors,
        email: value.trim() === '' 
          ? 'Email is required' 
          : !validateEmail(value) 
            ? 'Please enter a valid email address'
            : ''
      });
    } else if (name === 'message') {
      setErrors({
        ...errors,
        message: value.trim() === '' 
          ? 'Message is required' 
          : value.length < 10 
            ? 'Message is too short (minimum 10 characters)'
            : value.length > 3000 
              ? 'Message is too long (maximum 3000 characters)'
              : ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    
    setSending(true);
    setServerError('');
    
    try {
      // Use BACKEND_API_URL from environment or default to localhost in development
      const API_URL = import.meta.env.VITE_BACKEND_API_URL;

      
      console.log('Sending form data to:', `${API_URL}/api/contact`);
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(form),
      });
      
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setFormTouched(false);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSent(false);
        }, 5000);
      } else {
        // Handle specific error cases
        if (response.status === 429) {
          setServerError('You have sent too many messages. Please try again later.');
        } else {
          setServerError(data.message || 'Failed to send message. Please try again.');
        }
      }
    } catch (err) {
      console.error('Error sending form:', err);
      setServerError('Network error. Please check that the backend server is running.');
    } finally {
      setSending(false);
    }
  };

  // Determine if submit button should be disabled
  const isSubmitDisabled = () => {
    if (sending || sent) return true;
    if (!formTouched) return false;
    
    return !form.name || !form.email || !form.message || 
           errors.name || errors.email || errors.message;
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
                <p>ak.pahari03@gmail.com</p>
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
            <a href="https://github.com/akpahari03" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ayush-kumar-pahari-465090224/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
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
          {sent ? (
            <motion.div 
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.successIcon}>
                <FaCheck />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for your message. I'll get back to you as soon as possible. A confirmation email has been sent to your inbox.</p>
            </motion.div>
          ) : (
            <form 
              className={styles.form} 
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name ? styles.inputError : ''}
                  required
                />
                {errors.name && <div className={styles.fieldError}>{errors.name}</div>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? styles.inputError : ''}
                  required
                />
                {errors.email && <div className={styles.fieldError}>{errors.email}</div>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? styles.inputError : ''}
                  required
                />
                {errors.message && <div className={styles.fieldError}>{errors.message}</div>}
                <div className={styles.charCount}>
                  {form.message.length} / 3000 characters
                </div>
              </div>
              
              {serverError && (
                <div className={styles.serverError}>
                  <FaExclamationTriangle /> {serverError}
                </div>
              )}
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitDisabled()}
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && <FaPaperPlane className={styles.sendIcon} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;