import React from "react" ;

function ContactButton() {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className='absolute top-4 right-4'>
      <button className="btn btn-ghost  text-red-700 text-lg text-shadow-none anton-regular" onClick= {handleClick}>
        Contact
      </button>
    </div>
  );
}

export default ContactButton ;