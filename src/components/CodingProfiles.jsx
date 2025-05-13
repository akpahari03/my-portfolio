import React from 'react';
import styles from './CodingProfiles.module.css';
import { FaExternalLinkAlt, FaCode, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CodingProfiles = () => {
  return (
    <section className={styles.profiles} id="coding">
      <h2 className={styles.heading}>
        Coding <span className={styles.headingAccent}>Profiles</span>
      </h2>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.profileCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.profileIcon}>
            <FaCode />
          </div>
          
          <div className={styles.profileContent}>
            <h3>LeetCode</h3>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>600+</span>
                <span className={styles.statLabel}>Problems</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>1617</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>
            <a href="#" target="_blank" rel="noreferrer" className={styles.profileLink}>
              View Profile <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.profileCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.profileIcon}>
            <FaTrophy />
          </div>
          
          <div className={styles.profileContent}>
            <h3>GeeksForGeeks</h3>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>250+</span>
                <span className={styles.statLabel}>Problems</span>
              </div>
            </div>
            <a href="#" target="_blank" rel="noreferrer" className={styles.profileLink}>
              View Profile <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;