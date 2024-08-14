// Objective: Create a Portfolio page that will display a list of projects. The Portfolio page will import the Project component and use it to display the project information. The Portfolio page will contain an array of project objects that will be passed to the Project component as props. The Project component will display the project image, title, and a link to view the project. The Portfolio page will map over the array of project objects and render a Project component for each project. The Portfolio page will be imported and rendered in the App component to display the list of projects in the portfolio. 

// Import the React package and the Project component so that we can use them in our component. 
import React from "react";
import Project from "../components/Project";

// Define the Portfolio component that will be rendered in the App component. 
function Portfolio() {
  // Define an array of project objects that contain the project title, image, and link. 
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

// Export the Portfolio component so that it can be imported and used in the App component. 
export default Portfolio;
