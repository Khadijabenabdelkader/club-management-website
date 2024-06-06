import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

export const DropDownProfile= ()=>{
    return(
        <div className='dropdown-menu'>
            <ul>
                <Link to="/Profile"><li>Profile</li></Link>
                <Link to="/Connecter"><li>Déconnecter</li></Link> 
            </ul>
        </div>
    )
}
