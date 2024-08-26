// Footer.jsx

import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Truong Ngo. All rights reserved.</p>
        <div>
          <a
            href="https://github.com/ngojohn2002"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/GitHub-black?style=flat-square&logo=github"
              alt="GitHub Badge"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin"
              alt="LinkedIn Badge"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
