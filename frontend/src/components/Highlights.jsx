import React from "react";
import { useState, useEffect } from "react";
import HighlightCard from "../assets/HighlightCard";
import SectionHeader from "../assets/SectionHeader";
import GithubIcon from "../../public/images/GithubIcon.png";
import LeetcodeIcon from "../../public/images/LeetcodeLogo.png";
import BinarybrainsIcon from "../../public/images/BinarybrainsLogo.png" ;

function Highlights() {
  const [stats, setStats] = useState(null);
  const [PRcount , setPRcount] = useState(null) ;
  const [contibutions, setContributions] = useState(null);
  const [leetstats, setleetStats] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ShouryaShinde")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/search/issues?q=is:pr+author:ShouryaShinde")
      .then((res) => res.json())
      .then((data) => setPRcount(data.total_count)) ;
  } , []) ;

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/ShouryaShinde")
      .then((res) => res.json())
      .then((data) => {
        console.log(data) ;
        const totalContributions = Object.values(data.total).reduce(
          (sum, year) => sum + year,
          0,
        );

        setContributions(totalContributions);
      });
  }, []);

  useEffect(() => {
  fetch("https://leetcode-stats-api.vercel.app/ShouryaShinde")
    .then(res => res.json())
    .then(data => {
      setleetStats({
        total: data.totalSolved,
        easy: data.easySolved,
        medium: data.mediumSolved,
        hard: data.hardSolved
      });
    });
}, []);

  return (
    <section id="CareerHighlights">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Career Highlights" />
        <div className="flex gap-10 m-5 justify-evenly">
          <div className="basis-1/2">
            <HighlightCard
            borderGradient="bg-gradient-to-b from-black via-indigo-600 to-indigo-400"
            textColor="text-white"
            titleColor="text-indigo-400"
            width = "w-1/2"
            title="Tech Stack"
            src={null}
            text="Experience working with modern web technologies to build responsive,scalable applications and interactive user interfaces."
            badge={[
              "React",
              "NodeJS",
              "Express",
              "MongoDB",
              "TailwindCSS",
              "Git",
            ]}
            badgeStyle="badge-primary"
          />
          </div>
          <div className="basis-1/2">
            <HighlightCard
            borderGradient="bg-gradient-to-b from-black from-black via-red-600 to-yellow-400"
            textColor="text-white"
            titleColor="text-orange-400"
            width = "w-1/2"
            title="BinaryBrains — Web Dev Co-Lead"
            src={BinarybrainsIcon}
            ht="100px"
            text="Leading the Web Development team at Binary Brains Club, DIT. 
                Organizing technical workshops, mentoring juniors, and 
                developing web platforms for club initiatives and events."
            badge={[
              "Leadership" , "Web Development" , "Mentorship" , "Technical Events"
            ]}
            badgeStyle="badge-warning"
          />
          </div>
        </div>
        <div className="flex gap-10 mt-0 m-5 justify-evenly">
          <div className = "basis-1/4">
            <HighlightCard
              borderGradient="bg-gradient-to-b from-black via-purple-900 to-pink-400"
              textColor="text-white"
              width = "w-1/3"
              titleColor="text-pink-400"
              title="Development Stats"
              src={GithubIcon}
              ht="50px"
              text={`Contributions : ${contibutions ?? 0}\nRepositories : ${stats?.public_repos ?? 0}\nPR Count : ${PRcount ?? 0}\nFollowers : ${stats?.followers ?? 0}`}
              badge={["Github", "FullStack"]}
              badgeStyle="badge-secondary"
            />
          </div>
          <div className = "basis-1/4">
            <HighlightCard
              borderGradient="bg-gradient-to-b from-black via-green-700 to-green-400"
              textColor="text-white"
              titleColor="text-green-400"
              width = "w-1/3"
              title="Problem Solving Stats"
              src={LeetcodeIcon}
              ht="50px"
              text={`Total : ${leetstats?.total ?? 0}\nEasy: ${leetstats?.easy ?? 0}\nMedium: ${leetstats?.medium ?? 0}\nHard: ${leetstats?.hard ?? 0}`}
              badge={["C++", "DSA" , "Competetive"]}
              badgeStyle="badge-success"
            />
          </div>
          <div className = "basis-1/2">
            <HighlightCard
              borderGradient="bg-gradient-to-b from-black via-blue-400 to-cyan-300"
              textColor="text-white"
              width = "w-1/3"
              titleColor="text-cyan-400"
              title="Dr. D. Y. Patil Institute of Technology, Pimpri"
              src={null}
              text="Information Technology • 2024 - 2028
                    Pursuing a B.E. in Information Technology at Dr. D. Y. Patil Institute of Technology, Pune with a strong academic record."
              badge={["Pune, India", "SPPU", "CGPA : 9.45"]}
              badgeStyle="badge-info"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
