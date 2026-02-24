import React from "react";
import HighlightCard from "./HighlightCard";
import SectionHeader from "./SectionHeader";

function Highlights() {
  return (
    <section id = "CareerHighlights">
        <div className="flex flex-col gap-5">
          <SectionHeader
            title = "Career Highlights"
          />
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
    </section>
  );
}

export default Highlights;
