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
                <div> 
                  Hello World! My name is Ashley Pablo, a recent grad from 
                  Cal State LA based out of Oakland. I am currently working 
                  as a freelancer helping build websites for small businesses
                  and volunteering at a non profit organization that provides 
                  the community of Oakland with low cost laptops and tech services. 
                  And when I am not coding or helping my community, I spend my time 
                  traveling, reading a book, or at the gym. 
                </div> 
            </Col> 
          </Row>  
        </Container>
      </section> 
    )
}

export default AboutMe;