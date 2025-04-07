import NumberMaps from "./NumberMaps";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Numbers() {
  const numbers = [3, 6, 9, 10];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Numbers Mapping Example</h3>
            </Card.Header>
            <Card.Body>
              <NumberMaps numbers={numbers} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}