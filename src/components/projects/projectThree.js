import React from "react";
import "../../CSS/projects/project.css";
import movieQuote from "../../img/movieQuotes.jpg";

function projectThree() {
  const movieQuoteWindow = () => {
    window.open("https://cmizelle10.github.io/Project_1/", "_blank");
  };
  return (
    <div className="">
      <div className="projectFlex">
        <div className="projectText">
          <p>
            Using HTML, CSS, JavaScript, and web APIs myself and four other
            classmates made a website that can generate a movie and some
            information from just typing a quote from the specifice movie. My
            job in this project was the HTML, and CSS.
          </p>
          <button onClick={movieQuoteWindow}>View project</button>
        </div>
        <div className="projectImg">
          <img src={movieQuote} alt="Movie quote website" />
        </div>
      </div>
    </div>
  );
}

export default projectThree;
