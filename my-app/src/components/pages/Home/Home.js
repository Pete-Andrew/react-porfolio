import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "../jumbotron/Jumbotron";
import HomeContainer from "../homeContainer/HomeContainer";
import "./home.css";

function Home() {
  return (

    
    <div id="homepage" >
      {Jumbotron()}
        
      <div>
      {HomeContainer()}
      </div>
    </div>
  );
}

export default Home;

//projects
//skills
//experience
//contact
