// in order to be able to get nodemailer and express
const express = require("express"); 
const router = express.Router(); 
const cors = require("cors"); 
const nodemailer = require("nodemailer"); 
 
// server used to send email (npm server will runn this file)
const app = express(); 
app.use(cors());
app.use(express.json()); 
app.use("/", router); 
app.listen(3000, () => console.log("Server Running")); 

const contactEmail = nodemailer.createTransport({
    service : 'gmail', 
    auth: {
        // use applicaion password
        user : "****.com", 
        pass: "**************"
    },
}); 

// verify if its running
contactEmail.verify((error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("Ready to send"); 
    }
}); 

// the way that we would send the data
router.post("/#contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName; 
    const email = req.body.email; 
    const message = req.body.message; 
    const phone = req.body.phone; 
    const mail = {
        from: name, 
        to: "******@gmail.com", 
        subject : "Portfolio Contact Form Submission -", 
        html: `<p> Name: ${name} </p> 
        <p> Email: ${email} </p> 
        <p> Phone: ${phone} </p> 
        <p> Message : ${message} </p> `
    }; 
    // lets us know if the message has been sent
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error); 
        }
        else{
            res.json({code: 200, status: "Message Sent"}); 
        }
    }); 
}); 