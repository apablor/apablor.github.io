import {useState, useEffect} from "react"; 
import {Container} from "react-bootstrap";

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
    const [delta, setDelta] = useState(300-Math.random() * 150);
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
        } 
        // if it is deleting and got to the point where the text has been completely deleted. 
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false); 
            setLoopNum(loopNum + 1) 
            setDelta(250); 
            }
}
    return (
            <section className="banner" id="home"> 
                <Container> 
                    <span className="header"> Hey! I'm Ashley and I'm a </span> <br/> 
                    <span className="wrap"> {text}</span> 
                </Container>
            </section>
    )

}

export default Banner; 