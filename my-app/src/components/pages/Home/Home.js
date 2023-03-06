import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "../Jumbotron";
import HomeContainer from "../HomeContainer";
import "./home.css";

function Home() {
  return (
    <div id="homepage">
      {Jumbotron()}
      {HomeContainer()}
    </div>
  );
}

export default Home;

//projects
//skills
//experience
//contact
