import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Inscrire } from './pages/Inscrire';
import { Connecter } from './pages/Connecter';
import { Create_club } from './pages/home/Create_club';
import { Contact } from './pages/home/Contact';
import { Navbar_internaut } from './pages/home/Navbar_internaut';
import { Paiement } from "./pages/home/Paiement";
import { Apropos } from './pages/home/Apropos';
import { Profile } from './pages/home/Profile';
import { Club } from './pages/home/Club';
import { Evenement } from './pages/home/Evenement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Inscrire' element={<Inscrire/>}/>
          <Route path='/Connecter' element={<Connecter/>}/>
          <Route path='/Create_club' element={<Create_club/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Navbar_internaut' element={<Navbar_internaut/>}/>
          <Route path='/Paiement' element={<Paiement/>}/>
          <Route path='/Apropos' element={<Apropos/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Club' element={<Club/>}/>
          <Route path='/Evenement' element={<Evenement/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;