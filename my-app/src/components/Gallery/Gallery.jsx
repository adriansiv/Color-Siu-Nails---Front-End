import React from 'react';
import './Gallery.css';
import GalleryCard from '../Dinamic components/Gallery Card/GalleryCard';
import Slider from '../Dinamic components/Slider/Slider';


import firstImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.50.52.png';
import secondImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.52.00.png';
import thirdImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.52.48.png';
import fourthImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.53.23.png';
import fifthImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.53.23.png';


function Gallery() {

    const HandsImg = [
        {
            image: firstImg,
            alt: "Manicure"
        },
        {
            image: secondImg,
            alt: "Manicure"
        },
        {
            image: thirdImg,
            alt: "Manicure"
        },
        {
            image: fourthImg,
            alt: "Manicure"
        },
        {
            image: fifthImg,
            alt: "Manicure"
        }
    ];

    const dataImg = [
        {
            img: firstImg,
            alt: "img",
            title: "Manos Semipermanente",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
        {
            img: secondImg,
            alt: "img",
            title: "Pies Semipermanentes",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
        {
            img: thirdImg,
            alt: "img",
            title: "Manos normales",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
        {
            img: fourthImg,
            alt: "img",
            title: "Pies Normales",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
        {
            img: fifthImg,
            alt: "img",
            title: "Manos y pies semipermanentes",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
        {
            img: firstImg,
            alt: "img",
            title: "Manos y pies normales",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestiae laudantium.",
            price: "25€"
        },
    ];



    return (
        <>
            <Slider img={HandsImg}/>
            <GalleryCard data={dataImg}/>
        </>
    )
}

export default Gallery;
