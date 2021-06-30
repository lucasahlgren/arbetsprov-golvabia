import React from 'react';

export default function Slide({ slide }) {
    return (
        <div className="top-carousel-item d-flex justify-content-center">
            <div className="top-carousel-group d-flex align-items-center justify-content-center">
            <div className="top-carousel-text p-3">
                <h1 className="font-serif">{slide.text}</h1>
                {slide.button !== null ? <div><br /><a href={slide.href} className="button1">{slide.button}</a></div> : null}
            </div>
            <img src={slide.img} className="d-block w-100" alt={`Slidebild ${slide.id}`} />
        </div>
        </div>
    )
}
