import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Connecter } from '../Connecter';
import { Inscrire } from '../Inscrire';
import { Main } from '../Main';

export const Navbar_internaut=()=>{
    return(
        <nav className='Navbar_internaut'>
                <div className='clubName'>
                <p>ISIMM'S CLUB   </p>
                </div>
                <div className='links'>
                    <Link to="/">Accueil</Link>
                    <Link to="/Connecter">Connecter</Link>
                    <Link to="/Inscrire">Inscrire</Link>

                </div>
            </nav>

        

    )
}