import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("fungujem");
  }, []);
  useEffect(() => {
    console.log(count);
  }, [count]);
  
  const handleClick = () => {
    console.log("+1");
    setCount(prev => {return prev + 1})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <button onClick={handleClick}>click me</button>
      </header>
    </div>
  );
}

export default App;
