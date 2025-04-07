import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './FruitCard.css'; // Import custom CSS for hover effects

export default function FruitCard({ name, price, color, image }) {
  return (
    <div className="col-md-3 mb-4"> {/* Bootstrap column for 4-column layout */}
      <Card className="fruit-card" style={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <Card.Img variant="top" src={image} alt={name} className="fruit-image" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Color: {color}
            <br />
            Price: ${price}
          </Card.Text>
          <div className="buy-button-container">
            <Button className="buy-button" variant="primary">
              Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}