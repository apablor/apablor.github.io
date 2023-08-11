import {Container, Row, Col} from "react-bootstrap";
import {FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";


function Footer() {
    return(
      <footer className="footer" id="footer"> 
        <Container> 
          <Row className="align-footer"> 
            <Col className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ashleypabloramirez/"> <FiLinkedin/></a>
                <a href="https://github.com/apablor" > <FiGithub /> </a> 
              </div>
              <p> Connect With Me | ajpablor@gmail.com | +1 6163759451 | Ashley Pablo's Portfolio 2023</p>
            </Col>
          </Row> 
        </Container>
      </footer> 
    )
}

export default Footer; 