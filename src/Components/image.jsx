import "./cssFiles/image.css";
import ashokImage from "./images/ashok.jpg";

function Image() {
  return (
    <div>
      <div id="imageDiv">
        <div className="imageBoxes">
          <h1>Yarasi Ashokvardhana Reddy</h1>
        </div>

        <div className="imageBoxes">
          <img id="ashokImage" src={ashokImage}></img>
        </div>
      </div>
    </div>
  );
}

export { Image };
