import React from 'react';
import campaign from '../../assets/images/kampanj.jpg';
import './Campaigns.css';

export default function Campaigns() {
    return (
        <div className="campaigns">
            <div className="container">
                <div className="row">
                    <div className="col p-3">
                        <div className="campaign-container">
                            <div className="campaign-group">
                                <div className="campaign-text center-container p-3">
                                    <h1 className="font-serif">Kampanjer</h1>
                                    <br />
                                    <p>Vi har magiska kampanjer just nu! Helt klart värt ett besök enligt oss.</p>
                                    <br />
                                    <a href="/kampanjer" className="button2">Till kampanj</a>
                                </div>
                            </div>
                            <img className="img-fluid" src={campaign} alt="Kakel &amp; Klinker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
