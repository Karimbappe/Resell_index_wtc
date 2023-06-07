import React, { useState } from 'react';
import './Navbar.css';

import logo from '../images/logo-wtc.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiShears } from "react-icons/gi";



function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img className='logoWtc' src={logo} alt="WhenToCop?" />
        </div>
        <ul className='app__navbar-links'>
            <li><a href="acceuil">ACCUEIL</a></li>
            <li><a href="drop">DROP</a></li>
            <li><a href="news">NEWS</a></li>
            <li><a href="contact">CONTACT</a></li>
            <button className='app__navbar-button'>TÉLÉCHARGE L’APPLICATION</button>
        </ul>

        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='#00FFB0' fontSize={27} onClick={() => setToggleMenu(true)}/>

            {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                <GiShears fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                <ul className='app__navbar-smallscreen-linksToggle'>
                    <li><a href="acceuil">ACCUEIL</a></li>
                    <li><a href="drop">DROP</a></li>
                    <li><a href="news">NEWS</a></li>
                    <li><a href="contact">CONTACT</a></li>
                    <button className='app__navbar-button'>TÉLÉCHARGE L’APPLICATION</button>
                </ul>
            </div>
            )}

        </div>
        
    </nav>
    );
}

export default Navbar;