import "./cssFiles/image.css";
import ashokImage from "./images/ashokSmall.jpg";

function Image() {
  return (
    <div>
      <br></br>
      <div id="ImageMainDiv">

        <div id="nameDiv">
          <h2 id="hiHeading">Hi !</h2>
          <h1 id="nameHeading"> AshokVardhana Reddy</h1>
          <h3 id="fullStackHeading">Full Stack Web Developer</h3>
          <button id="resumeButton"><a id="resumeAchor" href="https://drive.google.com/file/d/1zwnDoN0vBtO_paDnLd-_TfMDxWfot_eD/view?usp=sharing" target="_blank">Resume</a></button>
        </div>
        <div id="imageDiv">
          <img id="ashokImage" src={ashokImage}></img>
        </div>
      </div>
  
    </div>
  );
}

export { Image };
