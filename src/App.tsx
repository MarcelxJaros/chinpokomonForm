import { Form, Formik } from 'formik';
import React, { useState, useEffect, useId, useMemo } from 'react';
import './App.css';
import { FormInitVals } from './Constants/FormInit';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemFormComp from './Components/ItemFormComp';
import CardsComp from './Components/CardsComp';
import { Stack } from 'react-bootstrap';
import CardContainer from './Components/CardContainer';
import { ICards } from './Models/ICards';
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import CardsAtom from './Store/CardStore';
import EditModal from './Components/Modal';
import axios from 'axios';
import loading from './Store/LoadingStore';
import jokeStore from './Store/JokeStore';
import modalSettings from './Store/ModalStore';
import itemToEditStore from './Store/ItemToEditStore';
// https://pokeapi.co/docs/v2#pokemon

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useAtom(jokeStore);
  const [showModal, setShowModal] = useAtom(modalSettings);
  const [itemToEdit, setItemToEdit] = useAtom(itemToEditStore);

  console.log("itemToEdit:", itemToEdit);
  useEffect(() => {
    console.log("fungujem");
  }, []);

  useEffect(() => {
    // setCount a iné settery sú asynchrónne, (vo fn zobrazuju ako keby jeden state dozadu)
    // aktualnu hodnotu setnutej konštanty treba pozerať v useEffect
    console.log(count);
  }, [count]);

  const handleClick = (): void => {
    console.log("+1");
    console.log(joke)
    // v setteri neposielame value, ale funkciu s parametrom - aktualnou hodnotou 
    setCount(curCount => curCount + 1)
  }

  // const editModalMemo = useMemo(() => <EditModal />, [itemToEdit, showModal]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chinpokomons</h1>
        <Stack direction="horizontal">
          {/* <button onClick={handleClick} /> */}
          <ItemFormComp />
          <CardContainer /> 
        </Stack>
          <EditModal />         
          {/* {editModalMemo} */}

      </header>
    </div>
  );
}

export default App;
