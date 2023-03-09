import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.css";
import Pdf from "./Programmer-CV-Peter-Andrew.pdf";

function Resume() {
  return (     

    <div id="resumeContainer" className="container-fluid flex justify-content-center">
     
      <div id="innerResumeContainer">  
        <h1>Welcome to my resumé!</h1>
        
        {/* <p>This part is inside a .container class.</p>  */}
        
      
        <h1>CV</h1>

             
        <a href = {Pdf} target = "_blank">Click this link to open resumé Pdf</a>
 
        </div>

      </div>

      

   
  );
}

export default Resume;
