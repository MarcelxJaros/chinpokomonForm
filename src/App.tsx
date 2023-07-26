import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemFormComp from './Components/ItemFormComp';
import { Stack } from 'react-bootstrap';
import CardContainer from './Components/CardContainer';
import { useAtom } from 'jotai';
import EditModal from './Components/Modal';
import jokeStore from './Store/JokeStore';
import useWindowSize from './Components/WindowSize';
import { Size } from './Models/IWindowSize';
import { StackDirection } from 'react-bootstrap/esm/Stack';

function App() {
  const size: Size = useWindowSize();
  const [direction, setDirection] = useState<StackDirection>("horizontal")

  useEffect(() => {
    console.log("Hello, world!")
    if (size.width !== undefined && size.width > 520) {
      setDirection("horizontal")
    } else {
      setDirection("vertical")
    }
  }, []);

  useEffect(() => {
    // setCount a iné settery sú asynchrónne, (vo fn zobrazuju ako keby jeden state dozadu)
    // aktualnu hodnotu setnutej konštanty treba pozerať v useEffect
    console.log(size);
    if (size.width !== undefined && size.width > 520) {
      setDirection("horizontal")
    } else {
      setDirection("vertical")
    }
  }, [size]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chinpokomons {direction}</h1>
        <Stack direction={direction} className={direction === "vertical" ? "vertical-stack" : ""}> 
          <ItemFormComp />
          <CardContainer /> 
        </Stack>
          <EditModal />         

      </header>
    </div>
  );
}

export default App;
