import React from 'react' ;
import HeroBackground from '../assets/HeroBackground.png' ;
import HeroContent from './HeroContent';
import HeroFloatImage from './HeroImage';
import ContactButton from './ContactButton';

function Hero() {
  return (
    <div>
      <div 
      className="hero bg-base-200 min-h-screen bg-cover bg-center overflow-hidden"
      style = {{ backgroundImage: `url(${HeroBackground})` }}
      >
        <ContactButton />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <HeroFloatImage />
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero ;