import React from "react";
import "./Projects.css";

const SingleProject = ({ title, source }) => {
  return (
    <div className="single-project grow">
      <img className="project-image" alt="Project" src={source} />
      <p className="project-title">{title}</p>
    </div>
  );
};

export default SingleProject;
