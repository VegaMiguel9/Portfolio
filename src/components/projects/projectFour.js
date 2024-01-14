import React from "react";
import "../../CSS/projects/project.css";
import dayScheduler from "../../img/scheduler.jpg";

function projectFour() {
  const daySchedulerWindow = () => {
    window.open(
      "https://vegamiguel9.github.io/WorkDaySchedule-API-/",
      "_blank"
    );
  };

  return (
    <div className="">
      <div className="projectFlex">
        <div className="projectText">
          <p>
            This is a workday scheduler that use HTML, CSS, and JavaScript to be
            able to save different things that you have put into your schedule.
            The color of the scheduler also changes as the day pass by. This is
            done with using moment.js
          </p>
          <button onClick={daySchedulerWindow}>View Project</button>
        </div>
        <div className="projectImg">
          <img src={dayScheduler} alt="Workday Scheduler website" />
        </div>
      </div>
    </div>
  );
}

export default projectFour;
