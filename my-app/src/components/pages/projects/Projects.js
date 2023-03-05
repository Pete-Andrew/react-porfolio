import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCards from "../projectCards.js/projectCards";
import projects from "../../../projects.json";
import "./ProjectStyle.css"; 

function Projects(props) {
  return (
    <div>
      <ProjectCards
        name={projects[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />

      <ProjectCards
        name={projects[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
        location={projects[1].location}
      />

      <ProjectCards
        name={projects[2].name}
        image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />

      <ProjectCards
        name={projects[3].name}
        image={projects[3].image}
        occupation={projects[3].occupation}
        location={projects[3].location}
      />

      <ProjectCards
        name={projects[4].name}
        image={projects[4].image}
        occupation={projects[4].occupation}
        location={projects[4].location}
      />

      <ProjectCards
        name={projects[5].name}
        image={projects[5].image}
        occupation={projects[5].occupation}
        location={projects[5].location}
      />
    </div>

  );
}

export default Projects;
