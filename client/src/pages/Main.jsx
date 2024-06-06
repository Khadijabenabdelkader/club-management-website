
import React from "react";
import "../App.css";
import "./home/Home.css";
import { Navbar_internaut } from './home/Navbar_internaut';
import { Buttom } from './home/Buttom';
import { Contact } from "./home/Contact";
import logoisimm from './../assets/logoisimm.png';
import cpu from './../assets/cpu.png';
import ieee from './../assets/ieee.png';
import atia from './../assets/atia.png';
import robotique from './../assets/robotique.png';
import englishtic from './../assets/englishtics.png';
import microsoft from './../assets/microsoft.png';

export const Main = () => {
    return (
        <>
        <Navbar_internaut/>
        <div className='container4'>
            <img src={logoisimm} alt="image de l'ISIMM" />
            <h2>Gestion des clubs au sein de L'ISIMM</h2>
            <p>Bienvenue sur notre plateforme, la solution ultime pour la gestion efficace et simplifiée 
                    des clubs. Notre mission est de fournir une plateforme intuitive et innovante qui permet aux 
                    clubs l'engagement et la communication au sein de leur communauté.
            </p>
            <div className="objectif_list">
                <h3>Nos Objectifs</h3>
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
            <div className="container5">
                <h2>Clubs auxquels vous pouvez adhérer</h2>
                <div className="club_grid">
                    <div className="club_item">
                        <a href="https://www.facebook.com/Englistics.isimm/" target="_blank" rel="noopener noreferrer">
                            <img src={englishtic} alt="Englistics" />
                        </a>
                        <p>Englistics : Aide à améliorer l'anglais et à développer les compétences interpersonnelles.</p>
                    </div>
                    <div className="club_item">
                        <a href="https://www.facebook.com/CPU.ISIMM" target="_blank" rel="noopener noreferrer">
                            <img src={cpu} alt="CPU" />
                        </a>
                        <p>CPU (Cyber Processing Unit) : Combine formation recherchée et innovation.</p>
                    </div>
                    <div className="club_item">
                        <a href="https://www.facebook.com/ieee.cs.isimm" target="_blank" rel="noopener noreferrer">
                            <img src={ieee} alt="IEEE" />
                        </a>
                        <p>IEEE Computer Society Chapter : Source inégalée d'information, d'inspiration et de collaboration.</p>
                    </div>
                    <div className="club_item">
                        <a href="https://www.facebook.com/people/ATIA-club-ISIMM/100086600541050/" target="_blank" rel="noopener noreferrer">
                            <img src={atia} alt="ATIA" />
                        </a>
                        <p>ATIA : Club universitaire spécialisé en intelligence artificielle avec un but éducatif.</p>
                    </div>
                    <div className="club_item">
                        <a href="https://www.facebook.com/C.R.ISIMM/" target="_blank" rel="noopener noreferrer">
                            <img src={robotique} alt="Robotique" />
                        </a>
                        <p>Club Robotique ISIMM : Groupe de jeunes actifs passionnés par la robotique à l'ISIMM.</p>
                    </div>
                    <div className="club_item">
                        <a href="https://www.facebook.com/MTC.ISIMM/" target="_blank" rel="noopener noreferrer">
                            <img src={microsoft} alt="Microsoft" />
                        </a>
                        <p>Microsoft Tech Club : Promeut la technologie avancée par l'éducation, la pratique et l'innovation.</p>
                    </div>
                </div>
            </div><br/>
            <Contact/>

        <Buttom/>
        </>
                    
    );
  };