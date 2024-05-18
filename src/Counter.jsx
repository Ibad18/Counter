import { useState } from 'react'

function Counter() {
  let [counter, setCounter] = useState(20);
  let btnStyle = {textAlign: 'center', cursor: 'pointer', margin: '20px', backgroundColor: 'green', border: 'none', color: 'white', borderRadius: '5px', padding: '6px'}
  function incrementHandler(){
    setCounter(counter+1)
  }
  function decrementHandler(){
    if(counter>0){
    setCounter(counter-1)
    }
    else(setCounter(0))
  }
  function resetHandler(){
    setCounter(0)
  }
  return (
    <> 
  
    <h1 style={{textAlign: 'center'}}>{counter}</h1>
    <div style={{width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <button style={btnStyle} onClick={resetHandler}>Reset</button>
    <button style={btnStyle} onClick={incrementHandler}>Increment</button>
    <button style={btnStyle} onClick={decrementHandler}>Decrement</button>
    </div>
    </>
  )
}

export default Counter
