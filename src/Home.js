function Home(){

    return(
        <div>
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
                            <button onClick={() => console.log("connect")}>Lets connect <BsArrowRightSquare/></button>
                        </Col>
                    </Row>
                </Container> 
            </section>

        </div>
    ) 

}

export default Home ; 