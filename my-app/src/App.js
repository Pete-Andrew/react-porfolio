import React from "react";
import Home from "./components/pages/Home.js";
import NavBar from "./components/NavBar.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Projects from "./components/pages/projects/Projects.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer.js";
import "./components/pages/projectCards.js/style.css"

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
