import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import './FruitCard.css'; // Import custom CSS for hover effects

export default function FruitCard({ name, price, color, image, onAddToCart }) {
  return (
    <Card className="fruit-card h-100 shadow-sm" style={{ overflow: "hidden" }}>
      <div className="position-relative">
        <Card.Img variant="top" src={image} alt={name} className="fruit-image" />
        <Badge 
          bg="primary" 
          className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill"
        >
          ${price}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text>
          <span className="badge" style={{ backgroundColor: color.toLowerCase(), color: ['Yellow', 'White'].includes(color) ? 'black' : 'white' }}>
            {color}
          </span>
        </Card.Text>
        <div className="buy-button-container mt-auto">
          <Button className="buy-button" variant="primary">
            Buy Now
          </Button>
        </div>
        <div className="addtocart-button-container mt-2">
          <Button className="add-to-cart-button" variant="outline-success" onClick={onAddToCart}>
            <i className="bi bi-cart-plus me-2"></i>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}