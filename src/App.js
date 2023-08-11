// import logo from './logo.svg';
import {useState, useEffect} from "react"; 
import Loading from "react-loading"; 
import './App.css';
import NavBar from "./components/NavBar"; 
import Banner from "./components/Banner"; 
// import Skills from "./components/Skills"; 
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"; 
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe"; 
import Footer from "./components/Footer"; 
import "./assets/CoestralPersonalUse-z8ZEw.woff"
import "./assets/SunsetImaginaryPersonalUse-ALMyD.woff"

// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000)
  }, [] )

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-container">
          <Loading type="bubbles" color="pink" height={200} width={200} />
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <AboutMe id="about" />
          <Projects id="projects" />
          <Resume id="resume" />
          <ContactMe id="contact" />
          <Footer />
        </>
      )}
    </div>
  );
  
}

export default App;
 