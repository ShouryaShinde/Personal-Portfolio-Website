import React from "react";

function BadgesDisplay({ badges }) {
  if (!badges || badges.length === 0)
    return <p className="text-gray-400 text-sm">No badges yet</p>;

  return (
    <div className="flex flex-col gap-3">
      <p className="space-grotesk text-xl text-gray-400">Badges</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={badge.medal?.config?.iconGif || badge.icon}
              alt={badge.displayName}
              className="h-16 w-16 object-contain"
            />
            <span className="text-xs text-gray-400 text-center w-16 truncate">
              {badge.displayName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BadgesDisplay;