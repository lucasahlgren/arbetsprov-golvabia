import React, { useRef } from 'react';
import epok from '../../assets/images/epok.jpg';
import everest from '../../assets/images/everest.jpg';
import invite from '../../assets/images/invite.jpg';
import canova from '../../assets/images/canova.jpg';
import casablanca from '../../assets/images/casablanca.jpg';
import ceppo from '../../assets/images/ceppo.jpg';
import CampaignProduct from '../products/CampaignProduct';
import NewProduct from '../products/NewProduct';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import './PopularProducts.css';

export default function PopularProducts() {

    const sliderRef = useRef();

    const scrollRight = () => {
        var scrollWidth = sliderRef.current.clientWidth;
        sliderRef.current.scrollLeft += scrollWidth;
    };
    const scrollLeft = () => {
        var scrollWidth = sliderRef.current.clientWidth;
        sliderRef.current.scrollLeft += -scrollWidth;
    };

    return (
        <div className="popular-products">
            <h1 className="header-serif font-serif mb-5">Populärt hos oss</h1>
            <div className="container d-flex align-items-center">
                <div className="left-arrow-button" onClick={scrollLeft}>
                    <Arrow className="left-arrow-icon p-2 align-items-center" />
                </div>
                <div className="products-slider" ref={sliderRef}>
                    <div className="d-flex">
                        <NewProduct title="Epok-Red (30x30)" price="499 kr/&#13217;" options="Finns i 10+ varianter" image={epok} grandSelection={false} />
                        <NewProduct title="Invite-Pearl (60x90)" price="299 kr/&#13217;" options="Finns i 10+ varianter" image={invite} grandSelection={false} />
                        <CampaignProduct title="Everest-Dark 60x60" price="799 kr/&#13217;" options="Finns i 10+ varianter" image={everest} grandSelection={true} />
                        <NewProduct title="Canova Emperador 60x60" price="499 kr/&#13217;" options="Finns i 10+ varianter" image={canova} grandSelection={false} />
                        <NewProduct title="Casablanca Marin Blank 10x10" price="299 kr/&#13217;" options="Finns i 10+ varianter" image={casablanca} grandSelection={false} />
                        <CampaignProduct title="Ceppo di Gré" price="799 kr/&#13217;" options="Finns i 10+ varianter" image={ceppo} grandSelection={true} />
                    </div>
                </div>
                <div className="right-arrow-button" onClick={scrollRight}>
                    <Arrow className="right-arrow-icon p-2 align-items-center" />
                </div>
            </div>
        </div>
    )
}
