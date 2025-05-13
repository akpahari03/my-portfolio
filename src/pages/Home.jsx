// Updated Home.jsx with Dock Navigation

import React, { useContext } from 'react';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import CodingProfiles from '../components/CodingProfiles';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Dock from '../components/Dock';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Dock toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <ProjectSection />
      <SkillsSection />
      <CodingProfiles />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;