import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import "../projects/ProjectStyle.css"

function ProjectCards(props) {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project Name:</strong> {props.name}
            </li>
            <li>
              <strong>Overview:</strong> {props.overview}
            </li>
            <li>
               <a href= {props.deployedRepo} > <strong>Link to Deployed repo</strong></a>
            </li>
            <li>
                <a href= {props.GitHubRepo} ><strong>Link to GitHub repo</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
