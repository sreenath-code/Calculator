import React from "react";
import '../styles/Calculator.cssgot'
const Calculator=()=>{

  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };
    return(

      <div className="App">
      <h1>Addition Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="result">Result: {result}</div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    )
}

export default Calculator;





