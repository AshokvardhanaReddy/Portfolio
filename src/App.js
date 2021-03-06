import logo from './logo.svg';
import './App.css';

import {Navbar} from "./Components/navbar"
import {Skills} from "./Components/skills"
import {Projects} from "./Components/projects"
import {Contact} from "./Components/contact"
import {Image} from "./Components/image"
import {About} from "./Components/about"

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Image/>
     <About/>
     <Skills/>   
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
