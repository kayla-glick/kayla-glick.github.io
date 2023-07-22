import React from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import GreetingSection from './components/sections/GreetingSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/experience/';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

import './App.scss';

function App() {
  return (
    <>
      <Cover />
      <Header />
      <main>
        <GreetingSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
