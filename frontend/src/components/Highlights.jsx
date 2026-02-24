import React from "react";
import HighlightCard from "./HighlightCard";

function Highlights() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex mt-10 w-full gap-5">
        <div>
          <h1 className="text-3xl font-bold pb-4 ml-7 w-auto">
            Career Highlights
          </h1>
        </div>
        <div className="divider w-9/12"></div>
      </div>
      <div className="flex gap-10 m-7">
        <HighlightCard
          gradient1 = "from-gray-900"
          gradient2 = "to-gray-950"
          textColor = "white"
          titleColor = "text-red-600"
          src = {null}
          height = "h-0"
          title = "Dr. D. Y. Patil Institute of Technology, Pimpri"
          secondTitle = {null}
          text = "Information Technology • 2024 - 2028"
          badge = {["Pune, India" , "SPPU" , "BE", "CGPA : 9.45"]} 
        />
      </div>
    </div>
  );
}

export default Highlights;
