import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {AiFillStar} from "react-icons/ai"

function Skills (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container> 
                <Row>
                    <Col> 
                        <div className="skill-bx">
                           <h2> Skills </h2> 
                           <p> Under here you will find some of the skills and what i specialize in <br/> </p>
                            <Carousel responsive={responsive} infinite={true} className=""skill-slider> 
                                <div className="item"> 
                                    <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>
                                    <h5> Java</h5>
                                </div>
                                <div className="item"> 
                                    <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item"> 
                                    <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>
                                    <h5> Web Development </h5>
                                </div>
                                <div className="item"> 
                                    <AiFillStar/>  <AiFillStar/>  <AiFillStar/>
                                    <h5> React </h5>
                                </div>
                                <div className="item"> 
                                    <span className="stars"> <AiFillStar/>  <AiFillStar/>  <AiFillStar/> </span>
                                    <h5> Node.js</h5>
                                </div> 
                            </Carousel>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    ); 
}

export default Skills; 