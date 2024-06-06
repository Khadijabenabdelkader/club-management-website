import React from "react";
import './Home.css';
import logoisimm from './../../assets/logoisimm.png';
import { Navbar } from "./Navbar";
import { Buttom } from './Buttom';


export const Apropos = () => {
    
    return (
        <div className='main'>
            <Navbar/>
            <div className='container4'>
                <img src={logoisimm} alt="image de l'ISIMM" />
                <h2>Gestion des clubs au sein de L'ISIMM</h2>
                <p>Bienvenue sur notre plateforme, la solution ultime pour la gestion efficace et simplifiée 
                    des clubs. Notre mission est de fournir une plateforme intuitive et innovante qui permet aux 
                    clubs l'engagement et la communication au sein de leur communauté.
                </p>
                <div className="objectif_list">
                    <h3>Nos Objectifs:</h3>
                    <div className="lists-container">
                        <p>
                            <tr>
                                <td><li> Centralisation des informations du club.</li></td>
                                <td><li> Facilitation de la communication interne au sein du club.</li></td>          
                            </tr>
                            <tr>
                                <td><li>Promotion des événements et actualités.</li></td>
                                <td><li>Renforcement de l’engagement des membres.</li></td>
                            </tr>
                            <tr>
                                <td><li>Amélioration de l’image de l’ISIMM.</li></td>
                            </tr>    
                        </p><br/>
                        
                    </div>
                </div>                
            </div>
            <Buttom/>
        </div>
    );
}

