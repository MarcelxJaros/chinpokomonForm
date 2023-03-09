import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemFormComp from './Components/ItemFormComp';
import { Stack } from 'react-bootstrap';
import CardContainer from './Components/CardContainer';
import { useAtom } from 'jotai';
import EditModal from './Components/Modal';
import jokeStore from './Store/JokeStore';

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useAtom(jokeStore);

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chinpokomons</h1>
        <Stack direction="horizontal"> 
          <ItemFormComp />
          <CardContainer /> 
        </Stack>
          <EditModal />         

      </header>
    </div>
  );
}

export default App;
