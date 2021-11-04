import React from 'react'
import PriceCard from '../Dinamic components/Price Card/PriceCard';
import './Services.css';

import firstImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.50.52.png';
import secondImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.52.00.png';
import thirdImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.52.48.png';
import fourthImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.53.23.png';
import fifthImg from '../../img/HandsImg/Screenshot 2021-10-20 at 11.53.23.png';

function Services() {
    
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
    ]
    const otherServices = [
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
    ]
    return (
        <div>
            <div className="services-container">
                <PriceCard data={dataImg}/>
                <div className="hr-container">
                    <hr></hr>
                    <h2>Other Services</h2>
                    <hr></hr>
                </div>
                <PriceCard data={otherServices} className="other-services-container"/>
            </div>
        </div>
    )
}

export default Services;
