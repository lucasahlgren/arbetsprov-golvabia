import React from 'react';
import tile from '../../assets/images/kakelbild.jpg';
import wood from '../../assets/images/träbild.jpg';
import vinyl from '../../assets/images/vinylbild.jpg';
import textile from '../../assets/images/textilbild.jpg';
import ProductCategory from './ProductCategory';
import './ProductCategories.css';

export default function ProductCategories() {
    return (
        <div className="product-categories">
            <div className="container">
                <div className="row">
                    <ProductCategory category="Kakel &amp; Klinker" href="/kakelochklinker" image={tile} alt="Kakel &amp; Klinker" />
                    <ProductCategory category="Trägolv" href="/tragolv" image={wood} alt="Trägolv" />
                    <ProductCategory category="Vinylgolv" href="/vinylgolv" image={vinyl} alt="Vinylgolv" />
                    <ProductCategory category="Textilgolv" href="/textilgolv" image={textile} alt="Textilgolv" />
                </div>
            </div>
        </div>
    )
}
