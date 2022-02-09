import React from "react";
import "./cssFiles/skills.css";
import css from "./images/css.svg";
import express from "./images/express.svg";
import html from "./images/html.svg";
import js from "./images/js.svg";
import mongodb from "./images/mongodb.svg";
import nodejs from "./images/nodejs.svg";
import react from "./images/react.svg";
import git from "./images/git.svg";

function Skills() {
  return (
    <div>

      <h1 id="teckStackHeading">Skills</h1>

      <div id="techStackDiv">

        <div id="techStackDiv_1">
          <img class="texhStackSvg" src={html} alt="HTML" />
          <img class="texhStackSvg" src={css} />
          <img class="texhStackSvg" src={js} />
          <img class="texhStackSvg" src={react} alt="HTML" />
          <img class="texhStackSvg" src={nodejs} alt="HTML" />
        </div>

        <div id="techStackDiv_2" >
          <img class="texhStackSvg_2" src={express} alt="HTML" />
          <img class="texhStackSvg_2" src={mongodb} alt="HTML" />
          <img class="texhStackSvg_2" src={git} alt="HTML" />
      </div>

      </div>

    </div>
  );
}

export { Skills };
