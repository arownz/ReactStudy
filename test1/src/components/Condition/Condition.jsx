import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Condition() {
    const [display, setDisplay] = useState(false);
    
    const toggleDisplay = () => {
        setDisplay(!display);
    };
    
    let message;
    if (display) {
        message = (
            <Card bg="success" text="white" className="mb-3">
                <Card.Body className="text-center py-4">
                    <h2>Display is true</h2>
                    <p className="lead mb-0">Condition has been met!</p>
                </Card.Body>
            </Card>
        );
    } else {
        message = (
            <Card bg="danger" text="white" className="mb-3">
                <Card.Body className="text-center py-4">
                    <h2>Display is false</h2>
                    <p className="lead mb-0">Condition has not been met.</p>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card className="shadow-sm">
                        <Card.Header>
                            <h3 className="mb-0">Conditional Rendering</h3>
                        </Card.Header>
                        <Card.Body>
                            {message}
                            <div className="d-flex justify-content-center">
                                <Form.Check 
                                    type="switch"
                                    id="display-switch"
                                    label={`Toggle condition: ${display ? 'True' : 'False'}`}
                                    checked={display}
                                    onChange={toggleDisplay}
                                    className="mb-3"
                                />
                            </div>
                            <div className="text-center mt-3">
                                <Button 
                                    variant={display ? "outline-success" : "outline-danger"}
                                    onClick={toggleDisplay}
                                >
                                    Toggle State
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}