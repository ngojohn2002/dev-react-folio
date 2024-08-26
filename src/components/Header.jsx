// Header.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <div className="header-content">
        {/* Make name a clickable link to the About page */}
        <Link to="/" className="name-link">
          <h1>Truong Ngo</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
