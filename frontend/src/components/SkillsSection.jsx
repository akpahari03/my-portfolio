import React from 'react';
import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';
import { 
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiCss3, DiHtml5, DiGit, DiSass
} from 'react-icons/di';
import { 
  SiRedis, SiSocketdotio, SiExpress, SiTailwindcss, SiCplusplus, SiPostgresql, SiFirebase, SiGithub
} from 'react-icons/si';

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React.js", icon: <DiReact size={28} />, color: "#61DAFB" },
    { name: "JavaScript", icon: <DiJavascript1 size={28} />, color: "#F7DF1E" },
    { name: "HTML5", icon: <DiHtml5 size={28} />, color: "#E34F26" },
    { name: "CSS3", icon: <DiCss3 size={28} />, color: "#1572B6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "#06B6D4" },
    { name: "Sass", icon: <DiSass size={28} />, color: "#CC6699" }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <DiNodejs size={28} />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress size={28} />, color: "#FFFFFF" },
    { name: "MongoDB", icon: <DiMongodb size={28} />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} />, color: "#336791" },
    { name: "Redis", icon: <SiRedis size={28} />, color: "#DC382D" },
    { name: "Socket.io", icon: <SiSocketdotio size={28} />, color: "#010101" }
  ];

  const otherSkills = [
    { name: "C++", icon: <SiCplusplus size={28} />, color: "#00599C" },
    { name: "Git", icon: <DiGit size={28} />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub size={28} />, color: "#FFFFFF" },
    { name: "Firebase", icon: <SiFirebase size={28} />, color: "#FFCA28" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className={styles.skills} id="skills">
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills <span className={styles.highlight}>&</span> Expertise
      </motion.h2>
      
      <div className={styles.container}>
        <div className={styles.skillCategories}>
          <motion.div 
            className={styles.categorySection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.categoryTitle}>Frontend Development</h3>
            <motion.div 
              className={styles.skillsGrid}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className={styles.skillItem}
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                  style={{ 
                    borderColor: skill.color
                  }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className={styles.skillName}>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.categorySection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>Backend Development</h3>
            <motion.div 
              className={styles.skillsGrid}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className={styles.skillItem}
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                  style={{ 
                    borderColor: skill.color
                  }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className={styles.skillName}>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.categorySection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.categoryTitle}>Other Skills</h3>
            <motion.div 
              className={styles.skillsGrid}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className={styles.skillItem}
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                  style={{ 
                    borderColor: skill.color
                  }}
                >
                  <div className={styles.skillIcon} style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p className={styles.skillName}>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.expertiseSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className={styles.expertiseTitle}>Areas of Expertise</h3>
          <ul className={styles.expertiseList}>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className={styles.expertiseBullet} />
              <span className={styles.expertiseText}>Developing responsive and interactive user interfaces with React.js</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span className={styles.expertiseBullet} />
              <span className={styles.expertiseText}>Building RESTful APIs and backend services with Node.js and Express</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <span className={styles.expertiseBullet} />
              <span className={styles.expertiseText}>Database design and management with MongoDB and PostgreSQL</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <span className={styles.expertiseBullet} />
              <span className={styles.expertiseText}>Creating real-time applications with Socket.IO and Redis</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <span className={styles.expertiseBullet} />
              <span className={styles.expertiseText}>Problem-solving and algorithmic thinking with C++ and Data Structures</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;