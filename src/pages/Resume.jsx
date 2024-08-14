// Objective: Create a Resume component that will be used to display a resume and provide a link to download the resume. The Resume component will be imported and rendered in the App component to display the resume information. The Resume component will contain a link to download the resume file. 

// Import the React package so that we can use the React library in our component. 
import React from "react";

// Define the Resume component that will be rendered in the App component. 
function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>
        Download Resume
      </a>
    </section>
  );
}

// Export the Resume component so that it can be imported and used in the App component. 
export default Resume;
