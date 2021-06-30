import React from 'react';
import { ReactComponent as SEO } from '../../assets/icons/seo.svg';
import { ReactComponent as Location } from '../../assets/icons/pin-location.svg';
import './InspirationResellers.css';

export default function InspirationResellers() {
    return (
        <div className="inspiration-resellers">
            <div className="container">
                <div className="hr-line m-0 mx-1" />
                <div className="container p-5">
                    <div className="d-flex flex-md-row flex-column justify-content-around">
                        <div className="inspiration-resellers-container d-flex align-items-center flex-column justify-content-center">
                            <SEO className="bi-icon" />
                            <h4 className="font-serif pt-3">Bli inspirerad</h4>
                            <br />
                            <a href="/inspiration" className="button1 btn-black">Se inspiration</a>
                        </div>
                        <div className="vr-line m-0 mx-1" />
                        <div className="inspiration-resellers-container d-flex align-items-center flex-column justify-content-center ">
                            <Location className="bi-icon" />
                            <h4 className="font-serif pt-3">Hitta återförsäljare</h4>
                            <br />
                            <a href="/aterforsaljare" className="button1 btn-black">Till återförsäljare</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
