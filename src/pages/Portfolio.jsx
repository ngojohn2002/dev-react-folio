// src/pages/Portfolio.jsx

import React from "react";

// Sample project data (Replace this with your actual data)
const projects = [
  {
    id: 1,
    title: "Reactfolio",
    description:
      "A React-based portfolio site showcasing personal projects and skills. Deployed on Netlify, featuring a single-page application with sections for About Me, Portfolio, Contact, and Resume.",
    image: "/images/20-React-dev-react-folio.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/dev-react-folio", // Replace with actual project link (Render)
  },
  {
    id: 2,
    title: "J.A.T.E. (Just Another Text Editor)",
    description:
      "J.A.T.E. is a Progressive Web Application (PWA) that allows you to create notes or code snippets with or without an internet connection. This application leverages modern web technologies to provide a seamless and robust text editing experience.",
    image: "/images/13-ORM-E-commerce-Back-End.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/jate",
  },
  {
    id: 3,
    title: "NetMingle: Social Network API",
    description:
      "NetMingle is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built using Node.js, Express.js, and MongoDB with Mongoose ODM, this project was part of the curriculum for the edX Boot Camps LLC.",
    image: "/images/20-React-dev-react-folio.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/netmingle-social-network-api", // Replace with actual project link (Render)
  },
  {
    id: 4,
    title: "Tech Blog",
    description:
      "Tech Blog is a CMS-style blog where developers can publish their blog posts and comment on other developers' posts. This platform is built with Node.js, Express.js, Sequelize ORM, and Handlebars. It provides a simple yet powerful interface for managing and sharing technical knowledge within the developer community.",
    image: "/images/12-SQL-Employee-Tracker.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/14-MVC-Tech-Blog",
  },
  {
    id: 5,
    title: "E-Commerce Backend System",
    description:
      "The E-Commerce Backend System is designed to provide robust API services for managing an e-commerce platform’s inventory. This backend system allows users to perform CRUD operations on products, categories, and tags through a clean and easy-to-use API interface. Developed using Express.js and Sequelize, it connects seamlessly with a PostgreSQL database, ensuring efficient data handling and security.",
    image: "/images/13-ORM-E-commerce-Back-End.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/13-ORM-E-Commerce-Back-End", // Replace with actual project link (Render)
  },
  {
    id: 6,
    title: "Employee Tracker",
    description:
      "Employee Tracker is a command-line content-management system (CMS) designed to efficiently manage employee databases. Built with Node.js, Inquirer, and PostgreSQL, this application offers a user-friendly interface for executing various CRUD operations across departments, roles, and employees.",
    image: "/images/12-SQL-Employee-Tracker.png", // Replace with actual image path
    link: "https://github.com/ngojohn2002/12-SQL-Employee-Tracker",
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <main className="main-content">
      <section>
        <h2>My Portfolio</h2>
        <div className="portfolio-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
