import { Form, Formik } from 'formik';
import React, { useState, useEffect, useId } from 'react';
import './App.css';
import clickButton from './Button/Button';
import ItemForm from './Components/ItemForm';
import { FormInitVals } from './Constants/FormInit';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemFormComp from './Components/ItemFormComp';
import CardsComp from './Components/CardsComp';
import { Stack } from 'react-bootstrap';
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
        <h1>My Form</h1>
        <Stack direction="horizontal">
        {/* <button onClick={handleClick} /> */}
        <ItemFormComp />
        <CardsComp name={"Pčinkmoon"} text={"lorem ipsum"} image={"https://www.kibrispdr.org/data/804/pokemon-characters-picture-and-name-17.jpg"}/>
        <CardsComp name={"Pčinkmoon"} text={"lorem ipsum"} image={"https://www.kibrispdr.org/data/804/pokemon-characters-picture-and-name-17.jpg"}/>
        <CardsComp name={"Pčinkmoon"} text={"lorem ipsum"} image={"https://www.kibrispdr.org/data/804/pokemon-characters-picture-and-name-17.jpg"}/>
        </Stack>

      </header>
    </div>
  );
}

export default App;
