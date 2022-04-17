import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import{Home, About, Events, Contact} from './pages.js'

function App() {
    return(
      <div>
        <Routes>
          <Route path="react-essentials/" element={<Home />}></Route>
          <Route path="react-essentials/about" element={<About />}></Route>
          <Route path="react-essentials/events" element={<Events />}></Route>
          <Route path="react-essentials/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    )
}

export default App;
