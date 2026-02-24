import React from 'react' ;
import HeroBackground from '../assets/HeroBackground.png' ;
import HeroContent from './HeroContent';
import HeroFloatImage from './HeroImage';
import ContactButton from './ContactButton';

function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen relative overflow-hidden">
        <img
          src={HeroBackground}
          alt="Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
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