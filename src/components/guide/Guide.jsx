import React from 'react';
import guide from '../../assets/images/golvguide.jpg';
import './Guide.css';

export default function Guide() {
    return (
        <div className="guide">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-3">
                        <div className="guide-container">
                            <div className="guide-group center-container">
                                <div className="guide-text p-3">
                                    <h1 className="font-serif">Vilket golv passar mig?</h1>
                                    <br />
                                    <p>Vi har magiska kampanjer just nu! Helt klart värt ett besök enligt oss.</p>
                                    <br/>
                                    <a href="/kampanjer" className="button2">Till golvguiden</a>
                                </div>
                            </div>
                            <img className="img-fluid" src={guide} alt="Katalogbild" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
