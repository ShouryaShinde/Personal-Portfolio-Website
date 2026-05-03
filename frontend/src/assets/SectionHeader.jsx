import React from "react";

function SectionHeader(props) {
  return (
    <div className="flex items-center justify-center mt-10 w-full mx-auto gap-5">
      <h1 className="text-3xl font-bold ml-7 whitespace-nowrap space-grotesk">
        {props.title}
      </h1>

      <div className="grow h-px bg-gray-400 mr-5"></div>
    </div>
  );
}

export default SectionHeader;