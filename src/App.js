import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './User';
import { Input } from './Input';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const [inputValue, setInputValue] = React.useState('');

  const increment = () => {
    setCounter((prevCounter) => ++prevCounter);
  };

  const decrement = () => {
    setCounter((prevCounter) => --prevCounter);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h2 data-testid="counter">{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>

      <div>
        <Input handleChange={handleChange} inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
