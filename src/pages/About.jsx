// Objective: Create a new file called About.jsx in the pages directory. In the About.jsx file, create a functional component called About that returns a section element with an h2 element that contains the text "About Me" and a p element that contains information about the developer. Export the About component so that it can be imported and used in the App component. 

// Import the React and Link components from the react-router-dom package so that we can use them in our component. 
import React from "react";

// Define the About component that will be rendered in the App component. 
function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Hello! I’m Truong Ngo, a passionate and dedicated full-stack software
        developer with a keen interest in creating impactful digital solutions.
        Currently, I am enhancing my skills through the UCI Bootcamp, where I’m
        diving deep into modern web development technologies and frameworks.
      </p>

      <h3>My Journey</h3>
      <p>
        With a solid foundation in full-stack development, I have honed my
        abilities in various programming languages and tools, including
        JavaScript, React, Node.js, Express.js, and SQL. My journey into
        software development is driven by a strong desire to build accessible,
        user-friendly applications. I’m particularly motivated to create
        solutions that cater to diverse user needs, including those with low
        vision and visual impairments, reflecting my personal experience and
        commitment to inclusivity.
      </p>

      <h3>What I Do</h3>
      <p>
        In my projects, I aim to combine technical proficiency with creativity,
        ensuring each application is not only functional but also engaging and
        easy to navigate. My work spans from front-end design to back-end
        architecture, showcasing a full spectrum of skills from crafting
        intuitive user interfaces to managing robust server-side operations.
      </p>

      <h3>Why I Code</h3>
      <p>
        Coding for me is more than just writing lines of code; it’s about
        solving problems and making technology work for people. I believe in the
        power of technology to improve lives and connect communities, and I
        strive to contribute to this goal with every project I undertake.
      </p>

      <h3>Let’s Connect!</h3>
      <p>
        I’m always open to new opportunities and collaborations. If you’re
        interested in discussing potential projects or just want to chat about
        tech and development, feel free to reach out!
      </p>
    </section>
  );
}

// Export the About component so that it can be imported and used in the App component. 
export default About;
