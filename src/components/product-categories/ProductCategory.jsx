import React from 'react';

export default function ProductCategory({ category, href, image, alt }) {
    return (
        <div className="col-xl-3 col-md-6 p-3">
            <div className="product-category">
                <div>
                <a href={href}>
                    <h2 className="font-serif product-category-text center-container">{category}</h2>
                    <img className="img-fluid" src={image} alt={alt} />
                </a>
                </div>
            </div>
        </div>
    )
}
