import React from "react";      
import "./jumbotron.css";
       
function Jumbotron () {       
       return (
        

<div id="jumbotron" className="jumbotron jumbotron-fluid flex">
  <div className="container">
    <h1 className="display-4">Hi, Welcome to my Portfolio!</h1>

    <div id="pete" className="rounded-circle flex" alt="pete on dartmoor"></div>  

    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  
  </div>
</div>
  

       );
}

export default Jumbotron;

