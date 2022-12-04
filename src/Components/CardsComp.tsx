import 'bootstrap/dist/css/bootstrap.min.css'
import { useAtom } from 'jotai';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ICards } from '../Models/ICards';
import CardsAtom from '../Store/CardStore';
import itemToEditStore from '../Store/ItemToEditStore';
import modalSettings from '../Store/ModalStore';

// const CardsComp = (props: ICardProps) => {
const CardsComp = ({ myKey, name, text, image, power }: ICards) => {
  // const { name, text, image} = props;
  // console.log("myKey:", myKey);
  const [cardVals, setCardVals] = useAtom(CardsAtom);
  const [showModal, setShowModal] = useAtom(modalSettings);
  const [itemToEdit, setItemToEdit] = useAtom(itemToEditStore);

  const handleShow = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    let clickedId = e.currentTarget.getAttribute('id')
    let itemToEdit = cardVals.find(obj => {
      return obj.myKey === clickedId;
    });
    console.log(itemToEdit);
    if (itemToEdit != undefined) {
      setItemToEdit(itemToEdit);
    }
    setShowModal(true);
  };

  useEffect(() => {
    console.log(cardVals);
  }, [cardVals])

  const clickDelete = useCallback((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    let clickedId = e.currentTarget.getAttribute('id')
    console.log("clickedId:", clickedId);
    setCardVals((prevItems) =>
      prevItems.filter((prevItem) => prevItem.myKey != clickedId)
    );
  }, [cardVals]);



  return (
    <Card key={myKey} style={{ width: '18rem', height: '38rem', margin: 20 }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{}}>
        <Card.Title className="card-text">{name}</Card.Title>
        <Card.Text className="card-text">
          Power level: {power} <br />
          {text}
        </Card.Text>
        <Button id={myKey} className="myButton" type="button" variant="btn btn-outline-primary btn-lg" onClick={e => handleShow(e)} ><AiFillEdit /></Button>
        <Button id={myKey} className="myButton" type="button" variant="btn btn-outline-danger btn-lg" onClick={e => clickDelete(e)}><AiFillDelete /></Button>
      </Card.Body>
    </Card>


  )
}

export default CardsComp;