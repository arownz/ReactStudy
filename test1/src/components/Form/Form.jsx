import { useState } from 'react';
import { Card, Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Form() {
    // Only maintain tab state at parent level
    const [activeTab, setActiveTab] = useState('login');

    // Handle tab changes
    const handleTabSelect = (tabKey) => {
        setActiveTab(tabKey);
    };
    
    // Handle registration success by switching to login tab
    const handleRegistrationSuccess = () => {
        setActiveTab('login');
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8} xl={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Header className="bg-primary text-white">
                            <h4 className="mb-0">Authentication Form</h4>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                                <Nav variant="pills" className="mb-4 nav-justified">
                                    <Nav.Item>
                                        <Nav.Link 
                                            eventKey="login" 
                                            className="rounded-pill py-2"
                                        >
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            Login
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link 
                                            eventKey="register" 
                                            className="rounded-pill py-2"
                                        >
                                            <i className="bi bi-person-plus me-2"></i>
                                            Register
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                
                                <Tab.Content>
                                    <Tab.Pane eventKey="login">
                                        <LoginForm />
                                    </Tab.Pane>
                                    
                                    <Tab.Pane eventKey="register">
                                        <RegisterForm onSwitchToLogin={handleRegistrationSuccess} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}