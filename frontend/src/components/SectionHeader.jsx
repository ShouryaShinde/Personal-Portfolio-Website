import React from "react";

function SectionHeader(props) {
  return (
    <div className="flex mt-10 w-full gap-5">
      <div>
        <h1 className="text-3xl font-bold pb-4 ml-7 w-auto">
          {props.title}
        </h1>
      </div>
      <div className="divider w-9/12"></div>
    </div>
  );
}

export default SectionHeader;
