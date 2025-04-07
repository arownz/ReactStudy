import { useState } from 'react';
import { Form, Button, Alert, Modal, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

export default function RegisterForm({ onSwitchToLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const passwordsMatch = formData.password === formData.confirmPassword;
    const showPasswordError = formData.confirmPassword && !passwordsMatch;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration data:', formData);
        
        // Store data for modal and show it
        setRegistrationData({
            username: formData.username,
            email: formData.email,
            password: formData.password
        });
        setShowModal(true);
        
        // Reset form after submission
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        onSwitchToLogin(); // Switch to login tab after registration
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <>
            <div>
                <h4 className="text-center mb-4">Create New Account</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <Button 
                                variant="outline-secondary"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <EyeSlash /> : <Eye />}
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <Button 
                                variant="outline-secondary"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <EyeSlash /> : <Eye />}
                            </Button>
                        </InputGroup>
                        {showPasswordError && (
                            <Alert variant="danger" className="mt-2">
                                Passwords do not match
                            </Alert>
                        )}
                    </Form.Group>
                    
                    <div className="d-grid gap-2 mt-4">
                        <Button 
                            variant="success" 
                            type="submit"
                            disabled={!passwordsMatch}
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </div>

            {/* Registration Modal integrated in RegisterForm */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {registrationData && (
                        <div>
                            <p><strong>Account has been successfully created!</strong></p>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Username:</span>
                                    <strong>{registrationData.username}</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Email:</span>
                                    <strong>{registrationData.email}</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Password:</span>
                                    <strong>{registrationData.password}</strong>
                                </li>
                            </ul>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Continue to Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
