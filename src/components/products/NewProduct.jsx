import React from 'react';
import GrandSelection from './GrandSelection';
import './Products.css';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';

export default function NewProduct({ title, price, options, image, grandSelection }) {
    return (
        <div className="col-lg-4 col-sm-6 col-12 p-3">
            <div className="product">
                <a href="/textilgolv">
                    <div className="product-image-container">
                        <h2 className="product-text-new px-4 py-2 fs-5">Nyhet</h2>
                        {grandSelection ? <GrandSelection /> : null}
                        <img className="product-image" src={image} alt={title} />
                    </div>
                    <div className="product-text bg-light p-3 text-start">
                        <div className="d-flex justify-content-between">
                            <h4 className="product-title pe-3">{title}</h4>
                            <div className="product-heart">
                                <Heart className="product-heart-icon" />
                            </div>
                        </div>
                        <p className="product-price">{price}</p>
                        <p className="product-options mb-0">{options}</p>
                    </div> </a>
            </div>
        </div>
    )
}
