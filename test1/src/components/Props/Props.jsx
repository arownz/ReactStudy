import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Props({name, gender}) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card className="shadow-sm">
                        <Card.Body className="text-center py-5">
                            <h1 className="display-5">Hello, my name is <span className="text-primary">{name}</span> and my gender is <span className="text-info">{gender}</span></h1>
                            <p className="lead mt-3">This is a demonstration of React Props.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}