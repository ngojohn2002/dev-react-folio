// Resume.jsx

import React from "react";

function Resume() {
  return (
    <section>
      <h2>My Resume</h2>
      <p>
        Below, you can find a downloadable version of my resume. It highlights
        my skills, experience, and projects I've worked on. Feel free to
        download it and learn more about my professional background.
      </p>
      <a
        href="/Truong-Ngo-Full-Stack-Developer-Resume.pdf"
        download
        className="download-button"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
