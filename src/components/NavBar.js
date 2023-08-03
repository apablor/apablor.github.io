
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Logo from '../assets/logo.png'; 
import NavIcon1 from '../assets/linkedin.png'; 
import NavIcon2 from '../assets/github.png'; 
import {useState, useEffect} from "react"; 

function NavBar() {
    // would let us know what link we are currently on 
    const [activeLink, setActiveLink] = useState("home"); 

    // check if the user has scrolled down the page
    const[scrolled, setScrolled] = useState(false); 

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true); 
            }
            else{
                setScrolled(false); 
            }
        }
        window.addEventListener("scroll", onScroll); 

        return() => window.removeEventListener("scroll", onScroll); 
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value); 
    }
    

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
      {/* <Container> */}
        <Navbar.Brand href="#home">
            {/* <img src={Logo} alt="Logo" />  */}
            <span className='big'> ASHLEY PABLO </span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active-navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link> 
          </Nav>
          <span className="navbar-text"> 
            <div className="social-icon"> 
                <a href="https://www.linkedin.com/in/ashleypabloramirez/"><img src={NavIcon1} alt="LinkedIn"/></a>
                <a href="https://github.com/apablor"><img src={NavIcon2} alt="GitHub"/> </a>
            </div> 
            <button className='connect-button' onClick={() => console.log('connect')}> <span> Lets connect </span></button>
        </span>  
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavBar;