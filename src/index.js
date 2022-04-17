import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

//array destructuring
const [,,light]= ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
<App login="anas23badr"/>,
document.getElementById("root")
);



