import React from "react";      
       
function NavBar () {       
       return (
       
       <nav class="navbar navbar-expand-sm bg-light justify-content-end sticky-top">
  
        <ul class="navbar-nav">
            <li class="nav-item ">
                <a class="nav-link" href="#">
                  Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                  CV
                </a>
            </li>
        </ul>
    </nav>  

       );
}

export default NavBar;