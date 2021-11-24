import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-media-container">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fas fa-phone-square"></i>
            </div>
            <div className="menu-footer-container">
                <ul className='menu-footer'>
                    <Link className="menu-footer-elements" to="/nosotros">
                        <li>Nosotros</li>
                    </Link>
                    <Link className="menu-footer-elements" to="/servicios">
                        <li>Servicios</li>
                    </Link>
                    <Link className="menu-footer-elements" to="/galeria">
                        <li>Galería</li>
                    </Link>
                    <Link className="menu-footer-elements" to="/contacto">
                        <li>Contacto</li>
                    </Link>
                    <Link className="menu-footer-elements" to="/reserva">
                        <li>Reserva</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};

export default Footer;

