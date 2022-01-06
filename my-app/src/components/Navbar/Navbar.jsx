import React from 'react';
import './Navbar.css';
import HamburgerMenu from '../Hamburger Menu/HamburgerMenu';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src={logo} alt="logo" className='logo'/>
            <ul className='menu-navbar'>
                <Link className="menu-navbar-elements" to="/aboutus">
                    <li>Nosotros</li>
                </Link>
                <Link className="menu-navbar-elements" to="/services">
                    <li>Servicios</li>
                </Link>
                <Link className="menu-navbar-elements" to="/gallery">
                    <li>Galería</li>
                </Link>
                <Link className="menu-navbar-elements" to="/contact">
                    <li>Contacto</li>
                </Link>
                <Link className="menu-navbar-elements" to="/booking">
                    <li>Reserva</li>
                </Link>
            </ul>
            <HamburgerMenu />
        </div>
    )
};

export default Navbar;