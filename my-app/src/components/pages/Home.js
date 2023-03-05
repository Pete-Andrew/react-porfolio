import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./Jumbotron";
import HomeContainer from "./HomeContainer";

function Home() {
  return (
    <div>
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
