import React from "react";
import {useState , useEffect} from 'react' ;
import HighlightCard from "./HighlightCard";
import SectionHeader from "./SectionHeader";
import GithubIcon from "../assets/GithubIcon.png" ;

function Highlights() {
  const [stats , setStats] = useState(null) ;

  const [contibutions , setContributions] = useState(null) ;

  useEffect(() => {
    fetch("https://api.github.com/users/ShouryaShinde")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  useEffect(() => {
  fetch("https://github-contributions-api.jogruber.de/v4/ShouryaShinde")
    .then(res => res.json())
    .then(data => {
      const totalContributions = Object.values(data.total)
        .reduce((sum, year) => sum + year, 0);

      setContributions(totalContributions);
    });
}, []);

  return (
    <section id = "CareerHighlights">
        <div className="flex flex-col gap-5">
          <SectionHeader
            title = "Career Highlights"
          />
        <div className="flex gap-10 m-7">
          <HighlightCard
            borderGradient="bg-gradient-to-b from-black via-blue-400 to-cyan-300"
            textColor = "text-white"
            titleColor = "text-cyan-400"
            title = "Dr. D. Y. Patil Institute of Technology, Pimpri"
            secondTitle = {null}
            text = "Information Technology • 2024 - 2028"
            badge = {["Pune, India" , "SPPU" , "BE", "CGPA : 9.45"]} 
            badgeStyle = "badge-info"
          />
          <HighlightCard
            borderGradient="bg-gradient-to-b from-black via-red-600 to-yellow-400"
            textColor = "text-white"
            titleColor = "text-yellow-400"
            title = "Tech Stack"
            text = "Experience working with modern web technologies to build responsive,scalable applications and interactive user interfaces."
            badge = {["React" , "NodeJS" , "Express" ,"MongoDB" , "TailwindCSS" , "Git"]} 
            badgeStyle = "badge-warning"
          />
          <HighlightCard
            borderGradient="bg-gradient-to-b from-black via-purple-900 to-pink-400"
            textColor = "text-white"
            titleColor = "text-pink-400"
            title = "Development Stats"
            text ={`Contributions : ${contibutions ?? 0}\nRepositories : ${stats?.public_repos ?? 0}\nFollowers : ${stats?.followers ?? 0}`}
            badge = {["JavaScript" , "HTML" , "CSS" ]} 
            badgeStyle = "badge-secondary"
          />
        </div>
      </div>
    </section>
  );
}

export default Highlights;
