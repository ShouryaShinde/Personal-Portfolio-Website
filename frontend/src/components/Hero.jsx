import React from 'react' ;
import HeroContent from './HeroContent';
import GridBackground from './GridBackground';
import Terminal from './HeroImage';
import ContactButton from './ContactButton';

function Hero() {
  return (
    <div >
      <div className="hero bg-black min-h-screen relative overflow-hidden">
        <GridBackground />
        <ContactButton />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Terminal />
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero ;