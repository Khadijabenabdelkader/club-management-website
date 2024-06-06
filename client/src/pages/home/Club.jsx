import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Buttom } from './Buttom';
import cpu from './../../assets/cpu.png';
import ieee from './../../assets/ieee.png';
import atia from './../../assets/atia.png';
import robotique from './../../assets/robotique.png';
import englishtic from './../../assets/englishtics.png';
import microsoft from './../../assets/microsoft.png';

export const Club = () => {
    return (
        <div>
            <Navbar />
            <div className="clubs_section">
                <h2>Nos Clubs:</h2>
                <div className="club_container">
                    <div className="club_box">
                        <a href="https://www.facebook.com/Englistics.isimm/" target="_blank" rel="noopener noreferrer">
                            <img src={englishtic} alt="image de club Englishtics" />
                        </a>
                    </div>
                    <div className="club_box">
                        <a href="https://www.facebook.com/CPU.ISIMM" target="_blank" rel="noopener noreferrer">
                            <img src={cpu} alt="image de club CPU" />
                        </a>
                    </div>
                    <div className="club_box">
                        <a href="https://www.facebook.com/ieee.cs.isimm" target="_blank" rel="noopener noreferrer">
                            <img src={ieee} alt="image de club IEEE" />
                        </a>
                    </div>
                    <div className="club_box">
                        <a href="https://www.facebook.com/people/ATIA-club-ISIMM/100086600541050/" target="_blank" rel="noopener noreferrer">
                            <img src={atia} alt="image de club ATIA" />
                        </a>
                    </div>
                    <div className="club_box">
                        <a href="https://www.facebook.com/C.R.ISIMM/" target="_blank" rel="noopener noreferrer">
                            <img src={robotique} alt="image de club Robotique" />
                        </a>
                    </div>
                    <div className="club_box">
                        <a href="https://www.facebook.com/MTC.ISIMM/" target="_blank" rel="noopener noreferrer">
                            <img src={microsoft} alt="image de club Microsoft" />
                        </a>
                    </div>
                </div>
            </div><br/>
            <Buttom />
        </div>
    );
};
