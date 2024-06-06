import React from "react";
import './Connecter.css';
import '../App.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Inscrire } from './Inscrire';
import { Navbar_internaut } from './home/Navbar_internaut';
import { Buttom } from './home/Buttom';
import  Axios  from "axios";
import './home/Create_club';
import {Apropos} from './home/Apropos';



export const Connecter = () => {
    // useState hooks to store inputs
    const [loginname, setLoginName] = useState('');
    const [loginpassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/Connecter', {
            LoginName: loginname,
            LoginPassword: loginpassword,
        }).then((response) => {
            console.log(response.data);
            if (response.data.message) {
                alert("Erreur: informations inexistantes");
                navigateTo('/Connecter');
            } else {
                navigateTo('/Apropos');
            }
        }).catch((error) => {
            console.error('There was an error!', error);
            alert('There was an error: ' + error.message);
        });
    };

    const create_club = (e) => {
        e.preventDefault();
        navigateTo('/Create_club');
    };

    return (
        <>
        <Navbar_internaut/>
        <fieldset className="fconnecter">
            <form className="form">
                <div className="container1">
                    <div className="text">
                        <Link to="/Connecter"><button type="button">Connecter</button></Link>|
                        <Link to="/Inscrire"><button type="button">Inscrire</button></Link>
                    </div>
                    <h1>Bienvenue</h1>
                    <div className="inputs1">
                        <input 
                            type="text"  
                            placeholder="Entrez le nom" 
                            required
                            onChange={(event) => setLoginName(event.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Choisir mot de passe" 
                            required
                            onChange={(event) => setLoginPassword(event.target.value)}
                        />
                        <p className="forgetpassword">
                            <a href="#">Mot de passe oublié</a>
                        </p>
                        <button 
                            className="submit" 
                            type="submit"  
                            onClick={loginUser}
                        >
                            Se connecter
                        </button>                
                    </div>
                    <p><a href="/Inscrire">Je n'ai pas de compte! S'inscrire</a></p>
                    <button 
                        type="button" 
                        onClick={create_club}
                    >
                        Création de club
                    </button>
                </div>
            </form>
        </fieldset>
        <Buttom/>
        </>
        
    );
};