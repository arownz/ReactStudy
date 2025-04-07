import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      <div>
        {/* Top Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={viteLogo} className="logo me-2" alt="Vite logos" />
              <img src={reactLogo} className="logo react me-2" alt="React logo" />
              <span className="fw-bold">React Study</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/props">Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/numbers">Numbers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fruits">Fruits</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/condition">Condition</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/counter">Counter</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form">Form</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mt-5">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h1 className="display-4 fw-bold">React First Lesson Hands-On</h1>
                  <p className="lead mt-3">
                    Welcome to your first React lesson! Explore the navigation links above to learn about Props, Numbers, and More during 3/31/2025 lesson.
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
            <Route path="form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;