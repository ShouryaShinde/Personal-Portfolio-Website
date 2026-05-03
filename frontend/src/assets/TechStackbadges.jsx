import React from "react" ;

function Techstackbadges(props) {
  return (
    <div className={`mx-2 gap-2 ${props.color} flex flex-row badge-tech`}>
      <img src={`https://skillicons.dev/icons?i=${props.src}`} />
      <p className="text-md space-grotesk">{props.name}</p>
    </div>
  )
};

export default Techstackbadges ;