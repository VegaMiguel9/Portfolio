import React from "react";
import "../CSS/landingpage/landingPage.css";
import Header from "../components/landingpage/header";
import Landing from "../components/landingpage/landingContext";

function landingPage() {
  return (
    <div className="landingPage">
      <Header />
      <Landing />
    </div>
  );
}

export default landingPage;
