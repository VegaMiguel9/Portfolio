import React from "react";
import "../../CSS/projects/project.css";
import mernBook from "../../img/mernBookSearch.jpg";

function projectOne() {
  const mernBookWindow = () => {
    window.open("https://vegamiguel9.github.io/Mern-BookSearch/", "_blank");
  };

  return (
    <div className="">
      <div className="projectFlex">
        <div className="projectText">
          <p>
            This was a project from the Chapel Hill bootcamp, you are able to
            search for book titles and receive different books associated with
            the book. This project use the MERN stack structure.
          </p>
          <button onClick={mernBookWindow}>View Project</button>
        </div>
        <div className="projectImg">
          <img src={mernBook} alt="MERN stack book search website" />
        </div>
      </div>
    </div>
  );
}

export default projectOne;
