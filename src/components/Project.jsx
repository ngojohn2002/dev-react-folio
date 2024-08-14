// Objective: Create a Project component that will be used to display the project information in the Portfolio component. The Project component will display the project image, title, and a link to view the project. The Project component will be imported and rendered in the Portfolio component to display the different projects in the portfolio. 

// Importing React to use JSX in the component and define the Project component. 
import React from "react";

// Define the Project component that will be rendered in the Portfolio component. 
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

// Export the Project component so that it can be imported and used in the Portfolio component. 
export default Project;
