import React from 'react';
import './App.css';


function SecretComponent(){
  return <h1>Secret information for authorized users only</h1>
}
function RegularComponent(){
  return <h1>Everyone can see this component</h1>
}
function App({authorized}) {//props object destructuring {property1, property2,...}
  
    /*if(props.authorized){
      return <SecretComponent/>
    }
    else{
      return <RegularComponent/>
    }*/
    return(
      <>
      {authorized? <SecretComponent/> : <RegularComponent/>}
      </>
    )
   
  
}

export default App;
