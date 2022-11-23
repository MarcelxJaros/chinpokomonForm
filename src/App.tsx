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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>click me</button>
      </header>
    </div>
  );
}

export default App;
