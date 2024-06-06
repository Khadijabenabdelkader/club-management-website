import React from "react";
import './Home.css';
import { Navbar } from "./Navbar";
import { Buttom } from './Buttom';
import photoprofil from './../../assets/photoprofil.jpg';
export const Profile=()=>{

    return (
        <div>
            <Navbar/>
            <div className="profile_container">
                <div className="photoprofil">
                    <img src={photoprofil} alt="photo de profile"/>
                </div>
                <div className="infoprofil">
                    <h1>Khadija Ben Abdelkader</h1>
                    <span>
                        N° d'inscription: 14586927<br/>
                        E_mail: khadijabenabdelkader1206@gmail.com<br/>
                        Club: Englichtics<br/>
                        Role: membre

                    </span>
                    <h2>Informations Educatives</h2>
                    <span>
                        Cycle: Licence<br/>
                        Niveau: 3éme<br/>
                        Spécialite: Licence en science de l'informatique( génie logiciel)
                    </span>
                </div>
            </div>
            <Buttom/>
        </div>
        
    );
};