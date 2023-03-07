import React from "react";      
import "./homeContainer.css";
       
function HomeContainer () {
        
   return (

<div id="contentContainer" className="container-fluid justify-content-center">
    <h1>Welcome to my Portfolio!</h1>
      <div id="pete" className="rounded-circle flex" alt="pete on dartmoor"></div>
      <p>This part is inside a .container class.</p> 
      <p>The .container class provides a responsive fixed width container.</p>
      <p>Resize the browser window to see that its width (max-width) will change at different breakpoints.</p>
      <a className="emailetc" href= "https://github.com/Pete-Andrew"> GitHub Profile</a>
      <a className="emailetc" href= "https://www.linkedin.com/in/peter-a-2143b33a/"> LinkedIn</a>
      <a className="emailetc" href= "mailto: peter.a.andrew@gmail.com"> Email</a>
      

</div>

       );
}

export default HomeContainer;