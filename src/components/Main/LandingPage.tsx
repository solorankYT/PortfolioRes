import { Col,  Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import "./LandingPage.css"
import { Link } from "react-router-dom";
import ContactSection from "../Contact/ContactSection";
function LandingPage(){
return(

<Container className="container-landing justify-content-center align-items-center fadeInUp text-center">

        <h1 className="text-white">Mark Funa</h1>
        <h3 className="text-color-light typewriter">Front-end developer.</h3>
        <a className="link-design" href="./MarkFunaResume.docx" download>
        <div className="mt-4">Download CV</div>
        </a> 
        <ContactSection />
       

</Container>

);
}

export default LandingPage