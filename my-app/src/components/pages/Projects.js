import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar";
import Footer from "./Footer";

function Projects(props) {
  return (
    <div>
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
        {/* <span className="remove">𝘅</span> */}
      </div>
    </div>
  );
}

export default Projects;

{
  /* <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div> */
}
