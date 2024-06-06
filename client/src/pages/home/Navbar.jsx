import React, {useRef, useState} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {FaUser, FaBell} from 'react-icons/fa';
import { DropDownProfile } from './DropDownProfile';
import { Paiement } from './Paiement';
import { Apropos } from './Apropos';
import { Club } from './Club';
import { Evenement } from './Evenement';


export const Navbar=()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(
        <div className='main'>
            <nav className='Navbar'>
                <div className='clubName'>
                <p>CLUBS DE L'ISIMM</p>
                </div>
                <div className='links'>
                    <Link to="/Club">Club</Link>
                    <Link to="/Evenement">Événement</Link>
                    <Link to="/Apropos">Apropos</Link>
                    <Link to="/Paiement">Paiement</Link>
                </div>
                <div className='react-icons'>
                    
                    <FaBell  className='icon1'/>
                    <FaUser  className='icon2' onMouseUp={toggleDropdown}/>
                </div>
            </nav>
         {isDropdownOpen && (<DropDownProfile/> )}

        </div>
        
    )
}