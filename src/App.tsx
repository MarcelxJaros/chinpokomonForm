import { Form, Formik } from 'formik';
import React, {useState, useEffect} from 'react';
import './App.css';
<<<<<<< Updated upstream
import clickButton from './Button/Button';
import ItemForm from './Components/ItemForm';
import { FormInitVals } from './Constants/FormInit';
// https://pokeapi.co/docs/v2#pokemon
function App() {
  const [count, setCount] = useState(0);
=======
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemFormComp from './Components/ItemFormComp';
import { Stack } from 'react-bootstrap';
import CardContainer from './Components/CardContainer';
import EditModal from './Components/Modal';
import { StackDirection } from 'react-bootstrap/esm/Stack';
import useWindowSize from './Components/WindowSize';
import { Size } from './Models/IWindowSize';

function App() {
  const size: Size = useWindowSize();
  const [direction, setDirection] = useState<StackDirection>("horizontal")
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    console.log(count);
  }, [count]);
  
  const handleClick = () => {
    console.log("+1");
    // v setteri neposielame value, ale funkciu s parametrom - aktualnou hodnotou 
    setCount(curCount => curCount + 1)
  }
=======
    console.log(size);
    if (size.width !== undefined && size.width > 520) {
      setDirection("horizontal")
    } else {
      setDirection("vertical")
    }
  }, [size]);

>>>>>>> Stashed changes

  const handleSubmit = () => {
    console.log("submiting");
  }

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< Updated upstream
        <h1>Hello</h1>
        <Formik initialValues={FormInitVals} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <ItemForm />
            <br />
            {/* <SubmitButton /> */}

          </Form>
        )}
        </Formik>
      </header>
    </div>
=======
        <h1>My Chinpokomons {direction}</h1>
      <Stack direction={direction} className={direction === "vertical" ? "vertical-stack" : ""}>
        <ItemFormComp />
        <CardContainer/>
      </Stack>
      <EditModal />

    </header>
    </div >
>>>>>>> Stashed changes
  );
}

export default App;
