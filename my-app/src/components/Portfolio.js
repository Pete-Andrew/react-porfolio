import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import HomeContainer from "./HomeContainer";
import Projects from "./Projects";

function Portfolio() {
  
    return (
    
    <div >

        {NavBar()}  
        {Jumbotron()}
        {HomeContainer()}
        {Projects()}
        {Footer()}

     </div>

//projects
//skills
//experience
//contact
    

  );
}

export default Portfolio;

