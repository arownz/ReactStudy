import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Props from './components/Props/Props';
import Numbers from './components/NumbersMap/Numbers';
import Fruits from './components/Fruits/Fruits';
import Condition from './components/Condition/Condition';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Fixed Top Navigation Bar */}
        <Navbar 
          bg="dark" 
          variant="dark" 
          expand="lg" 
          fixed="top" 
          className="shadow-sm border-bottom border-secondary"
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src={viteLogo} className="logo me-2" alt="Vite logo" />
              <img src={reactLogo} className="logo react me-2" alt="React logo" />
              <span className="fw-bold">React Study</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/props" className="mx-1 px-3 rounded-pill">Props</Nav.Link>
                <Nav.Link as={Link} to="/numbers" className="mx-1 px-3 rounded-pill">Numbers</Nav.Link>
                <Nav.Link as={Link} to="/fruits" className="mx-1 px-3 rounded-pill">Fruits</Nav.Link>
                <Nav.Link as={Link} to="/condition" className="mx-1 px-3 rounded-pill">Condition</Nav.Link>
                <Nav.Link as={Link} to="/counter" className="mx-1 px-3 rounded-pill">Counter</Nav.Link>
                <Nav.Link as={Link} to="/form" className="mx-1 px-3 rounded-pill">Form</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content with padding for fixed navbar and footer */}
        <div className="flex-grow-1" style={{ paddingTop: "80px", paddingBottom: "70px" }}>
          <Container className="py-4">
            <div className="p-3 bg-light rounded-3 shadow-sm">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="text-center py-4">
                      <h1 className="display-4 fw-bold">React Lesson Hands-On</h1>
                      <p className="lead mt-3">
                        Welcome to my React lesson hands on, Explore the navigation links above to learn about Props, Numbers, and More during Sir Rennen lesson to INF 222.
                      </p>
                      <img
                        src={reactLogo}
                        alt="React Logo"
                        className="mt-4"
                        style={{ width: '150px', animation: 'spin 5s linear infinite' }}
                      />
                    </div>
                  }
                />
                <Route path="/props" element={<Props name="Harold" gender="Male" />} />
                <Route path="/numbers" element={<Numbers />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/condition" element={<Condition />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/form" element={<Form />} />
              </Routes>
            </div>
          </Container>
        </div>
        
        {/* Fixed Bottom Footer */}
        <footer className="bg-dark text-white py-3 fixed-bottom shadow">
          <Container className="text-center">
            <p className="mb-0">&copy; 2025 React Study. All rights reserved by Harold.</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;