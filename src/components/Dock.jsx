import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Dock.module.css';

const Dock = ({ toggleTheme, isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Update active section based on scroll position
    const handleScroll = () => {
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
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const dockItems = [
    { id: 'hero', icon: <FaHome />, action: () => scrollTo('hero'), label: 'Home' },
    { id: 'projects', icon: <FaCode />, action: () => scrollTo('projects'), label: 'Projects' },
    { id: 'linkedin', icon: <FaLinkedinIn />, action: () => openLink('https://www.linkedin.com/in/ayush-kumar-pahari-465090224/'), label: 'LinkedIn' },
    { id: 'github', icon: <FaGithub />, action: () => openLink('https://github.com/akpahari03'), label: 'GitHub' },
    { id: 'twitter', icon: <FaTwitter />, action: () => openLink('https://x.com/ayushkp2003'), label: 'Twitter' },
    { id: 'contact', icon: <FaEnvelope />, action: () => scrollTo('contact'), label: 'Contact' }
  ];

  // Add theme toggle only if function is passed
  if (toggleTheme) {
    dockItems.push({ 
      id: 'theme', 
      icon: isDarkMode ? <FaSun /> : <FaMoon />, 
      action: toggleTheme, 
      label: 'Toggle Theme' 
    });
  }

  return (
    <motion.div 
      className={styles.dockContainer}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className={styles.dock}>
        {dockItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${styles.dockItem} ${activeSection === item.id ? styles.active : ''}`}
            onClick={item.action}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(100, 181, 246, 0.4)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 15 
            }}
          >
            <motion.div 
              className={styles.iconWrapper}
              animate={{ 
                rotateY: hoveredIndex === index ? 360 : 0
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
            
            {hoveredIndex === index && (
              <motion.div 
                className={styles.glowEffect}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Label that appears on hover */}
            {hoveredIndex === index && (
              <motion.div 
                className={styles.dockLabel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;