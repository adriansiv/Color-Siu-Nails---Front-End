import React from 'react';
import './Slider.css'

function Slider({img}) {

    const firstImg = img.slice(0,1);
    const restOfImg = img.slice(1, img.length -1);
    console.log(restOfImg)
    return (
        <div className="slider-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="slider-image" src={firstImg[0].image} className="d-block w-100" alt={firstImg[0].alt}/>
                    </div>
                    {restOfImg.map((item, index) => {
                        return (
                            <div key={index} className="carousel-item">
                                <img id="slider-image" src={item.image} className="d-block w-100" alt={item.alt}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Slider;
