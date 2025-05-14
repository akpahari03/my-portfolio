// Updated Home.jsx with added BurgerMenu
import React from 'react';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import CodingProfiles from '../components/CodingProfiles';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Dock from '../components/Dock';
import BurgerMenu from '../components/BurgerMenu'; // Import the BurgerMenu component

const Home = () => {
  return (
    <div className="dark-theme">
      <Dock /> {/* Regular dock for desktop */}
      <BurgerMenu /> {/* New burger menu for mobile */}
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