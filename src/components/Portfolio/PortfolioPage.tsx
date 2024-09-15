import { Card, Col, Container, Row } from "react-bootstrap";
import './PortfolioPage.css' ;
import { Link } from "react-router-dom";

const portfolio =[
    {
        Title: "Valoplay",
        ImageLink: "./Valoplay.png",
        Link: 'https://valoplay.netlify.app/'
    },
]

function PortfolioPage() {
    return(
        
    <Container className="containerPortfolio text-center fadeInUp">    
    <Row>
        {portfolio.map((portfolio, index) =>(
    <Col key={index} lg={4} md={12}  className="colPrortfolio d-flex justify-content-center">
    <Card className="cardStyle px-5">
        <Link to={portfolio.Link} className="link">
    <Card.Img  className="card-img" variant="top" src={portfolio.ImageLink} />
    <Card.Body>
    <Card.Title className="card-title">{portfolio.Title}</Card.Title>    
    </Card.Body>
    </Link>
    </Card> 
    </Col>
))} 
     </Row>

    </Container>
    );
}

export default PortfolioPage

