import React, { useState, useEffect } from 'react';
import './App.css';

// https://api.github.com/users/anas23badr
function App({login}) {
  console.log(login);
  const [data, setData]=useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then(response=> response.json())
    .then(setData);
  }, []); //we only want fetch data only once on page load thats why []
  if (data){
    return(
      <div> {JSON.stringify(data)} </div>
    )
  } 
  else
  return <div>No user available</div>
   
  
}

export default App;
