import { useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

export default function Counter() {
    const [count, setCount] = useState(1);
    
    function increment() {
        setCount(count + 1);
    }
    
    function reset() {
        setCount(0);
    }
    
    function decrement() {
        setCount(count - 1);
    }
    
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10} lg={8} xl={6}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white text-center">
                            <h3 className="mb-0">Counter Example</h3>
                        </Card.Header>
                        <Card.Body className="text-center py-5">
                            <h1 className="display-1 mb-4">{count}</h1>
                            
                            <InputGroup className="mb-4 w-50 mx-auto">
                                <Button 
                                    variant="outline-danger" 
                                    onClick={decrement}
                                    className="px-4"
                                >
                                    <i className="bi bi-dash-lg"></i>
                                </Button>
                                <FormControl 
                                    value={count} 
                                    readOnly 
                                    className="text-center"
                                />
                                <Button 
                                    variant="outline-success" 
                                    onClick={increment}
                                    className="px-4"
                                >
                                    <i className="bi bi-plus-lg"></i>
                                </Button>
                            </InputGroup>
                            
                            <div>
                                <Button 
                                    variant="outline-secondary" 
                                    onClick={decrement}
                                    className="mx-2"
                                    size="lg"
                                >
                                    Decrement
                                </Button>
                                <Button 
                                    variant="outline-warning" 
                                    onClick={reset}
                                    className="mx-2"
                                    size="lg"
                                >
                                    Reset
                                </Button>
                                <Button 
                                    variant="outline-primary" 
                                    onClick={increment}
                                    className="mx-2"
                                    size="lg"
                                >
                                    Increment
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}