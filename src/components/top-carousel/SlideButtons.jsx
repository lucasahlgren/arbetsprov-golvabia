import React from 'react';

export default function SlideButtons({ slideList, index, updateSlide }) {

    var buttons = slideList.map((button) => <button key={button.id} type="button" onClick={updateSlide} data-id={button.id} data-active={index === button.id} className="top-carousel-button" ></button>)

    return (
        <div className="top-carousel-indicators">
            {buttons}
        </div>
    )
}
