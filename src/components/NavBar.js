
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
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
      <Navbar.Brand href="#home">
        <span className='brand'> ASHLEY PABLO </span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="ms-auto">
          <Nav.Link href="#about" className={activeLink === "about" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About Me</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link> 
          <Nav.Link href="#resume" className={activeLink === "resume" ? "active-navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink("resume")}>Resume</Nav.Link>
          <Nav.Link href="#contact" className={activeLink === "contact" ? "active-navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink("contact")}>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;