import React from "react" ;

function ContactButton() {
  return (
    <div className='absolute top-4 right-4'>
      <button className="btn btn-ghost  text-red-700 text-lg text-shadow-none anton-regular"
      onClick={() => window.open('/resume.pdf', '_blank')}
      >
        Contact
      </button>
    </div>
  );
}

export default ContactButton ;