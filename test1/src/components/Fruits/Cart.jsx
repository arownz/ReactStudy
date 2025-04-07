import { ListGroup, Button, Image, InputGroup, FormControl, Badge } from 'react-bootstrap';

export default function Cart({ items, onRemove, onUpdateQuantity, totalPrice }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-5">
        <h5>Your cart is empty</h5>
        <p className="text-muted">Add some fruits to get started!</p>
      </div>
    );
  }

  return (
    <div>
      <ListGroup variant="flush">
        {items.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <Image 
                src={item.image} 
                alt={item.name} 
                rounded 
                width="60" 
                height="60" 
                style={{ objectFit: 'cover' }} 
              />
              <div className="ms-3">
                <h6 className="mb-0">{item.name}</h6>
                <small className="text-muted">${item.price} each</small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <InputGroup className="me-2" style={{ width: '100px' }}>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
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
                  +
                </Button>
              </InputGroup>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => onRemove(item.id)}
              >
                ×
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-4 border-top pt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Total:</h5>
          <h5>${totalPrice.toFixed(2)}</h5>
        </div>
        <Button variant="success" className="w-100">
          Checkout
        </Button>
      </div>
    </div>
  );
}
