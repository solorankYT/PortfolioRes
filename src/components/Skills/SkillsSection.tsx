import { Card, Col, Container, Row } from "react-bootstrap";
import './SkillsSection.css'
function SkillsSection(){
return(

  <Container className="text-center container-section my-5 ">
    <h1 className="text-color-primary">Tech Stack</h1>
  <Row >
    
  <Col md={4} sm={6} className="d-flex justify-content-center">
  <Card style={{ width: '18rem' }} className="d-flex  align-items-center card-background-color">
    <Card.Img variant="top" src="./html-icon.png"  className="card-img-custom"/> 
      <Card.Body className="d-flex  align-items-center ">
      <Card.Title  className="text-white">HTML</Card.Title>
      </Card.Body>
  </Card>
</Col>

    <Col md={4} sm={6}className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }} className="d-flex  align-items-center card-background-color">
    <Card.Img variant="top" src="./css-icon.png" className="card-img-custom"/>
    <Card.Body className="d-flex  align-items-center ">
      <Card.Title className="text-white">CSS</Card.Title>    
    </Card.Body>
    </Card>
    </Col>

    <Col md={4} sm={6} className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }} className="d-flex align-items-center card-background-color">
    <Card.Img variant="top" src="./js-icon.png" className="card-img-custom"/>
    <Card.Body className="d-flex  align-items-center ">
      <Card.Title className="text-white">JAVASCRIPT</Card.Title>    
    </Card.Body>
    </Card>
    </Col>

    <Col md={4} sm={6}className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }} className="d-flex justify-content-center align-items-center card-background-color">
    <Card.Img variant="top" src="./boostrap-icon.png" className="card-img-custom"/>
    <Card.Body className="d-flex  align-items-center ">
      <Card.Title className="text-white">BOOTSTRAP</Card.Title>    
    </Card.Body>
    </Card>
    </Col>
    <Col md={4} sm={6}className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }} className="d-flex justify-content-center align-items-center card-background-color">
    <Card.Img variant="top" src="./react-icon.png" className="card-img-custom"/>
    <Card.Body className="d-flex  align-items-center ">
      <Card.Title className="text-white"> REACT</Card.Title>    
    </Card.Body>
    </Card>
    </Col>
    <Col md={4} sm={6}className="d-flex justify-content-center">
    <Card style={{ width: '18rem' }} className="d-flex justify-content-center align-items-center card-background-color">
    <Card.Img variant="top" src="./net-icon.png" className="card-img-custom"/>
    <Card.Body className="d-flex  align-items-center ">
      <Card.Title className="text-white">ASP.NET</Card.Title>    
    </Card.Body>
    </Card>
    </Col>
  </Row>
  </Container>
);
}

export default SkillsSection