import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.particles}>
        {/* Particle background would be here */}
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.intro}
        >
          <div className={styles.smallText}>Hello, I'm</div>
          <h1 className={styles.title}>Ayush Kumar Pahari</h1>
          <p className={styles.subtitle}>
            Full Stack Developer (MERN) · DSA Enthusiast
          </p>
          
          <motion.div 
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redis', 'Socket.IO', 'Google Gemini'].map((tech, index) => (
              <motion.span 
                key={tech} 
                className={styles.techBadge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#" className={styles.primaryBtn}>Download Resume</a>
            <button onClick={scrollToProjects} className={styles.secondaryBtn}>
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToProjects}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;