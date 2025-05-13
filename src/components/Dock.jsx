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
    { id: 'linkedin', icon: <FaLinkedinIn />, action: () => openLink('https://linkedin.com/in/yourusername'), label: 'LinkedIn' },
    { id: 'github', icon: <FaGithub />, action: () => openLink('https://github.com/yourusername'), label: 'GitHub' },
    { id: 'twitter', icon: <FaTwitter />, action: () => openLink('https://twitter.com/yourusername'), label: 'Twitter' },
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

  // Calculate scale for each item based on distance from hovered item
  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    
    // Distance from hovered item
    const distance = Math.abs(index - hoveredIndex);
    
    // Scale factors
    if (distance === 0) return 1.2; // Hovered item
    if (distance === 1) return 1.1; // Adjacent items
    if (distance === 2) return 1.05; // Items two away
    
    return 1; // Default scale
  };

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
            animate={{ 
              scale: getScale(index)
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            {item.icon}
            
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