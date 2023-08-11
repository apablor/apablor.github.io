import {Container, Card, Row, Col} from "react-bootstrap"; 
import {useState} from "react";
import LittleLemon from "../assets/littleLemon.png"; 
import Hoss from "../assets/hoss-app.png"; 
import Hashocracy from "../assets/hashocracy-app.png";
import Lightbox from "react-image-lightbox"; 
import 'react-image-lightbox/style.css';


function Projects() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [Hoss, LittleLemon, Hashocracy]; // Replace with your image paths
  const projectTitle = ["H.O.S.S Web App", "Little Lemon", "Hashocracy"];
  const description =[
    "HOSS is a software application that scans a network for all connected devices.", 
    "Little Lemon is a mock webpage of an mediterranean restaurant. " , 
    "Hashocracy is website that provides free atricles about best technologies at the moment."
  ] 

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <section className="project" id="projects">
      <Container> 
        <h1 className="project-heading"> Projects</h1> 
        <Row className="project-row">
          {images.map((image, index) => (
            <Col className="project-col" key={index}>
              <Card className="project-card">
                <img src={image} alt={`Project ${index}`} onClick={() => openLightbox(image)} /> 
                <Card.Body>
                  <h3>{projectTitle[index]}</h3> 
                  <div> 
                    {description[index]}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {isOpen && (
        <Lightbox mainSrc={selectedImage} onCloseRequest={closeLightbox}/>
      )}
    </section>
  );
}


export default Projects; 