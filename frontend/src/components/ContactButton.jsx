import React from "react" ;

function ContactButton() {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className='absolute top-4 right-4'>
      <button className="btn btn-ghost  text-blue-300 text-lg text-shadow-none space-grotesk" onClick= {handleClick}>
        Contact
      </button>
    </div>
  );
}

export default ContactButton ;