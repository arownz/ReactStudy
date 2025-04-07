import { useState } from 'react';
import { Form, Button, Toast, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showToast, setShowToast] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Login attempted with username: ${formData.username}`);
        
        // Show success toast
        setShowToast(true);
        
        // Reset form after successful login
        setFormData({
            username: '',
            password: ''
        });
    };

    const handleCloseToast = () => setShowToast(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <>
            <div>
                <h4 className="text-center mb-4">Login to Your Account</h4>
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
                    
                    <div className="d-grid gap-2 mt-4">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>

            {/* Toast notification integrated in LoginForm */}
            <div className="position-fixed bottom-5 end-5 p-5" style={{ zIndex: 5 }}>
                <Toast 
                    show={showToast} 
                    onClose={handleCloseToast}
                    delay={3000}
                    autohide
                    bg="success"
                >
                    <Toast.Header closeButton={true}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                        You have successfully logged in!
                    </Toast.Body>
                </Toast>
            </div>
        </>
    );
}
