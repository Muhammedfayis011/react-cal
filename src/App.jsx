import React, { useState } from 'react';
import './App.css'; 





  const App = () => {
    const [value, setValue]=useState("")
    const handleClick=(number)=>{
        setValue(value + number)
    }
   
    const calculate=()=>{
        setValue(eval(value).toString())
    }
    const deleteLast =()=>{
        setValue(value.slice(0, -1))
    }


  return (
    <div className="main">
    <div className="cal">
      <div className="cal-top">{value}</div> 

      <div className="cc">
        <div className="aa" onClick={deleteLast}>DEL</div>
        <div className="aa" onClick={() => handleClick('/')}>/</div>
      </div>

      <div className="cal-main">
        <div className="grid" onClick={() => handleClick('7')}>7</div>
        <div className="grid" onClick={() => handleClick('8')}>8</div>
        <div className="grid" onClick={() => handleClick('9')}>9</div>
        <div className="grid" onClick={() => handleClick('*')}>*</div>

        <div className="grid" onClick={() => handleClick('4')}>4</div>
        <div className="grid" onClick={() => handleClick('5')}>5</div>
        <div className="grid" onClick={() => handleClick('6')}>6</div>
        <div className="grid" onClick={() => handleClick('+')}>+</div>

        <div className="grid" onClick={() => handleClick('1')}>1</div>
        <div className="grid" onClick={() => handleClick('2')}>2</div>
        <div className="grid" onClick={() => handleClick('3')}>3</div>
        <div className="grid" onClick={() => handleClick('-')}>-</div>

        <div className="grid" onClick={() => handleClick('0')}>0</div>
        <div className="grid" onClick={() => handleClick('.')}>.</div>
        <div className="grid" onClick={calculate}>=</div>
      </div>
    </div>
  </div>
  );
};

export default App;
