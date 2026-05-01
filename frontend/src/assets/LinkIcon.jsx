import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";


function LinkIcon(props) {

  function Icon(i) {
    if(i === "Github") {
      return(
        <FiGithub />
      );
    } else if (i === "LinkedIn") {
      return(
        <FaLinkedinIn />
      );
    } else if (i === "Gmail") {
      return(
        <SiGmail />
      );
    }
  }

  return (
    <a
      className="hover:text-info"
      onClick={() => window.open(`${props.href}`)}
    >
      {Icon(props.icon)}
    </a>
  );
}

export default LinkIcon;
