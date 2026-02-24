import React from "react";
import AvatarSection from './AvatarSection';
import LinkIcon from './LinkIcon' ;


let ptext = "Information Technology student at Dr. D. Y. Patil Institute of Technology with strong expertise in DSA using C++ and a passion for competitive programming. I build efficient, scalable, and user-focused web applications .";


function HeroContent() {
  return (
    <div className="ml-18">
      <AvatarSection />
      <h1 className="text-5xl font-bold pb-4 gradient-text">Shourya Shinde</h1>
      <h1 className="text-1xl font-bold text-gray-300">
        Full-Stack Developer & Competitive Programmer
      </h1>
      <p className="pt-5 pb-6 w-4/5 text-gray-400 anton-regular">{ptext}</p>
      <button className="btn btn-primary btn-flow text-gray-300"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >Resume</button>
      <div className="mt-7">
        <div className="flex gap-5 text-2xl">
          <LinkIcon 
            href = "https://github.com/ShouryaShinde" 
            icon = "Github"
          />
          <LinkIcon 
            href = "https://linkedin.com/in/shourya-shinde/" 
            icon = "LinkedIn"
          />
          <LinkIcon 
            href = "https://mailto:shindeshauryaanil@gmail.com" 
            icon = "Gmail"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroContent ;
