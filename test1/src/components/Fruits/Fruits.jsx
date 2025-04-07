import FruitCard from './FruitCard.jsx';
import Cart from './Cart.jsx';
import { useState } from 'react';
import { Button, Badge, Offcanvas, Row, Col, Container, Card } from 'react-bootstrap';

export default function Fruits() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red", price: 10, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
    { id: 2, name: "Banana", color: "Yellow", price: 5, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
    { id: 3, name: "Grapes", color: "Purple", price: 15, image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg" },
    { id: 4, name: "Orange", color: "Orange", price: 8, image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
    { id: 5, name: "Mango", color: "Yellow", price: 12, image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" },
    { id: 6, name: "Pineapple", color: "Brown", price: 20, image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg" },
    { id: 7, name: "Strawberry", color: "Red", price: 18, image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
    { id: 8, name: "Watermelon", color: "Green", price: 25, image: "https://th.bing.com/th/id/OSK.HERO3Ts0n9noc587efpZ3WRt01lJk5OANDLh7z6djHlnW_w?rs=1&pid=ImgDetMain" },
    { id: 9, name: "Blueberry", color: "Blue", price: 22, image: "https://www.thespruceeats.com/thmb/EgzQ3G_O11J8Dz_nIrXJW_IFbz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053592-590e483b3df78c92837c6c40.jpg" },
    { id: 10, name: "Kiwi", color: "Green", price: 14, image: "https://cdn.mos.cms.futurecdn.net/ACE92LVKCebMpzQzvpwDcD.jpg" },
    { id: 11, name: "Dragon Fruit", color: "Pink", price: 30, image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hylocereus_undatus_red_pitahaya.jpg" },
    { id: 12, name: "Avocado", color: "Green", price: 16, image: "https://www.healthifyme.com/blog/wp-content/uploads/2022/07/Avocado-Feature.jpg" }
  ];
  
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const handleAddToCart = (fruit) => {
    const existingItem = cartItems.find(item => item.id === fruit.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <Container fluid>
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">
              <i className="bi bi-basket text-primary me-2"></i>
              <span className="text-primary">Fresh</span> Fruit Shop
            </h2>
            <Button 
              variant="outline-primary" 
              onClick={handleShowCart}
              className="rounded-pill d-flex align-items-center"
            >
              <i className="bi bi-cart me-2"></i>
              Cart <Badge bg="danger" className="ms-2">{getTotalItems()}</Badge>
            </Button>
          </div>
        
          <Row className="g-4">
            {fruits.map((fruit) => (
              <Col key={fruit.id} xs={12} sm={6} md={4} lg={3}>
                <FruitCard
                  name={fruit.name}
                  price={fruit.price}
                  color={fruit.color}
                  image={fruit.image}
                  onAddToCart={() => handleAddToCart(fruit)}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton className="bg-light">
          <Offcanvas.Title>
            <i className="bi bi-cart me-2"></i>
            Your Shopping Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart 
            items={cartItems} 
            onRemove={handleRemoveFromCart} 
            onUpdateQuantity={handleUpdateQuantity} 
            totalPrice={getTotalPrice()}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}