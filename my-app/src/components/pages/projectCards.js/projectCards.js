import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


function ProjectCards(props) {
  return (
    <div className="d-md-inline-flex">

    <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {props.location}
            </li>
          </ul>
        </div>
      </div>

    

    </div>
  );
}

export default ProjectCards;