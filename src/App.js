import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [emotion, setEmotion]= useState("happy");  
  const [secondary, setSecondary]= useState("tired");
  useEffect(()=>{
    console.log(`It's ${emotion} around here!`);
  }, [emotion]); //useEffect is used to track the change in  state , a call back funtion is called when the state changes..it can be used to console log the cahnges or can be used for effects
  useEffect(()=>{
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);
  return(
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={()=>setEmotion("happy")}>Make Happy</button>
    <button onClick={()=>setSecondary("Crabby")}>Make Crabby</button>
    <button onClick={()=>setEmotion("Frustrated")}>Frustrate</button>
    <button onClick={()=>setEmotion("Enthusiastic")}>Enthuse</button>
    </>
  )
}

export default App;
