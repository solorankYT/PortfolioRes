import { Card, Col, Container, Row } from "react-bootstrap";
import './AboutSection.css';

const offers = [
  {
    title: "Web Dev",
    svgPath: "M20 10.128c0-3.832 0-5.747-1.172-6.938S15.771 2 12 2h-2C6.229 2 4.343 2 3.172 3.19S2 6.296 2 10.128s0 5.747 1.172 6.938c.47.477 1.054.763 1.828.934M22 17.5c0-1.875 0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553C20.312 13 19.375 13 17.5 13h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C8 14.689 8 15.626 8 17.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C9.688 22 10.625 22 12.5 22h5c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 20.312 22 19.375 22 17.5M16.5 16l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L16.5 19m-3-3l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707l.92.793M2.5 6h17",
  },
  {
    title: "Web Design",
    svgPath: "M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M13 13h4m-4 4h2M7 6h.009M11 6h.009M9 9v12.5",
  },
  {
    title: "Photography",
    svgPath: "M11.285 9.23h8.23q-.655-1.763-2.091-3.116Q15.989 4.762 14.15 4.3zm-2.07 2L13.37 4.1q-.275-.05-.684-.075T12 4q-1.65 0-3.075.625T6.4 6.3zM4.25 14h5.68L5.855 6.908Q4.977 7.99 4.489 9.266T4 12q0 .525.063 1.013T4.25 14m5.639 5.7l2.853-4.93H4.484q.656 1.763 2.111 3.116T9.89 19.7M12 20q1.65 0 3.075-.625T17.6 17.7l-2.815-4.93l-4.116 7.092q.275.069.653.104T12 20m6.146-2.908q.8-1.025 1.327-2.358T20 12q0-.525-.062-1.012T19.75 10h-5.68zM12 21q-1.858 0-3.5-.71q-1.642-.711-2.86-1.93T3.71 15.5T3 12q0-1.864.71-3.503q.711-1.64 1.93-2.857T8.5 3.71Q10.142 3 12 3q1.864 0 3.503.71q1.64.711 2.858 1.93t1.929 2.857Q21 10.137 21 12q0 1.858-.71 3.5q-.711 1.642-1.93 2.86t-2.857 1.93T12 21",
  },
  
];

function AboutOffer() {
  return (
    <Container className="offerContainer">
      <Row className="text-center">
        <h1 className="text-color-primary">What I Offer</h1>
        {offers.map((offer, index) => (
          <Col key={index} lg={4} >
            <Card className="card d-flex justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24">
                <path fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d={offer.svgPath} />
              </svg>
              <Card.Body>
                <Card.Title className="text-secondary">{offer.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutOffer;
