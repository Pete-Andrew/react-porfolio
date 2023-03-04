import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm bg-light justify-content-end sticky-top">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </a>
        </li>

        <li class="nav-item ">
          <a class="nav-link">
            <NavLink
              to="Projects"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
          </a>
        </li>

        <li class="nav-item ">
          <a class="nav-link">
            <NavLink
              to="Contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </a>
        </li>

        <li class="nav-item ">
          <a class="nav-link">
            <NavLink
              to="About"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
