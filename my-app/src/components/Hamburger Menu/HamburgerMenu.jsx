import React, {useState} from 'react';
import './HamburgerMenu.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';

import {Link} from 'react-router-dom';

function HamburgerMenu() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color:'#000000'}}>
        <div className="hamburger-navbar">
            <Link to="#" className="hamburger-menu">
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="hamburger-menu">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default HamburgerMenu;
