
import "./cssFiles/contact.css"
import github from "./socialMedia/github-icon.svg"
import linkdin from "./socialMedia/linkedin-icon.svg"
import twitter from "./socialMedia/twitter.svg"
import facebook from "./socialMedia/facebook.svg"

function Contact(){
    return (
        <div>
            <h1 id="contactHeading">Contact Me</h1>

            <div id="contactDiv">
              <img class="socialMediaImg" src={github}></img>
              <img class="socialMediaImg" src={linkdin}></img>
              <img class="socialMediaImg" src={twitter}></img>
              <img class="socialMediaImg" src={facebook}></img>

              {/* <a href="https://twitter.com/yavreddy1995"></a> */}
             
            </div>
<br></br>
        </div>
    )
}


export {Contact}