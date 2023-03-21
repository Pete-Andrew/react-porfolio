import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCards from "../projectCards.js/projectCards";
import projects from "../../../projects.json";
import "./ProjectStyle.css";

function Projects(props) {
  return (
    <div className="d-flex flex-wrap align-items-stretch">
      <ProjectCards
        name={projects[0].name}
        image={projects[0].image}
        deployedRepo={projects[0].deployedRepo}
        overview={projects[0].overview}
        GitHubRepo={projects[0].GitHubRepo}
      />

      <ProjectCards
        name={projects[1].name}
        image={projects[1].image}
        deployedRepo={projects[1].deployedRepo}
        overview={projects[1].overview}
        GitHubRepo={projects[1].GitHubRepo}
      />
      <ProjectCards
        name={projects[2].name}
        image={projects[2].image}
        deployedRepo={projects[2].deployedRepo}
        overview={projects[2].overview}
        GitHubRepo={projects[2].GitHubRepo}
      />

      <ProjectCards
        name={projects[3].name}
        image={projects[3].image}
        deployedRepo={projects[3].deployedRepo}
        overview={projects[3].overview}
        GitHubRepo={projects[3].GitHubRepo}
      />

      <ProjectCards
        name={projects[4].name}
        image={projects[4].image}
        deployedRepo={projects[4].deployedRepo}
        overview={projects[4].overview}
        GitHubRepo={projects[4].GitHubRepo}
      />

      <ProjectCards
        name={projects[5].name}
        image={projects[5].image}
        deployedRepo={projects[5].deployedRepo}
        overview={projects[5].overview}
        GitHubRepo={projects[5].GitHubRepo}
      />
    </div>
  );
}

export default Projects;
