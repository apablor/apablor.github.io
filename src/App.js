// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"; 
import Banner from "./components/Banner"; 
// import Skills from "./components/Skills"; 
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"; 
import Resume from "./components/Resume";
// import ContactMe from "./components/ContactMe"; 
import "./assets/CoestralPersonalUse-z8ZEw.woff"
import "./assets/SunsetImaginaryPersonalUse-ALMyD.woff"

// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <AboutMe/>
      <Projects />
      <Resume/> 
      {/* <ContactMe />  */}
    </div> 
  );
}

export default App;
 