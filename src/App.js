import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import{Home, About, Events, Contact, Whoops404,Services,CompanyHistory,Location} from './pages.js'

function App() {
    return(
      <div>
        <Routes>
          <Route path="react-essentials/" element={<Home />}/>
          <Route path="react-essentials/about" element={<About />}>
            <Route path="services" element={<Services/>}/>
            <Route path="companyhistory" element={<CompanyHistory/>}/>
            <Route path="location" element={<Location/>}/>
          </Route>
          <Route path="react-essentials/events" element={<Events />}/>
          <Route path="react-essentials/contact" element={<Contact />}/>
          <Route path="*" element={<Whoops404 />}></Route>
        </Routes>
      </div>
    )
}

export default App;
