// This file will contain the Footer component. The Footer component will be responsible for rendering the footer of the application. The footer will contain links to the developer's GitHub and LinkedIn profiles. The Footer component will be imported and rendered in the App component to provide a consistent layout and navigation for the user. 

// Import the React and ReactDOM libraries so that we can use them in our component. 
import React from "react";

// Define the Footer component that will be rendered in the App component. 
function Footer() {
  return (
    <footer>
      <a href="https://github.com/ngojohn2002">GitHub</a>
      <a href="https://www.linkedin.com/in/yourusername/">LinkedIn</a>
      <p>&copy; 2024 Truong Ngo. All rights reserved.</p>
    </footer>
  );
}

// Export the Footer component so that it can be imported and used in the App component. 
export default Footer;
