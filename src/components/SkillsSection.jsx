import React from 'react';
import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';
import { 
  FaCode, FaLaptopCode, FaTools, FaUserTie, FaCertificate
} from 'react-icons/fa';

const skills = {
  "Programming Languages": {
    icon: <FaCode />,
    items: [
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 75 }
    ]
  },
  "Frameworks & Tools": {
    icon: <FaLaptopCode />,
    items: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  "Developer Tools": {
    icon: <FaTools />,
    items: [
      { name: "Git/GitHub", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "VS Code", level: 90 }
    ]
  },
  "Soft Skills": {
    icon: <FaUserTie />,
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Leadership", level: 80 }
    ]
  },
  "Certificates": {
    icon: <FaCertificate />,
    items: [
      { name: "Udemy Web Development", level: 100 },
    ]
  }
};

const SkillsSection = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>
        Skills <span className={styles.headingAccent}>&</span> Expertise
      </h2>
      <p className={styles.subtext}>Here are some technologies I've been working with</p>
      
      <div className={styles.container}>
        {Object.entries(skills).map(([category, { icon, items }], idx) => (
          <motion.div 
            className={styles.category}
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.categoryHeader}>
              <div className={styles.icon}>{icon}</div>
              <h3>{category}</h3>
            </div>
            
            <div className={styles.skillsList}>
              {items.map((skill, index) => (
                <div className={styles.skillItem} key={skill.name}>
                  <div className={styles.skillInfo}>
                    <span>{skill.name}</span>
                    <span className={styles.percentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBg}>
                    <motion.div 
                      className={styles.progressBar}
                      style={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (idx * 0.1) + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;