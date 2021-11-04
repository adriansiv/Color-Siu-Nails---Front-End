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
                <Link className="menu-navbar-elements" to="/nosotros">
                    <li>Nosotros</li>
                </Link>
                <Link className="menu-navbar-elements" to="/servicios">
                    <li>Servicios</li>
                </Link>
                <Link className="menu-navbar-elements" to="/galeria">
                    <li>Galería</li>
                </Link>
                <Link className="menu-navbar-elements" to="/contacto">
                    <li>Contacto</li>
                </Link>
                <Link className="menu-navbar-elements" to="/reserva">
                    <li>Reserva</li>
                </Link>
            </ul>
            <HamburgerMenu />
        </div>
    )
};

export default Navbar;