import { Container, Col, Row } from "react-bootstrap"; 
import Portrait from "../assets/header.JPG"; 

function AboutMe(){

    return(
      <section className="about-me" id="about"> 
        <Container> 
          <Row className="about-content"> 
            <Col className="portrait">
                <img src={Portrait} alt="portrait" />  
            </Col> 
            <Col className="about-text"> 
                <h1 > About Me </h1> 
                <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum
                </div> 
            </Col> 
          </Row>  
        </Container>
      </section> 
    )
}

export default AboutMe;