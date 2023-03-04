import React from "react";
import Home from "./components/pages/Home.js";
import NavBar from "./components/NavBar.js";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects.js";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer.js";

function App() {
  // return <Home />;
  // return <Projects/>;

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
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          {/* <Route path="contact/*" element={<Contact />} /> */}
        </Routes>

        <Footer />

      </div>
    </Router>
  );


}

export default App;
