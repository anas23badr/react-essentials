import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
<Router>
<App/>
</Router>,
document.getElementById("root")
);

//Enclosing App component inside router give it all the properties of router like browser history, location etc

