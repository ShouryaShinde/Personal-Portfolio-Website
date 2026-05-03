import React from 'react' ;
import Hero from '../components/Hero.jsx' ;
import Highlights from '../components/Highlights.jsx';
import CPStats from '../components/CPStats.jsx';
import SectionHeader from "../assets/SectionHeader.jsx";
import Techstack from "../components/Techstack.jsx" ;

function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12">
        <Hero />
        <SectionHeader title="Career Highlights" />
        <Highlights />
        <SectionHeader title="Tech Stack" />
        <Techstack />
        <SectionHeader title="Competitive Programming Stats"/>
        <CPStats />
      </div>
    </div>
  );
}

export default Home ;