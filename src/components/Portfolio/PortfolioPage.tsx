import { Card, Col, Container, Row } from "react-bootstrap";
import './PortfolioPage.css' ;
import { Link } from "react-router-dom";
function PortfolioPage() {
    return(
        
        <Container className="container text-center fadeInUp">
            <h1 className="text-color-primary">Portfolio</h1>
    <Row>
    <Col lg={4} md={12}  className="fadeInLeft d-flex justify-content-center">
    <Card className="cardStyle ">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./Unitrack.png"  />
    <Card.Body>
    <Card.Title className="card-title">Unitrack</Card.Title>    
    </Card.Body>
    </Card>
    </Col>

        
    <Col lg={4} md={12} className="fadeInLeft1 d-flex justify-content-center">  
    <Card className="cardStyle">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./joserizal.png"  />
    <Card.Body>
    <Card.Title className="card-title">History of Rizal</Card.Title>    
    </Card.Body>
    </Card>
    </Col>
  
    <Col lg={4} md={12} className="fadeInLeft2 d-flex justify-content-center">
    <Link className="link" to={'https://valoplay.netlify.app/'} target="_blank">
    <Card className="cardStyle">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./Valoplay.png"  />
    <Card.Body>
    <Card.Title className="card-title">Valoplay</Card.Title>    
    </Card.Body>
    </Card>
    </Link>
    </Col>

    <Col lg={4} md={12} className="fadeInLeft3 d-flex justify-content-center">
    
    <Card className="cardStyle">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./MNL.png"  />
    <Card.Body>
    <Card.Title className="card-title">MNL Flower Shop</Card.Title>    
    </Card.Body>
    </Card>
   
    </Col>


    <Col lg={4} md={12} className="fadeInLeft4 d-flex justify-content-center">
    <Link className="link" to={'https://winrate-calculator.netlify.app/'}   target="_blank">
    <Card className="cardStyle">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./winrateCal.png"  />
    <Card.Body>
    <Card.Title className="card-title">Win rate calculator</Card.Title>    
    </Card.Body>
    </Card>
    </Link>
    </Col>

    <Col lg={4} md={12} className="fadeInLeft5 d-flex justify-content-center">
    <Link className="link" to={'https://main--hustlergame.netlify.app/'}   target="_blank">
    <Card className="cardStyle">
    <Card.Img  style={{ width: '20em', margin: '0 auto' , padding: '10px'}} variant="top" src="./HustlerGame.png"  />
    <Card.Body>
    <Card.Title className="card-title">Hustler</Card.Title>    
    </Card.Body>
    </Card>
    </Link>
    </Col>
    </Row>

    </Container>
    );
}

export default PortfolioPage