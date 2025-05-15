import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectSection.module.css';
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';


import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png'; 
import project3Image from '../assets/project3.png';  
import project4Image from '../assets/project4.png'; 

const projects = [
  {
    title: 'E-commerce Website',
    stack: ['React.JS', 'Node.JS', 'Express.JS', 'MongoDB'],
    description:
      'Full-stack e-commerce web application facilitating seamless interaction between users and the platform. Implemented product management and shopping cart functionality.',
    github: 'https://github.com/akpahari03/SwiftStyle',
    demo: '#',
    image: project1Image, 
  },
  {
    title: 'Chat App with Google Gemini',
    stack: ['React.JS', 'Express.JS', 'MongoDB', 'Redis', 'Google Gemini', 'socket.io'],
    description:
      'Real-time chat app using the MERN stack with AI support from Google Gemini. Used Redis and socket connections for smooth communication.',
    github: 'https://github.com/akpahari03/Chat-App',
    demo: '#',
    image: project2Image,
  },
  {
    title: 'Solana App Kit',
    stack: ['React.js', 'React Hooks', 'CSS Animations', 'Touch Event Handling'],
    description:
      'Developed a responsive web application for Solana App Kit using React.js with CSS Modules, implementing a component-based architecture featuring interactive elements, animations, and mobile-first design principles',
    github: 'https://github.com/akpahari03/solana-app-kit-frontend',
    demo: 'https://solana-app-kit-frontend.vercel.app/',
    image: project3Image, 
  },
  {
    title: 'Weather Application',
    stack: ['HTML', 'CSS', 'React.JS', 'OpenWeather API', 'GeoDB Cities API'],
    description:
      'Weather app built with React.js. Integrated OpenWeather and GeoDB APIs for real-time weather and location data.',
    github: 'https://github.com/akpahari03/Weather-App',
    demo: 'https://ayushkp-weather-app.vercel.app/',
    image: project4Image,
  }
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>
        <span className={styles.headingAccent}>Featured</span> Projects
      </h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setActiveProject(index)}
            onHoverEnd={() => setActiveProject(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage} 
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <div className={styles.stackContainer}>
                {project.stack.map((tech, i) => (
                  <span key={i} className={styles.stackItem}>{tech}</span>
                ))}
              </div>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.moreProjects}>
        <a href="https://github.com/akpahari03" target="_blank" rel="noopener noreferrer">
          View More Projects <FaChevronRight className={styles.arrow} />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;