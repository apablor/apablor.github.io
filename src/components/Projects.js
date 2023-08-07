import {Container, Card, Row, Col} from "react-bootstrap"; 
import LittelLemon from "../assets/littleLemon.png"; 


function Projects(){
  return(
    <section className="project" id="projects">
      <Container> 
        <h1 className="project-heading"> Projects</h1> 
        <Row className="project-row">
          <Col className="project-col">
            <Card className="first-card">
              <img src={LittelLemon} alt="Home Page" /> 
              <Card.Body>
              <h3> Little Lemon Website </h3> 
                <div> 
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="project-col"> 
            <Card className="first-card">
            <img src={LittelLemon} alt="Home Page" /> 
            <Card.Body>
            <h3> Little Lemon Website </h3> 
                <div> 
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
          </Col> 
          <Col className="project-col">
            <Card className="first-card">
            <img src={LittelLemon} alt="Home Page" /> 
            <Card.Body>
                <h3> Little Lemon Website </h3> 
                <div> 
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    )

}

export default Projects; 