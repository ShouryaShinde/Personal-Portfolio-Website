import React from "react";

function HighlightCard(props) {
  return (
    <div className={`card h-full ${props.width ?? "w-full"} ${props.borderGradient}`}>
      <div className="card2 h-full w-full">
        <div className="card-body flex flex-col h-full">

          {/* Top Section */}
          <div className="flex flex-row justify-between items-start gap-4">

            {/* Left side (Title + Text) */}
            <div className="flex flex-col flex-1">
              <h2 className={`card-title font-bold space-grotesk ${props.titleColor}`}>
                {props.title}
              </h2>

              <p
                className={`space-grotesk-300 ${props.textColor} whitespace-pre-line mt-2 text-base`}
              >
                {props.text}
              </p>
            </div>

            {/* Right side (Image) */}
            {props.src && (
              <div className="shrink-0">
                <img src={props.src} style={{ height: props.ht }} alt="icon" />
              </div>
            )}

          </div>

          {/* Badges */}
          <div className="card-actions justify-end mt-auto flex-wrap gap-2">
            {props.badge?.map((item, index) => (
              <div
                key={index}
                className={`badge badge-outline ${props.badgeStyle}`}
              >
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