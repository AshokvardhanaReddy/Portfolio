import React from "react";
import "./cssFiles/navbar.css"

function Navbar() {
  return (
    <div>
      <div id="navbarDiv">
        <p id="navbarAbout" class="navbarButtons">
          <a>About</a>
        </p>
        <p class="navbarButtons">
     
          <a>Skills</a>
        </p>
        <p class="navbarButtons">
          <a>Projects</a>
        </p>
        <p class="navbarButtons">
          <a>Contact</a>
        </p>
      </div>
    </div>
  );
}

export { Navbar };
