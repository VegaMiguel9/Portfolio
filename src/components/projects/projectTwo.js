import React from "react";
import "../../CSS/projects/project.css";
import passwordGen from "../../img/passwordGen.jpg";

function projectTwo() {
  const passwordGenWindow = () => {
    window.open("https://vegamiguel9.github.io/RandomPasswordGen/", "._blank");
  };

  return (
    <div className="">
      <div className="projectFlex">
        <div className="projectText">
          <p>
            This project uses my skills with HTML, CSS, and JavaScript to create
            a website that can generate a password at random with different
            specifications that the user needs.
          </p>
          <button onClick={passwordGenWindow}>View Project</button>
        </div>
        <div className="projectImg">
          <img src={passwordGen} alt="Random password generator website" />
        </div>
      </div>
    </div>
  );
}

export default projectTwo;
