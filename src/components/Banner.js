import {useState, useEffect} from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import Portrait from "../assets/header.JPG"; 

function Banner(){
    const rotate = ["Web Developer", "Software Engineer", "Front-End Developer"]; 
    // tell us how long each word would be typed out (transition between each word)
    const period = 2000; 

    const [loopNum, setLoopNum] = useState(0); 
    // is the word being typed out or being deleted
    const [isDeleting, setIsDeleting] = useState(false);
    // is the word that currently being typed out starting from letter to end
    const [text, setText] = useState(''); 
    // how long each letter comes after the first one is typed
    const [delta, setDelta] = useState(300-Math.random() * 100);
    // const[index, setIndex] = useState(1); 

    useEffect(() => {
        let ticker = setInterval(() => {
            // whenthe tik is being fired off
            tick(); 
        }, delta); 
        // clear the interval 
        return () => {clearInterval(ticker)}; 
        // we want to run eveytime teh text gets updated
    }, [text])

    const tick = () => {
        // this would lets us know what wird we are currenlty peeking
        // has % because it would keep looping to the first index when reaching the last one
        let i = loopNum % rotate.length; 
        let fullText = rotate[i]; 
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1); 
        setText(updatedText); 

        // check is the current word is being deleted
       if(isDeleting){
            // get the previous delta and cut it in half
            setDelta(prevDelta => prevDelta/2); 
        }
        // if it is not deleting and has reached the full word
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true); 
            setDelta(period);
            // setIndex(prevIndex => prevIndex -1); 
        } 
        // if it is deleting and got to the point where the text has been completely deleted. 
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false); 
            setLoopNum(loopNum + 1)
            // setIndex(1); 
            setDelta(500); 
            }
        // // if it is not deleting basically... 
        // else{
        //     setIndex(prevIndex => prevIndex + 1); 
        // }
}


    return (
            <section className="banner" id="home" >
                <Container> 
                    <Row className="align-items-center"> 
                        <Col className="image" xs={12} md={6} xl={5}> 
                            <img src={Portrait} alt="header"/>
                        </Col> 
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span> 
                            <span className="wrap"> Hi! My name is Ashley & I am a: {text}</span>
                            <p> Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. Sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate 
                                velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <button onClick={() => console.log("connect")}>Lets connect</button>
                        </Col>
                    </Row>
                </Container> 
            </section>

    )

}

export default Banner; 