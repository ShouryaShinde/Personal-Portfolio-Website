import React from "react" ;
import Techstackbadges from "./TechStackbadges";

function Techstackcard() {
  return (
    <div className = "w-11/12 m-10 techstackcard p-10 ">
      <div className = "beam" />
      <div className = "flex flex-col gap-1 space-grotesk">
        <h1 className = "text-3xl">My Tech Stack</h1>
        <h2 className="text-xl text-gray-700"> Full Stack Developer</h2>
      </div>
      <hr />
      <div className = "space-grotesk">
        <div className="my-5">
          <p className = "text-lg mb-3 mt-3 text-cyan-400">FrontEnd</p>
          <div className = "flex flex-row gap-1">
            <Techstackbadges 
              src="html"
              color="bg-cyan-400/10 text-cyan-400"
              name="HTML5"
            />
            <Techstackbadges 
              src="css"
              color="bg-cyan-400/10 text-cyan-400"
              name="CSS"
            />
            <Techstackbadges 
              src="javascript"
              color="bg-cyan-400/10 text-cyan-400"
              name="JavaScript"
            />
            <Techstackbadges 
              src="react"
              color="bg-cyan-400/10 text-cyan-400"
              name="React"
            />
            <Techstackbadges 
              src="bootstrap"
              color="bg-cyan-400/10 text-cyan-400"
              name="Bootstrap"
            />
            <Techstackbadges 
              src="tailwind"
              color="bg-cyan-400/10 text-cyan-400"
              name="Tailwind"
            />
            <Techstackbadges 
              src="jquery"
              color="bg-cyan-400/10 text-cyan-400"
              name="JQuery"
            />
            <Techstackbadges 
              src="materialui"
              color="bg-cyan-400/10 text-cyan-400"
              name="MaterialUI"
            />
          </div>
        </div>
        <div className="my-5">
          <p className = "text-lg mb-3 mt-3  text-pink-400">BackEnd</p>
          <div className = "flex flex-row gap-1">
            <Techstackbadges 
              src="nodejs"
              color="bg-pink-400/10 text-pink-400"
              name="NodeJS"
            />
            <Techstackbadges 
              src="express"
              color="bg-pink-400/10 text-pink-400"
              name="Express"
            />
          </div>
        </div>
        <div className="my-5">
          <p className = "text-lg mb-3 mt-3 text-green-400">Databases</p>
          <div className = "flex flex-row gap-1">
            <Techstackbadges 
              src="mysql"
              color="bg-green-400/10 text-green-400"
              name="MySQL"
            />
            <Techstackbadges 
              src="postgres"
              color="bg-green-400/10 text-green-400"
              name="PostgreSQL"
            />
            <Techstackbadges 
              src="mongodb"
              color="bg-green-400/10 text-green-400"
              name="MongoDB"
            />
          </div>
        </div>
        <div className="my-5">
          <p className = "text-lg mb-3 mt-3 text-red-400">Languages</p>
          <div className = "flex flex-row gap-1">
            <Techstackbadges 
              src="c"
              color="bg-red-400/10 text-red-400"
              name="C"
            />
            <Techstackbadges 
              src="cpp"
              color="bg-red-400/10 text-red-400"
              name="C++"
            />
            <Techstackbadges 
              src="java"
              color="bg-red-400/10 text-red-400"
              name="Java"
            />
            <Techstackbadges 
              src="python"
              color="bg-red-400/10 text-red-400"
              name="Python"
            />
          </div>
        </div>
        <div className="my-5">
          <p className = "text-lg mb-3 mt-3 text-orange-400">Tools & Workflow</p>
          <div className = "flex flex-row gap-1">
            <Techstackbadges 
              src="github"
              color="bg-orange-400/10 text-orange-400"
              name="Github"
            />
            <Techstackbadges 
              src="git"
              color="bg-orange-400/10 text-orange-400"
              name="Git"
            />
            <Techstackbadges 
              src="vscode"
              color="bg-orange-400/10 text-orange-400"
              name="VSCode"
            />
            <Techstackbadges 
              src="postman"
              color="bg-orange-400/10 text-orange-400"
              name="Postman"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Techstackcard ;