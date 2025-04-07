import { Row, Col, Card, Button, Image, InputGroup, FormControl, Badge } from 'react-bootstrap';

export default function Cart({ items, onRemove, onUpdateQuantity, totalPrice }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-cart-x text-muted" style={{ fontSize: '3rem' }}></i>
        <h5 className="mt-3">Your cart is empty</h5>
        <p className="text-muted">Add some fruits to get started!</p>
      </div>
    );
  }

  return (
    <div>
      <Row className="g-3">
        {items.map((item) => (
          <Col xs={12} key={item.id}>
            <Card className="shadow-sm border-0 h-100">
              <div className="position-relative">
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="position-absolute top-0 end-0 m-2 rounded-circle p-0 d-flex justify-content-center align-items-center"
                  style={{ width: '24px', height: '24px', zIndex: 10 }}
                  onClick={() => onRemove(item.id)}
                  title="Remove item"
                >
                  <i className="bi bi-x"></i>
                </Button>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  className="card-img-top"
                  style={{ height: '80px', objectFit: 'cover' }} 
                />
              </div>
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6 className="mb-1 fw-bold">{item.name}</h6>
                    <Badge bg="light" text="dark" className="px-2 py-1">
                      ${item.price} each
                    </Badge>
                  </div>
                  <h6 className="text-primary fw-bold">${(item.price * item.quantity).toFixed(2)}</h6>
                </div>
                
                <div className="mt-2">
                  <InputGroup size="sm" style={{ maxWidth: '120px' }}>
                    <Button 
                      variant="outline-secondary"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      <i className="bi bi-dash"></i>
                    </Button>
                    <FormControl 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="text-center"
                    />
                    <Button 
                      variant="outline-secondary"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <i className="bi bi-plus"></i>
                    </Button>
                  </InputGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4 border-0 bg-light shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Total:</h5>
            <h4 className="text-success mb-0">${totalPrice.toFixed(2)}</h4>
          </div>
          <Button variant="success" className="w-100 py-2">
            <i className="bi bi-credit-card me-2"></i>
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
