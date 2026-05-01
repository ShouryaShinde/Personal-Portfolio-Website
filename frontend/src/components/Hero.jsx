import React from 'react' ;
import HeroContent from '../assets/HeroContent';
import GridBackground from '../assets/GridBackground';
import GithubGrid from '../assets/GithubGrid';
import ContactButton from '../assets/ContactButton';

function Hero() {
  return (
    <div >
      <div className="hero bg-black min-h-screen relative overflow-hidden">
        <GridBackground />
        <ContactButton />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <GithubGrid />
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero ;