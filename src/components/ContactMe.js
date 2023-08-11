import {Container, Row, Col} from "react-bootstrap"
import {useState} from "react"; 
import {FiAlertTriangle} from "react-icons/fi";
import {AiOutlineCheckCircle} from "react-icons/ai"; 
 
function ContactMe (){
  const formInitialDetails = {
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "",
    message: ""
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails); 
  const [buttonText, setButtontext] = useState("Send"); 
  const [status, setStatus] = useState({}); 
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails, 
      [category] : value
    })
  }
// must install express and nodemailer to be able to actually send this information
// since we make request to api, we make async 
  const handleSubmit =  async (e) => {
    // we dont want page to reload so we put preventdefault
    e.preventDefault(); 
    // tells user that something has been triggered
    setButtontext("Sending ..."); 
    // the repsonse of the api call 
    let response = await fetch ("http://localhost:3000/", {
      method: "POST", 
      headers: {
        "Content-Type" : "Application/json;charset=utf-8",  
      }, 
      body : JSON.stringify(formDetails), 
    }); 
    // once done, button changes back to send
    setButtontext("Send");
    // waiting for the response in json format
    let result = response.json(); 
      // set form details back to initial state aka clear the form
      setFormDetails(formInitialDetails); 
      if(result.code === 200){
        setStatus({success:true, message: "Message has been sent"});
      }
      else{
        setStatus({success: false, message: "Message could not be sent, try again"}); 
      }
  };  
     
    return(
      <section> 
        {/* id must match the ending path */}
        <Container className="connect" id="contact"> 
          <Row>
            <Col>  
            <h1> Contact Me</h1> 
            <form onSubmit={handleSubmit}> 
              <Row> 
                <Col sm={6} className="left-section">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/> <br/>
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> <br/>
                  
                </Col> 
                <Col sm={6} className="right-section"> 
                  <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required/>  <br/> 
                  <input type="tel" value={formDetails.phone} placeholder="Phone Num." onChange={(e) => onFormUpdate('phone', e.target.value)} /> <br/> 
                </Col>
                <Col className="text-message">
                  <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required> </textarea>  <br/> 
                  {/* will show up as send or sending */}
                  {/* <button type="submit"> <span> {buttonText}</span></button> */}
                </Col> 
              </Row>
              <Row> 
                {
                  status.message && 
                  <Col className="res-message"> 
                    <div className={status.success === false ? "fail" : "success"}>
                      {status.success === false ? (
                        <FiAlertTriangle style={{ color: "red", marginRight: "5px" }} />) : (
                        <AiOutlineCheckCircle style={{ color: "green", marginRight: "5px" }} />
                      )} {status.message} </div>
                  </Col> 
                }
              </Row> 
                 <button type="submit"> <span> {buttonText}</span></button>  
            </form> 
            </Col>  
          </Row> 
        </Container>  
      </section> 
    )
}

export default ContactMe; 