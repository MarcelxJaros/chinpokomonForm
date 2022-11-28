import { Form, Formik } from 'formik';
import React, { useState, useEffect, useId } from 'react';
import './App.css';
import clickButton from './Button/Button';
import ItemForm from './Components/ItemForm';
import { FormInitVals } from './Constants/FormInit';
import 'bootstrap/dist/css/bootstrap.min.css'
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

  const handleClick = () => {
    console.log("+1");
    // v setteri neposielame value, ale funkciu s parametrom - aktualnou hodnotou 
    setCount(curCount => curCount + 1)
  }

  const handleSubmit = () => {
    console.log("submiting");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Form</h1>

        <ItemForm />

      </header>
    </div>
  );
}

export default App;
