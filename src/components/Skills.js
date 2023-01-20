import React from "react";
import Skill from "./Skill";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h1 className="tc">Skills</h1>
      <div className="skills-container">
        <Skill skillName={"REACT"} />
        <Skill skillName={"NODEJS"} />
        <Skill skillName={"MONGODB"} />
        <Skill skillName={"PYTHON"} />
        <Skill skillName={"BLOCKCHAIN"} />
      </div>
    </div>
  );
};

export default Skills;
