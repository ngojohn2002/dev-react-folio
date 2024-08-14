import React from "react";

function Project({ project }) {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default Project;
