import React, { useState } from "react";
import './Inscrire.css';
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import { Navbar_internaut } from './home/Navbar_internaut';
import { Buttom } from './home/Buttom';
import Axios from 'axios';

export const Inscrire = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const navigateTo = useNavigate();

    const createUser = (event) => {
        event.preventDefault();
        
        // Client-side validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Invalid email format");
            return;
        }
    
        if (password.length < 4) {
            alert("Password must be at least 4 characters");
            return;
        }
    
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        Axios.post('http://localhost:3002/Inscrire', {
            Email: email,
            Name: name,
            Password: password,
            Confirmpassword: confirmpassword
        })
        .then((response) => {
            console.log('User has been created', response);
            alert('Utilisateur creé avec succeé');
            navigateTo('/Connecter');
        })
        .catch((error) => {
            console.error('il y a une erreur!', error);
            alert('il y a une erreur:' + error.response.data.message);
        });
    };

    return (
        <>
        <Navbar_internaut/>
        <fieldset className="finscrire">
            <form onSubmit={createUser}>
                <div className="container1">
                    <div className="text">
                        <Link to="/Connecter"><button type="button">Connecter</button></Link>|
                        <Link to="/Inscrire"><button type="button">Inscrire</button></Link>
                    </div>
                    <h2>Créer un compte</h2>
                    <div className="inputs1">
                        <input
                            type="email"
                            name="email"
                            placeholder="Entrez E-mail"
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Entrez nom"
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Choisir mot de passe"
                            required
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <input
                            type="password"
                            name="confirmpassword"
                            placeholder="Confirmer mot de passe"
                            required
                            onChange={(event) => setConfirmpassword(event.target.value)}
                        />
                        <button className="submit" type="submit">S'inscrire</button>
                    </div>
                    <p><a href="/Connecter">J'ai un compte! Se connecter</a></p>
                </div>
            </form>
        </fieldset>
        <Buttom/>
        </>
        
    );
};
