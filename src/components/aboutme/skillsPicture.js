import React from "react";
import "../../CSS/aboutme/skillsPicture.css";
import selfi from "../../img/IMG_0428.jpeg";

function aboutme() {
  return (
    <div className="centerPhone" id="aboutMe">
      <div className="header">
        <h1> My Skills </h1>
      </div>
      <div className="flex">
        <div className="selfi">
          <img src={selfi} alt="picture of myself" />
        </div>
      </div>
    </div>
  );
}

export default aboutme;
