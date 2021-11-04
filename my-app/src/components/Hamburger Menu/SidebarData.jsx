import React from 'react';
import * as AiIcons from 'react-icons/ai'; // X  ------ "AiFillBook"
import * as SiIcons from 'react-icons/si'; // About Us "SiAboutdotme"
import * as MdIcons from 'react-icons/md'; // Services "MdCleaningServices"
import * as GrIcons from 'react-icons/gr'; // Gallery "GrGallery"



export const SidebarData = [
    {
        title: 'Nosotros',
        path: '/nosotros',
        icon: <SiIcons.SiAboutdotme/>,
        cName: 'nav-text'
    },
    {
        title: 'Servicios',
        path: '/servicios',
        icon: <MdIcons.MdCleaningServices/>,
        cName: 'nav-text'
    },
    {
        title: 'Galería',
        path: '/galeria',
        icon: <GrIcons.GrGallery/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/contacto',
        icon: <GrIcons.GrContact/>,
        cName: 'nav-text'
    },
    {
        title: 'Reserva',
        path: '/reserva',
        icon: <AiIcons.AiFillBook/>,
        cName: 'nav-text'
    },
]

