import { Col,  Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import "./LandingPage.css"
import { Link } from "react-router-dom";
function LandingPage(){
return(

<Container className="container-landing  d-flex justify-content-center align-items-center fadeInUp">
<Row className="d-flex  align-items-center">
    <Col md={8} className="p-5">
        <h1 className="text-white">Hi! I'm <span className="text-color-primary">Mark Funa</span></h1>
        <h2 className="text-color-light">Front-end developer</h2>
        <Link to="contact" className="link-design">
        <div className="mt-4 button ">Contact me</div>
        </Link>
    </Col>
  
    <Col md={4} className="p-5 hide-on-small">
    <Image
     src="HeroPic.jpg"
     className="img-fluid"
     roundedCircle
    />
    </Col>
</Row>

</Container>

);
}

export default LandingPage