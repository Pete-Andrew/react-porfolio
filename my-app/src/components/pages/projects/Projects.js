import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProjectCards from "../projectCards.js/projectCards";
import projects from "../../../projects.json";
import Wrapper from "../../Wrapper";

function Projects(props) {
  return (

    <div>
    
      <ProjectCards
        name={[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />
     
    
      <ProjectCards
         name={[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
         location={projects[1].location}
       />
      
      
     <ProjectCards
       name={[2].name}
       image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />

<ProjectCards
        name={[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />
     
   
      <ProjectCards
         name={[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
         location={projects[1].location}
       />
      
       <ProjectCards
       name={[2].name}
       image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />


      
    
      </div>

    // <div>
    //   <div className="card">
    //     <div className="img-container">
    //       <img alt={props.name} src={props.image} />
    //     </div>
    //     <div className="content">
    //       <ul>
    //         <li>
    //           <strong>Name:</strong> {props.name}
    //         </li>
    //         <li>
    //           <strong>Occupation:</strong> {props.occupation}
    //         </li>
    //         <li>
    //           <strong>Address:</strong> {props.location}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
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
