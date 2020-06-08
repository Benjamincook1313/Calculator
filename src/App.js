import React, { useState } from 'react';
import './App.css';

function App() {

  const [answer, setAnswer] = useState(0)


  return (
    <div className="App">
      <h1>Calculater</h1>
      <div className='brdr'>
      <div className='top-row'>
        <div className='display'>{answer}</div>
        <button className='clr'>Clear</button>
      </div>
      <div className='numbers'>
        <button className='num'>1</button>
        <button className='num'>2</button>
        <button className='num'>3</button>
        <button className='num'>/</button>
        <button className='num'>4</button>
        <button className='num'>5</button>
        <button className='num'>6</button>
        <button className='num'>X</button>
        <button className='num'>7</button>
        <button className='num'>8</button>
        <button className='num'>9</button>
        <button className='num'>+</button>
        <button className='num'>%</button>
        <button className='num'>0</button>
        <button className='num'>.</button>
        <button className='num'>-</button>
        <button className='num equal'>=</button>

      </div>
      </div>
      
    </div>
  );
}

export default App;
