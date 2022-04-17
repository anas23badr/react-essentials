import React, { useReducer } from 'react';
import './App.css';


function App() {
  const [checked, toggle]= useReducer(
    (checked)=>(!checked),
      false
    );// useReducer is like a useState. I takes in  two paramter. Second parameter is the initial state, and the first parameter is a call back function used to toggle the state change.It can be called onClick or change event
  
  return(
    <>
    <input type="checkBox" value={checked} onChange={toggle}/>
    <p>{checked ? "checked": "not checked"}</p>
    </>
   
  )
}

export default App;
