import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import profile from '../assets/photo.jpeg';

const About = () => {
  const timelineEntries = [
    {
      title: "🎓 Started with C++ & DSA",
      description: "Built a strong foundation in data structures, algorithms, and problem solving using C++.",
      year: "2021"
    },
    {
      title: "🧠 Discovered MERN Stack",
      description: "Explored the world of full stack development with MongoDB, Express.js, React.js, and Node.js.",
      year: "2022"
    },
    {
      title: "🎨 Fell in Love with UI/UX",
      description: "Began building minimalist, design-first web interfaces — balancing form and function beautifully.",
      year: "2022"
    },
    {
      title: "🚀 Built Real Projects",
      description: "Developed projects using APIs, AI (Gemini), WebSockets, Redis, and production-ready stacks.",
      year: "2023"
    },
    {
      title: "📈 Passionate About Impact",
      description: "Always curious. Always improving. Building products that matter through thoughtful code & design.",
      year: "Now"
    }
  ];

  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>
        About <span className={styles.headingAccent}>Me</span>
      </h2>
      
      <div className={styles.container}>
        <div className={styles.introSection}>
          <motion.div 
            className={styles.picture}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.picturePlaceholder}>
              <img src={profile} alt="AKP" />
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.bio}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hello! I'm <span className={styles.highlight}>Ayush Kumar Pahari</span>, a passionate full-stack developer 
              with a love for creating beautiful and functional web applications.
            </p>
            <p>
              My journey in tech began with C++ and DSA, which gave me a strong foundation in logical thinking and problem-solving.
              Since then, I've delved deep into the MERN stack, building projects that combine elegant UI with robust functionality.
            </p>
            <p>
              I believe in writing clean, efficient code and creating intuitive user experiences. 
              When I'm not coding, you can find me solving problems on LeetCode or exploring new technologies.
            </p>
          </motion.div>
        </div>
        
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineHeading}>My Journey</h3>
          
          <div className={styles.timeline}>
            {timelineEntries.map((entry, index) => (
              <motion.div 
                className={styles.timelineEntry}
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{entry.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{entry.title}</h4>
                  <p>{entry.description}</p>
                </div>
              </motion.div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;