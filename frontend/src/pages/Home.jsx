import React from 'react' ;
import Hero from '../components/Hero.jsx' ;
import Highlights from '../components/Highlights.jsx';
import CPStats from '../components/CPStats.jsx';
import SectionHeader from "../assets/SectionHeader.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <SectionHeader title="Career Highlights" />
      <Highlights />
      <SectionHeader title="Competitive Programming Stats"/>
      <CPStats />
    </div>
  );
}

export default Home ;