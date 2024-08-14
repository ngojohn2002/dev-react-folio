import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/image",
      link: "https://project1.com",
    },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
