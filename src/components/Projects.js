import React from "react";
import SingleProject from "./SingleProject";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="tc f1">Projects</h1>
      <div className="projects">
        <SingleProject
          title="This is the "
          source="https://as2.ftcdn.net/v2/jpg/01/65/95/31/1000_F_165953143_sgnCcTjVefj03KPzwVCRCWORGHYJ5tan.jpg"
        />
        <SingleProject
          title="Project Title"
          source="https://as2.ftcdn.net/v2/jpg/01/65/95/31/1000_F_165953143_sgnCcTjVefj03KPzwVCRCWORGHYJ5tan.jpg"
        />
        <SingleProject
          title="Project Title"
          source="https://as2.ftcdn.net/v2/jpg/01/65/95/31/1000_F_165953143_sgnCcTjVefj03KPzwVCRCWORGHYJ5tan.jpg"
        />
        <SingleProject
          title="Project Title"
          source="https://as2.ftcdn.net/v2/jpg/01/65/95/31/1000_F_165953143_sgnCcTjVefj03KPzwVCRCWORGHYJ5tan.jpg"
        />
        <SingleProject
          title="Project Title"
          source="https://as2.ftcdn.net/v2/jpg/01/65/95/31/1000_F_165953143_sgnCcTjVefj03KPzwVCRCWORGHYJ5tan.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
