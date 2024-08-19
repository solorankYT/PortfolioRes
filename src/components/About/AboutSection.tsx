import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutSection.css"
import SkillsSection from "../Skills/SkillsSection";
function AboutSection(){
    return(
      <>
      <Container className="containerAbout fadeInUp" id="AboutPage" >
      <h1 className="text-color-primary">About</h1>
      <p className="AboutText text-color-secondary">
      Hello! I'm Mark Funa, an aspiring Front-End Developer with a growing interest in web development. I'm just starting out, but I'm eager to learn and improve my skills. 
      <span className="text-color-primary"> I enjoy working on creating interactive and user-friendly web applications, and I'm continuously learning to deliver better and more visually appealing projects. 
      </span> While I have much to learn, I'm committed to growing in this field and staying updated with the latest trends and technologies. 
      My goal is to keep improving and, hopefully, contribute to projects that meet or exceed expectations.
      </p>   
        <Row className="text-center" style={{margin: '5rem'}}>
            <h1 className="text-color-primary">What I Offer</h1>
          <Col md={4} className="d-flex justify-content-center">
      <Card className="background-color"style={{ width: '350px' }}>
          <Card.Img style={{  width: '250px',height:'250px', margin: '0 auto' , padding: '10px'}} variant="top" src="./webdevelopment.svg" />
        <Card.Body>
          <Card.Title className="text-white">Web Development</Card.Title>    
        </Card.Body>
      </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
          <Card className="background-color"style={{ width: '350px' }}>
          <Card.Img style={{  width: '250px',height:'250px', margin: '0 auto' , padding: '10px'}} variant="top" src="./webdesign.svg" />
        <Card.Body>
          <Card.Title className="text-white">Web Design</Card.Title>    
        </Card.Body>
      </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
          <Card className="background-color"style={{ width: '350px' }}>
          <Card.Img style={{ width: '250px',height:'250px', margin: '0 auto' , padding: '10px'}} variant="top" src="./photography.svg" />
        <Card.Body>
          <Card.Title className="text-white">Photography</Card.Title>    
        </Card.Body>
      </Card>
          </Col>
        </Row>  
        <SkillsSection />
        </Container>

       

        </>
    );
}

export default AboutSection