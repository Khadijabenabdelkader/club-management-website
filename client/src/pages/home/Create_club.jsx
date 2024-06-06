import React, { useState } from 'react';
import './Home.css';
import { Navbar_internaut } from './Navbar_internaut';
import { Buttom } from './Buttom';
import Axios from 'axios';

export const Create_club = () => {
    const [isclicked, setIsClicked] = useState(0);
    const [clubData, setClubData] = useState({
        Nom: '',
        Tel: '',
        Mail: '',
        N_inscrit: '',
        NomClub: '',
        Objective: '',
        Members: [{ nom: '', poste: '', tel: '', mail: '' }]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClubData({ ...clubData, [name]: value });
    };

    const handleMemberChange = (index, e) => {
        const { name, value } = e.target;
        const newMembers = clubData.Members.slice();
        newMembers[index][name] = value;
        setClubData({ ...clubData, Members: newMembers });
    };

    const ajouter = () => {
        setClubData({
            ...clubData,
            Members: [...clubData.Members, { nom: '', poste: '', tel: '', mail: '' }]
        });
        setIsClicked(isclicked + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Mail)) {
            alert("Format de l'email invalide");
            return;
        }
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            alert("Format de l'email invalide");
            return;
        }
        Axios.post('http://localhost:3002/Create_club', clubData)
            .then(() => {
                console.log('Demande de création bien reçue');
                alert('Demande de création bien reçue');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className='main'>
            <Navbar_internaut />
            <div className='container2'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='fCreate_club'>
                        <div className='title'>
                            <h1>Demander de Création de Club</h1>
                        </div>
                        <div className='inputs2'>
                            <div className='input_left'>
                                <input type='text' name='Nom' placeholder='Nom complet' required onChange={handleInputChange} />
                                <input type='text' name='Tel' placeholder='Telephone' required onChange={handleInputChange} />
                                <input type='email' name='Mail' placeholder='E-mail' required onChange={handleInputChange} />
                                <input type='text' name='N_inscrit' placeholder="Numéro d'inscription" required onChange={handleInputChange} />
                            </div>
                            <div className="vertical-line"></div>
                            <div className='input_right'>
                                <input type='text' name='NomClub' placeholder='Nom de club' required onChange={handleInputChange} />
                                <textarea name='Objective' placeholder="Objectif de l'activité" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='table_inputs'>
                            <h2>Membre</h2>
                            <button type='button' onClick={ajouter}>Ajouter</button>
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <td>Nom complet</td>
                                        <td>Poste</td>
                                        <td>Téléphone</td>
                                        <td>E-mail</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clubData.Members.map((membre, index) => (
                                        <tr key={index} className='membre'>
                                            <td><input type='text' name='nom' value={membre.nom} onChange={e => handleMemberChange(index, e)} /></td>
                                            <td><input type='text' name='poste' value={membre.poste} onChange={e => handleMemberChange(index, e)} /></td>
                                            <td><input type='text' name='tel' value={membre.tel} onChange={e => handleMemberChange(index, e)} /></td>
                                            <td><input type='email' name='mail' value={membre.mail} onChange={e => handleMemberChange(index, e)} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='Benvoie'>
                            <button type='submit'>Envoyer demande</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Buttom />
        </div>
    );
};
