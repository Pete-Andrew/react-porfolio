import React from "react";
import Home from "./components/pages/Home/Home.js";
import NavBar from "./components/navBar/NavBar.js";
// import About from "./components/pages/about/About.js";
import Resume from "./components/pages/resume/Resume";
import Contact from "./components/pages/contact/Contact.js";
import Projects from "./components/pages/projects/Projects.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/footer/Footer.js";
import "./app.css";


function App() {
  return (
    <Router>
      <NavBar />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        
        {/* Define a route that will have descendant routes */}
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="resume" element={<Resume />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
