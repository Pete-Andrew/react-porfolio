import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.css";
import Pdf from "./Programmer-and-digital-art-CV.pdf";

function Resume() {
  return (     

    <div id="resumeContainer" className="container-fluid justify-content-center">
     
      <div id="innerResumeContainer">  
        <h1>Welcome to my resumé!</h1> 
             
        <a href = {Pdf} target = "_blank">Click this link to open resumé Pdf</a>
 
        </div>

      </div>

      

   
  );
}

export default Resume;
