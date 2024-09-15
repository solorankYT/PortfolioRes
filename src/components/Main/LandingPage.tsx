import { Container } from "react-bootstrap";
import "./LandingPage.css"
import ContactSection from "../Contact/ContactSection";

function LandingPage(){
return(
<Container className="container-landing justify-content-center align-items-center fadeInUp text-center">

        <h1 className="text-white">Mark Funa</h1>
        <h3 className="text-color-light">Aspiring Web Developer</h3>
        <ContactSection />
       
</Container>
);
}

export default LandingPage