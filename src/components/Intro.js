import React from "react";
import Name from "./Name";
import Tags from "./Tags";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <Name />
      <Tags />
    </div>
  );
};

export default Intro;
