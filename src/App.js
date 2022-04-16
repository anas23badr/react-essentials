import React, { useState } from 'react';
import './App.css';


function App() {
  const [emotion, setEmotion]= useState("happy");  // happy is the initial state stored in emotion. setEmotion is the function used to change state of emotion 
  return(
    <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={()=>setEmotion("happy")}>Happy</button>
    <button onClick={()=>setEmotion("Frustrated")}>Frustrate</button>
    <button onClick={()=>setEmotion("Enthusiastic")}>Enthuse</button>
    </>
  )
}

export default App;
