import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaMoon, FaSun, FaTimes, FaBars } from 'react-icons/fa';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollTo = (id) => {
    setIsOpen(false); // Close menu after selection
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url) => {
    window.open(url, '_blank');
    setIsOpen(false); // Close menu after opening link
  };

  const menuItems = [
    { id: 'hero', icon: <FaHome />, action: () => scrollTo('hero'), label: 'Home' },
    { id: 'projects', icon: <FaCode />, action: () => scrollTo('projects'), label: 'Projects' },
    { id: 'skills', icon: <FaCode />, action: () => scrollTo('skills'), label: 'Skills' },
    { id: 'about', icon: <FaCode />, action: () => scrollTo('about'), label: 'About' },
    { id: 'contact', icon: <FaEnvelope />, action: () => scrollTo('contact'), label: 'Contact' },
    { id: 'linkedin', icon: <FaLinkedinIn />, action: () => openLink('https://www.linkedin.com/in/ayush-kumar-pahari-465090224/'), label: 'LinkedIn' },
    { id: 'github', icon: <FaGithub />, action: () => openLink('https://github.com/akpahari03'), label: 'GitHub' },
    { id: 'twitter', icon: <FaTwitter />, action: () => openLink('https://x.com/ayushkp2003'), label: 'Twitter' }
  ];

  // Add theme toggle only if function is passed
  if (toggleTheme) {
    menuItems.push({ 
      id: 'theme', 
      icon: isDarkMode ? <FaSun /> : <FaMoon />, 
      action: toggleTheme, 
      label: isDarkMode ? 'Light Mode' : 'Dark Mode'
    });
  }

  // Variants for animations
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Burger button */}
      <motion.button
        className={styles.burgerButton}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-label="Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>
      
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuContainer}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.menuHeader}>
              <motion.button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes />
              </motion.button>
            </div>
            
            <div className={styles.menuItems}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`${styles.menuItem} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={item.action}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.menuIcon}>
                    {item.icon}
                  </div>
                  <span className={styles.menuLabel}>{item.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className={styles.menuFooter}>
              <p>© 2025 Ayush Kumar Pahari</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
