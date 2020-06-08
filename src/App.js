import React, { useState } from 'react';
import './App.css';

function App() {

  const [answer, setAnswer] = useState('')
  const [display, setDisplay] = useState([])

  const calculate = (num1, sym, num2) => {
    let answer = eval(num1, sym, num2)
    setAnswer(answer)
  }

  const equation = (val) => {
    let temp = [...display]
    temp.push(val)
    setDisplay(temp)
  }

  return (
    <div className="App">
      <h1>Calculater</h1>
      <div className='brdr'>
      <div className='top-row'>
        <div className='display'>{answer? answer: display}</div>
        <button className='clr' onClick={() => setDisplay([])}>Clear</button>
      </div>
      <div className='numbers'>
        <button className='num' onClick={() => equation(1)}>1</button>
        <button className='num' onClick={() => equation(2)}>2</button>
        <button className='num' onClick={() => equation(3)}>3</button>
        <button className='num' onClick={() => equation('/')}>/</button>
        <button className='num' onClick={() => equation(4)}>4</button>
        <button className='num' onClick={() => equation(5)}>5</button>
        <button className='num' onClick={() => equation(6)}>6</button>
        <button className='num' onClick={() => equation('*')}>x</button>
        <button className='num' onClick={() => equation(7)}>7</button>
        <button className='num' onClick={() => equation(8)}>8</button>
        <button className='num' onClick={() => equation(9)}>9</button>
        <button className='num' onClick={() => equation('+')}>+</button>
        <button className='num' onClick={() => equation('%')}>%</button>
        <button className='num' onClick={() => equation(0)}>0</button>
        <button className='num' onClick={() => equation('.')}>.</button>
        <button className='num' onClick={() => equation('-')}>-</button>
        <button className='num equal'>=</button>

      </div>
      </div>
      
    </div>
  );
}

export default App;
