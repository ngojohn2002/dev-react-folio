// Objective: Create a Navigation component that will be used to navigate between the different pages of the application. The Navigation component will contain links to the About, Portfolio, Contact, and Resume pages. The Navigation component will be imported and rendered in the Header component to provide a consistent layout and navigation for the user.

// Import the React and NavLink components from the react-router-dom package so that we can use them in our component.
import React from "react";
import { NavLink } from "react-router-dom";

// Define the Navigation component that will be rendered in the Header component. 
function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navigation component so that it can be imported and used in the Header component. 
export default Navigation;
