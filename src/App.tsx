import Cover from './components/Cover';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import GreetingSection from './components/sections/GreetingSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/experience/';
import PortfolioSection from './components/sections/portfolio/';
import ContactSection from './components/sections/ContactSection';

import './App.scss';

function App() {
  return (
    <>
      <Cover />
      <Header />
      <MobileNavigation />
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
