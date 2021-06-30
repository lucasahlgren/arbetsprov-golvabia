import React from 'react';
import catalog from '../../assets/images/katalog.jpg';
import inspiration from '../../assets/images/inspiration.jpg';
import './CatalogInspiration.css';

export default function CatalogInspiration() {
    return (
        <div className="catalog-inspiration">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="catalog-container">
                            <div className="catalog-group">
                                <div className="catalog-text center-container p-3">
                                    <h1 className="font-serif">Katalog</h1>
                                    <br />
                                    <a href="/katalog" className="button1">Kika på kataloger</a>
                                </div>
                            </div>
                            <img className="img-fluid" src={catalog} alt="Katalogbild" />
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="inspiration-container">
                            <div className="inspiration-group">
                                <div className="inspiration-text center-container p-3">
                                    <h1 className="font-serif">Inspiration</h1>
                                    <br />
                                    <a href="/inspiration" className="button1">Bli inspirerad</a>
                                </div>
                            </div>
                            <img className="img-fluid" src={inspiration} alt="Inspirationsbild" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
