import React, { useState } from 'react';
import './Home.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Contact = () => {

    const [nomcomplet, setNomComplet] = useState('');
    const [Tel, setTel] = useState('');
    const [e_mail, setEmail] = useState('');
    const [nomclub, setNomClub] = useState('');
    const [objet, setObjet] = useState('');
    const navigateTo = useNavigate();

    const handleContactSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/Contact', {
            NomComplet: nomcomplet,
            Tel: Tel,
            E_mail: e_mail,
            NomClub: nomclub,
            Objet: objet
        }).then(() => {
            console.log('message recu');
            alert('message recu');
            //navigateTo('/')
        });
    }

    return (
        <div className='contact_container'>
            <h2>Nous sommes toujours <br/>prêts à vous entendre</h2>
            <fieldset className='fcontact'>

                <form onSubmit={handleContactSubmit}>
                    <div className='title'>
                        <h1>Contact</h1>
                    </div>
                    <div className='inputs3'>
                        <input type='text' placeholder='Nom complet' required
                            onChange={(event) => {
                                setNomComplet(event.target.value)
                            }} />
                        <input type='text' placeholder='Telephone' required
                            onChange={(event) => {
                                setTel(event.target.value)
                            }} />
                        <input type='email' placeholder='E-mail' required
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                        <select required onChange={(event) => {
                                setNomClub(event.target.value)
                            }}>
                            <option value="">Sélectionner un club</option>
                            <option value="club Microsoft">club Microsoft</option>
                            <option value="club Robotique">club Robotique</option>
                            <option value="club ATIA">club ATIA</option>
                            <option value="club IEEE">club IEEE</option>
                            <option value="club CPU">club CPU</option>
                            <option value="club Englishtics">club Englishtics</option>
                        </select>
                        <textarea placeholder="Objet" required
                            onChange={(event) => {
                                setObjet(event.target.value)
                            }} />
                        <button type='submit'>Envoyer</button>
                    </div>
                </form>

            </fieldset>
        </div>
    )
}
