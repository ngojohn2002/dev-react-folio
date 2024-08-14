// Objective: Create a new file called About.jsx in the pages directory. In the About.jsx file, create a functional component called About that returns a section element with an h2 element that contains the text "About Me" and a p element that contains information about the developer. Export the About component so that it can be imported and used in the App component. 

// Import the React and Link components from the react-router-dom package so that we can use them in our component. 
import React from "react";

// Define the About component that will be rendered in the App component. 
function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>This is where your bio goes...</p>
    </section>
  );
}

// Export the About component so that it can be imported and used in the App component. 
export default About;
