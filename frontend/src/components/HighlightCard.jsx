import React from "react";
import CollegeLogo from "../assets/CollegeLogo.png";

function HighlightCard(props) {
  return (
    <div className={`card bg-base-100 w-auto shadow-sm bg-linear-to-r ${props.gradient1} ${props.gradient2} ${props.textColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
      <div className="card-body ">
        <div className= "flex flex-row gap-5">
          <h2 className={`card-title font-bold ${props.titleColor}`}>{props.title}</h2>
          <img src = {props.src} className = {`${props.height} w-auto`}/>
        </div>
        {
          props.secondTitle ?
              (<div className="badge badge-outline">
                {props.secondTitle}
              </div>) : null 
        }
        <p className="anton-regular">{props.text}</p>
        <div className="card-actions justify-end mt-5">
          {props.badge.map((item, index) => (
            <div key={index} className="badge badge-outline badge-info">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
