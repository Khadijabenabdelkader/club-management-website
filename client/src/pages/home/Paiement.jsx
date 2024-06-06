import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "./Navbar";
import { Buttom } from './Buttom';
import Axios from 'axios';

export const Paiement = () => {
    const [num, setNum] = useState('');
    const [dateValue, setDateValue] = useState(new Date());
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigateTo = useNavigate();

    

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation checks
        if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(num)) {
            alert('Numéro de la carte doit contenir 16 chiffres avec des espaces entre chaque 4 chiffres.');
            return;
        }
        if (!/^\d{3}$/.test(code)) {
            alert('Code de sureté doit contenir exactement 3 chiffres.');
            return;
        }
        if (name !== name.toUpperCase()) {
            alert('Le nom du détenteur doit être en majuscules.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Format de l'email invalide");
            return;
        }

        Axios.post('http://localhost:3002/Paiement', {
            Num: num,
            DateValue: dateValue,
            Code: code,
            Name: name,
            Email: email
        })
        .then((response) => {
            console.log('paiement fait avec succès', response);
            alert('paiement fait avec succès');
        })
        .catch((error) => {
            console.error('il y a une erreur!', error);
            alert('il y a une erreur: ' + error.response.data.message);
        });
    };

    return (
        <>
            <Navbar />
            <div className='retour'>
            </div>
            <fieldset className='fpaiement'>
                <form onSubmit={handleSubmit}>
                    <div className='title'>
                        <h1>Paiement en Ligne</h1>
                    </div>
                    <div className='inputsp'>
                        <input
                            type='text'
                            name='num'
                            placeholder='Numéro de la carte E_dinars'
                            required
                            onChange={(event) => setNum(event.target.value)}
                            
                        />
                        <input
                            type='date'
                            name='dateValue'
                            required
                            onChange={(event) => setDateValue(event.target.value)}
                            
                        />
                        <input
                            type='text'
                            name='code'
                            placeholder='Code de sureté de la carte'
                            required
                            onChange={(event) => setCode(event.target.value)}
                            
                        />
                        <input
                            type='text'
                            name='name'
                            placeholder='Le nom du détenteur'
                            required
                            onChange={(event) => setName(event.target.value.toUpperCase())}
                            
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Adresse e-mail'
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            
                        />
                        <button type='submit'>Paiement</button>
                    </div>
                </form>
            </fieldset>
            <Buttom />
        </>
    );
};
