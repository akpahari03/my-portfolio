// Home.jsx with Enhanced Components

import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import CodingProfiles from '../components/CodingProfiles';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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