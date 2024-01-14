import React from "react";
import "../CSS/aboutme/aboutMe.css";
import SkillsPicture from "../components/aboutme/skillsPicture";
import SkillList from "../components/aboutme/skillsList";
import Bio from "../components/aboutme/bio";

function aboutMe() {
  return (
    <div className="AboutMemargins">
      <SkillsPicture />
      <div className="flexAboutMe">
        <SkillList />
        <Bio />
      </div>
    </div>
  );
}

export default aboutMe;
