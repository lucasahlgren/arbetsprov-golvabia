import React from 'react';
import golvabiaLogo from '../../assets/images/golvabialogo.png';

export default function GrandSelection() {
    return (
        <div className="grand-selection">
            <div className="p-3 d-flex flex-column align-items-center">
                <h4 className="grand-selection-title mb-0 font-serif">Grand<br />Selection</h4>
                <div className="grand-selection-underscore mb-2 mt-1" />
                <img className="img-fluid" src={golvabiaLogo} alt="Golvabia logo" />
            </div>
        </div>
    )
}
