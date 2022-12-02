import 'bootstrap/dist/css/bootstrap.min.css'
import { useAtom } from 'jotai';
import { MouseEvent, useCallback, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ICards } from '../Models/ICards';
import CardsAtom from '../Store/CardStore';

// const CardsComp = (props: ICardProps) => {
const CardsComp = ({myKey, name, text, image}: ICards) => {
  // const { name, text, image} = props;
  console.log("myKey:", myKey); 
  const [cardVals, setCardVals] = useAtom(CardsAtom);

  useEffect (() => {
    console.log(cardVals);
  }, [cardVals])

  const clickDelete = useCallback( (e: any) => {
    let clickedId = e.currentTarget.getAttribute('id')
    console.log("clickedId:", clickedId);
    setCardVals((prevItems) =>
        prevItems.filter((prevItem) => prevItem.myKey != clickedId)
      );
  }, [cardVals] );
  


  return (
    <Card key={myKey} style={{ width: '18rem', margin: 20  }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ }}>
        <Card.Title className="card-text">{name}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <Button id={myKey} className="myButton" type="button" variant="btn btn-outline-primary btn-lg" ><AiFillEdit /></Button>
        <Button id={myKey} className="myButton" type="button" variant="btn btn-outline-danger btn-lg" onClick={e => {clickDelete(e)}}><AiFillDelete /></Button>
      </Card.Body>
    </Card>


  )
}

export default CardsComp;