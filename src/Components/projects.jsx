import "./cssFiles/projects.css";
import projectImage_1 from "./images/project1.png";
import projectImage_2 from "./images/project2.jpg";

function Projects() {
  return (
    <div>
      <h1 id="projectHeadings">Projects</h1>

      <div class="projectsDiv">
       
        <div class="projectImgDiv">
          <img id="projectImg_1" class="projectImg" src={projectImage_1}></img>
        </div>

        {/* project Details Div */}
        <div class="projectDetailsDiv">
          <p class="projectHeading">Juicy Chemistry Clone</p>
          <p class="projectDescription">
            Juicy Chemistry which makes 100% organic skin care products. In this
            Project, we clone the website and implemented some features like
            Filter by product category Sort based on price User login
            Authentication by using HTML, CSS, JavaScript in 7 Days.
          </p>
          <div class="teckStackDiv">
            <span class="teckStackName">HTML</span>
            <span class="teckStackName">CSS</span>
            <span class="teckStackName">JavaScriipt</span>
          </div>
          <br></br>
          <button class="viewProjectButton">
            <a
              class="viewProjectAnchor"
              href="https://github.com/JKAD02/Juicy-Chemistry"
              target="_blank"
            >
              View Project
            </a>
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* 2nd Project */}
      <div class="projectsDiv">
        {/* image Div */}
        <div class="projectImgDiv">
          <img class="projectImg" src={projectImage_2}></img>
        </div>

        {/* project Details Div */}
        <div class="projectDetailsDiv">
          <p class="projectHeading">Bodywise Clone</p>
          <p class="projectDescription">
            Bodywise which provides different types of health care products. In
            this Project, we clone the website and implemented some features
            like Filter by product category, Responsive website in mobiles, tablets etc., login
            Authentication by using HTML, CSS, JavaScript in 7 Days.
          </p>
          <div class="teckStackDiv">
            <span class="teckStackName">HTML</span>
            <span class="teckStackName">CSS</span>
            <span class="teckStackName">JavaScriipt</span>
            <span class="teckStackName">Node.Js</span>
          </div>
          <br></br>
          <button class="viewProjectButton">
            <a
              class="viewProjectAnchor"
              href="https://github.com/dinoweblog/FW13-T48-BebodywiseClone-Project"
              target="_blank"
            >
              View Project
            </a>
          </button>
        </div>
      </div>
     
    </div>
  );
}

export { Projects };
