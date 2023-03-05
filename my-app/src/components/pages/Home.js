import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import HomeContainer from "./HomeContainer";
import Projects from "./projects/Projects";

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
