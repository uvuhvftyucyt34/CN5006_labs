import { useState } from "react"; // Used to create state variables with React
import "./App.css"; // Style sheet defined in App.css
 
function ClickCounter() {
  const [count, setCount] = useState(0); // Variable count & function setCount created with useState (count initialized as 0)
 
  const ClickHandle = () => { 
    setCount((prevCount) => prevCount + 1); // When function setCount called, increment count by 1
  }; 
 
  return ( 
    <div className="App-header"> 
      <h1>Click Count: {count}</h1> 
 
      <button 
        type="button" 
        onClick={ClickHandle} // When button is clicked, call function setCount
      > 
        Click Me 
      </button> 
    </div> 
  ); 
} 
 
export default ClickCounter