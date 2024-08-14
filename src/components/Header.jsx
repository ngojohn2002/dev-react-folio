// Objective: Create a Header component that will display the name of the developer and the Navigation component. The Header component will be imported and rendered in the App component to provide a consistent layout and navigation for the user. The Header component will contain the name of the developer and the Navigation component that will display links to the different pages of the application. The Navigation component will be created in a separate file and imported into the Header component. 

// Import the React and Navigation component so that we can use them in our component. 
import React from "react";
import Navigation from "./Navigation";

// Define the Header component that will be rendered in the App component. 
function Header() {
  return (
    <header>
      <h1>Truong Ngo</h1>
      <Navigation />
    </header>
  );
}

// Export the Header component so that it can be imported and used in the App component. 
export default Header;
