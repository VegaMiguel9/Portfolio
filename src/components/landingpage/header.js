import React from "react";
import "../../CSS/landingpage/header.css";
import { BrowersRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function header() {
  return (
    <div className="margin">
      <div className="buttonFlexHeader">
        <div className="stickyNav">
          <a href="#aboutMe">
            <button className="buttonStyles"> About Me </button>
          </a>
        </div>
        <div className="stickyNav">
          <a href="#projects">
            <button className="buttonStyles"> Projects </button>
          </a>
        </div>
        <div className="stickyNav">
          <a href="#contactMe">
            <button className="buttonStyles"> Contact Me </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;
