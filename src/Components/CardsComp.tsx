import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

interface ICardProps {
  name: string;
  text: string;
  image: string;
}

const CardsComp = (props: ICardProps) => {
  const { name, text, image} = props;
  return (
    <Card style={{ width: '18rem', margin: 20  }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ }}>
        <Card.Title className="card-text">{name}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


  )
}

export default CardsComp;