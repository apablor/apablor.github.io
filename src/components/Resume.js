import {Container, Row, Col} from "react-bootstrap"; 

function Resume(){
    return(
    <section className="resume" id="resume"> 
      <Container> 
        <Row className="resume-row"> 
          <h4 > Education </h4>
          <Col className="right-set">
            <h5> California State Univerity, Los Angeles</h5> 
            <div> Bachelors of Science in Computer Science <br/>  
                     Deans List 2020 & 2022
            </div> 
          </Col> 
          <Col className="imp-dates"> 
            <div>  Graduated May 2023 <br/>
                    GPA: 3.6 </div> 
          </Col> 
        </Row> 
        <Row className="resume-row"> 
          <h4> Job Experience </h4> 
          <Row> 
            <Col className="right-set"> 
              <h5> Urban Peace Movement </h5> 
                <span> Event Coordinator  | Oakland, CA </span> 
                <div> 
                    ● Facilitated weekly meetings, planned 5+ community events, and engaged in community outreach, educating 1000+ individuals about youth incarceration issues <br/> 
                    ● Collaborated with local organizations and community members to create effective remote strategies to gather over 3,000 signatures to prevent youth from being tried as adults within 2 weeks during the pandemic <br/> 
                    ● Promoted to leadership positions within the first year based on exceptional organization and excellent written and verbal communication skills <br/> 
                </div> 
            </Col> 
            <Col className="imp-dates"> 
                <p > September 2017 - Present </p>
            </Col> 
          </Row> 
          <Row> 
            <Col className="right-set"> 
              <h5> Electronic Arts </h5> 
              <span> Software Engineer Intern | Remote </span> 
              <div> 
                ● Designed a unique ID generator using SDES encryption and hash functions to ensure fixed-size output in order to
                connect to APIs for creating chat functionality <br/>
                ● Problem-solved efficient solutions to retrieve JSON data from Contentful, and efficiently organize and store it for
                front-end requests to improve overall performance <br/> 
                ● Worked cross-functionally with project managers, UI designers, and engineers during Agile team meetings, increasing
                team productivity by 25% in a fast pace environment <br/> 
              </div> 
            </Col> 
            <Col className="imp-dates">
              <p>  May 2022 - August 2022 </p>
            </Col> 
          </Row>
        </Row>
        <Row className="resume-row"> 
          <h4> Projects </h4>
          <Row> 
            <Col className="right-set"> 
              <h5> H.O.S.S Web App </h5> 
              <span> Front End Developer  | Los Angeles, CA </span> 
              <div> 
                    ● Built a web application that scans a client’s network and returns a 5-point rating based on the integrity of security and privacy resulting in an increase in network security for clients’ devices <br/> 
                    ● Led the design and structure of the web pages using user-centered design principles to optimize the user experience and increase engagement <br/> 
                    ● Partnered with an engineer at LAX as the project sponsor, ensuring successful project completion within the set timeframe with a collaborative effort <br/> 
              </div> 
            </Col> 
            <Col className="imp-dates"> 
              <p> August 2022 - May 2023 </p>
            </Col> 
          </Row> 
          <Row> 
            <Col className="right-set"> 
              <h5> Art School Web Page </h5> 
              <div> 
                    ● Created a web page for a local art teacher and articulated their requirements such as allowing them to track attendance, improving student information management, and enhancing lesson organization <br/> 
                    ● Implemented a robust database architecture to ensure data integrity and accessibility allowing the art teacher to easily retrieve and update information with adherence to best practices <br/> 
                    ● Performed debugging of software to identify and resolve issues to ensure a smoothness <br/> 
              </div> 
            </Col> 
            <Col className="imp-dates"> 
              <p> January 2021 - May 2021</p>
            </Col> 
          </Row>
          <Row> 
            <Col className="right-set"> 
              <h5> Hashocracy E-Commerce Site </h5> 
              <span> Blog Developer | Remote  </span> 
              <div> 
                    ● Designed a visually compelling and user-friendly website using Adobe Illustrator, Photoshop, and Sketch <br/> 
                    ● Showcased proficiency in programming by developing static pages and managing databases with thoroughness <br/> 
              </div> 
            </Col> 
            <Col className="imp-dates"> 
              <p> January 2021 - May 2021</p>
            </Col> 
          </Row>
          <Row className="resume-row"> 
            <h4> Skills </h4>
            <Col className="right-set">
              <div> 
                Programming Languages & Scripting Languages: Java, SQL, JavaScript (ES6), Python, PHP <br/> 
                Web Development: HTML, CSS, Django, Node.js, BootStrap, DOM Manipulation, Express<br/>
                Databases: MySQL, PostgreSQL, MongoDB<br/>
                Tools: SpringBoot, NPM, Git/GitHub, Visual Studio, JIRA, Atom, Postman, Excel, Tableau<br/>
                Certifications: JavaScript Basics (Coursera), Front-End Engineer with Meta (Coursera)<br/>
                Computer Science: Agile Methodologies, SCRUM, Software Development Lifecycle, Object-Oriented Programming, Software Design, Operating Systems (OS), Shell Scripting<br/>
              </div> 
            </Col>  
          </Row> 
        </Row> 
      </Container>
    </section>
    )
}

export default Resume; 