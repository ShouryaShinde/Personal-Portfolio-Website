import React from "react";
import AvatarImage from '../assets/AvatarImage.jpeg' ;

function AvatarSection() {
  return (
    <div className="flex items-start gap-4">
      <div className="avatar avatar-online">
        <div
          className="w-20 rounded-full mb-3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AvatarImage})` }}
        ></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="badge badge-outline badge-success rounded-3xl">
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <div className="ml-1 text-gray-400">Pune, India</div>
      </div>
    </div>
  );
}

export default AvatarSection;
