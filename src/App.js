import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Sobre from './Pages/Sobre'
import Error from './Pages/Error'
import register from './Pages/register'
import log from './Pages/login'

function App () {

  return (
    <Router>
      <Routes>
        <Route path= '/home' Component={ Home }/>
        <Route path= '/Contato' Component={ Contato }/>
        <Route path= '/Sobre' Component={ Sobre }/>
        <Route path= '/Error' Component={ Error }/>
        <Route path= '/register' Component={ register }/>
        <Route path= '/' Component={ log }/>


      </Routes>
    </Router>

  );

}
export default App;