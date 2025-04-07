import { ListGroup, Badge } from 'react-bootstrap';

export default function NumberMaps({ numbers }) {
  return (
    <div>
      <h4 className="mb-3">Original numbers doubled:</h4>
      <ListGroup>
        {numbers.map((number, index) => (
          <ListGroup.Item 
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>Original number: <strong>{number}</strong></span>
            <Badge bg="success" pill>
              Doubled: {number * 2}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}