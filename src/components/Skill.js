import React from "react";
import "./Skill.css";

const Skill = ({ skillName }) => {
  return (
    <div className="skill">
      <label>{skillName}</label>
      <div className="w3-border progress-container">
        <div className="w3-black skill-progress"></div>
      </div>
    </div>
  );
};

export default Skill;
