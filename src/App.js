import logo from './logo.svg';
import './App.css';

import {Navbar} from "./Components/navbar"
import {Skills} from "./Components/skills"
import {Projects} from "./Components/projects"

function App() {
  return (
    <div className="App">
     
     {/* <Navbar/>
     <Skills/>    */}
     <Projects/>
    </div>
  );
}

export default App;
