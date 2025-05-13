// Updated Home.jsx for Dark Mode Only

import React from 'react';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import CodingProfiles from '../components/CodingProfiles';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Dock from '../components/Dock';

const Home = () => {
  return (
    <div className="dark-theme">
      <Dock />
      <Hero />
      <ProjectSection />
      <SkillsSection />
      <CodingProfiles />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;