import React from "react";

function HighlightCard(props) {
  return (
    <div className= {`card h-full ${props.borderGradient} `}>
      <div className="card2 h-full max-w-lg">
        <div className="card-body flex flex-col h-full">
          <div className="flex flex-row gap-5 items-center">
            <h2 className={`card-title font-bold ${props.titleColor}`}>
              {props.title}
            </h2>
          </div>
          <p className={`anton-regular ${props.textColor} whitespace-pre-line`}>
            {props.text}
          </p>

          <div className="card-actions justify-end mt-auto flex-wrap gap-2">
            {props.badge?.map((item, index) => (
              <div key={index} className={`badge badge-outline ${props.badgeStyle}`}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default HighlightCard;