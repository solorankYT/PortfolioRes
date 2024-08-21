import { Col, Container, Row} from "react-bootstrap";
import "./AboutSection.css"
import SkillsSection from "../Skills/SkillsSection";
import AboutMe from "./AboutMe";
import AboutOffer from "./AboutOffer";

function AboutSection(){
    return(
      <>
      <Container className="containerAbout fadeInUp" id="AboutPage" >
      <Row>
        <Col className="aboutMe"  lg={5} >
        <AboutMe />
        </Col>
        <Col >
        <Container className="sideContainer">
        <Col>
        <SkillsSection /> 
        </Col>
          <Col>
        <AboutOffer />
        </Col>
        </Container>
        </Col>
        </Row>
        </Container>
        
        </>
    );
}

export default AboutSection