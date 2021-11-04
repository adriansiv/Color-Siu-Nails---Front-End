import React from 'react';
import './PriceCard.css';

function PriceCard({data}) {

    return (
        <>
        <div className="price-card-container">
            {data.map((item, index) => {
                return (
            <div  
                key={index} 
                className="price-card">
                <img src={item.img} alt={item.alt}/>
                <h3>{item.title}</h3>
                <h4>Precio: {item.price}</h4>                  
                <p>{item.text}</p>
            </div>
                )
            })}
            
        </div>    
        </>
    )
}

export default PriceCard;
