import React, { useState } from 'react';
import './App.css';

function App() {

  const [answer, setAnswer] = useState('')
  const [display, setDisplay] = useState([])

  const calculate = () => {
    // concat numbers together
    console.log(display)
    let arr = [...display]
    let newArr = []
    let final = []
    for(let i=0; i<display.length; i++){
      if(isNaN(arr[i])){
        newArr.push(arr[i])
      }else if(!isNaN(arr[i]) && !isNaN(arr[i - 1]) && arr[i -1]){
        let num1 = arr[i]
        let num2 = arr[i-1]
        newArr.shift()
        newArr.push('' + num2 + num1)
      }else{
        newArr.push(arr[i])
      }
    }
    // order of operations and solve 
    console.log(newArr)
    for(let i=0; i<newArr.length; i++){
      if(newArr[i] == '*'){
        newArr[i-1] * 
      }
    }
  }

  const equation = (val) => {
    const arr = [...display]
    arr.push(val)
    setDisplay(arr)
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
        <button className='num equal' onClick={calculate()}>=</button>

      </div>
      </div>
      
    </div>
  );
}

export default App;
