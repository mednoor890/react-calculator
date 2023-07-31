import React, { useState } from 'react'
import * as math from 'mathjs';
import "./App.css"
const numbers=[
  {
    number:0,
    id:"zero"
  },
  {
    number:1,
    id:"one"
  },
  {
    number:2,
    id:"two"
  },
  {
    number:3,
    id:"three"
  },
  {
    number:4,
    id:"four"
  },
  {
    number:5,
    id:"five"
  },
  {
    number:6,
    id:"six"
  },
  {
    number:7,
    id:"seven"
  },
  {
    number:8, 
    id: "eight"
  },
  {
    number:9,
    id:"nine"
  }
]
const op=
[
  {
    operator: "+",
    id: "add",
  },
  {
    operator: "-",
    id: "subtract",
  },
  {
    operator: "*",
    id:"multiply"
  },
  {
    operator: "/",
    id:"divide"
  }
]
export default function App() {
  const [input, setInput] = useState("0");
  const [lastClicked, setLastClicked] = useState('');

  const handleDigitInput = (value) => {
    // Check if input starts with 0
    if (input === '0') {
      setInput(value);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleDecimal = () => {
    // Check if input already contains a decimal point in the current number
    const lastOperatorIndex = input
      .split('')
      .reverse()
      .findIndex((char) => op.some((operator) => operator.operator === char));
  
    const currentNumber =
      lastOperatorIndex === -1
        ? input
        : input.slice(input.length - lastOperatorIndex);
  
    if (!currentNumber.includes('.')) {
      setInput((prevInput) => prevInput + '.');
    }
  };
  

  const clear = () => {
    setInput('0');
  };

  const calculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
      console.error(error);
    }
  };

  const handleClick = (e) => {
    const value = e.target.value;
  
    // Handle operators
    if (op.some((operator) => operator.operator === value)) {
      // Check for consecutive operators (excluding negative sign)
      const lastChar = input.slice(-1);
      if (
        lastChar !== '-' &&
        op.some((op) => op.operator === lastChar) &&
        value !== '-'
      ) {
        setInput((prevInput) => prevInput.slice(0, -1) + value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
    // Handle digits
    else if (!isNaN(value) || value === '.') {
      handleDigitInput(value);
    }
  
    setLastClicked(value);
  };
  
  
  return (
    <div className="App">
      <div className="btns">
        {op.map(y => (
          <button key={y.id} onClick={handleClick} value={y.operator} id={y.id}>
            {y.operator}
          </button>
        ))}
        {numbers.map(x => (
          <button key={x.id} onClick={handleClick} value={x.number} id={x.id}>
            {x.number}
          </button>
        ))}
        <button id="decimal" onClick={handleDecimal}>
          .
        </button>
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="equals" onClick={calculate}>
          =
        </button>
        <div id="display">{input}</div>
      </div>
    </div>
  );
}