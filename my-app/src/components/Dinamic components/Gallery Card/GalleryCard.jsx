import React from 'react';
import './GalleryCard.css';

function GalleryCard({data}) {
    return (
        <>
                <div className="gallery-card-container">
                {data.map((item, index) => {
                    return (
                <div  
                    key={index} 
                    className="gallery-card">
                    <img src={item.img} alt={item.alt}/>
                </div>
                    )
                })}
                
            </div>   
        </>
    )
}

export default GalleryCard;
