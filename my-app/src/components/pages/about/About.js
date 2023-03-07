import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

function About() {
  return (

             

    <div id="about" className="container-fluid flex justify-content-center">
     <h1>Welcome to my Portfolio!</h1>
        
        <p>This part is inside a .container class.</p> 
        <p>The .container class provides a responsive fixed width container.</p>
        <p>Resize the browser window to see that its width (max-width) will change at different breakpoints.</p>
      </div>

      

   
  );
}

export default About;
