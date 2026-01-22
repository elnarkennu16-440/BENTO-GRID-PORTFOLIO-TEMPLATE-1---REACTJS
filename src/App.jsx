import React from 'react';
import HeroV2 from './components/HeroV2.jsx';
import FloatingNav from './components/FloatingNav.jsx';
import BentoProjects from './components/BentoProjects.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className='bg-slate-900 min-h-screen selection:bg-cyan-500 selection:text-white'>
      <HeroV2 />
      <AboutSection />
      <BentoProjects />
      <ContactSection />
      <FloatingNav />
    </div>
  )
}

export default App;