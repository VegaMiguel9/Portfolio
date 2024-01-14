import React from "react";
import ProjectTitle from "../components/projects/projectTitle";
import ProjectOne from "../components/projects/projectOne";
import ProjectTwo from "../components/projects/projectTwo";
import ProjectThree from "../components/projects/projectThree";
import ProjectFour from "../components/projects/projectFour";
import "../CSS/projects/mainProjects.css";

function projects() {
  return (
    <div className="margin">
      <ProjectTitle />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
  );
}

export default projects;
