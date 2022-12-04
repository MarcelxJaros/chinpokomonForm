import { Form, Formik } from 'formik';
import React, { useState, useEffect, useId } from 'react';
import './App.css';
import clickButton from './Button/Button';
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
// https://pokeapi.co/docs/v2#pokemon

function App() {
  const [count, setCount] = useState(0);

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
    // v setteri neposielame value, ale funkciu s parametrom - aktualnou hodnotou 
    setCount(curCount => curCount + 1)
  }

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

      </header>
    </div>
  );
}

export default App;
