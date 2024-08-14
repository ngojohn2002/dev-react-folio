// Purpose: This file is the main component of the application. It is responsible for rendering the Header, Footer, and the different pages of the application. It uses the BrowserRouter, Routes, and Route components from the react-router-dom package to handle the routing of the application. The different pages of the application are imported and rendered based on the URL path. The Header and Footer components are rendered on every page to provide a consistent layout and navigation for the user. 

// Importing necessary components and pages for the app to render properly and display the correct information to the user. 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
