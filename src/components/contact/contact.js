import React from "react";
import "../../CSS/contact/contact.css";

function contact() {
  const contactWindow = () => {
    window.open("vegamiguelr09@gmail.com", "_blank");
  };

  return (
    <div className="contactFlex" id="contactMe">
      <div>
        <h1 className="aboutMeHeader">Lets Connect!</h1>
      </div>
      <div className="contactMeButton">
        <a
          href="mailto:vegamiguelr09@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Email Me</button>
        </a>
      </div>
    </div>
  );
}

export default contact;
