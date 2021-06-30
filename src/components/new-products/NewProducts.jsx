import React from 'react';
import antica from '../../assets/images/antica.jpg';
import arktis from '../../assets/images/arktis.jpg';
import brooklyn from '../../assets/images/brooklyn.jpg';
import canova from '../../assets/images/canova.jpg';
import casablanca from '../../assets/images/casablanca.jpg';
import ceppo from '../../assets/images/ceppo.jpg';
import CampaignProduct from '../products/CampaignProduct';
import NewProduct from '../products/NewProduct';
import Product from '../products/Product';
import './NewProducts.css';

export default function NewProducts() {
    return (
        <div className="new-products">
            <h1 className="header-serif font-serif mb-5">Nytt hos oss!</h1>
            <div className="container">
                <div className="row">
                    <CampaignProduct title="Antica" price="399 kr/&#13217;" options="Finns i 10+ varianter" image={antica} grandSelection={true} />
                    <NewProduct title="Arktis Grön matt 6x25" price="699 kr/&#13217;" options="Finns i 10+ varianter" image={arktis} grandSelection={false} />
                    <Product title="Brooklyn Fossile 30x30" price="599 kr/&#13217;" options="Finns i 10+ varianter" image={brooklyn} grandSelection={false} />
                    <NewProduct title="Canova Emperador 60x60" price="499 kr/&#13217;" options="Finns i 10+ varianter" image={canova} grandSelection={false} />
                    <NewProduct title="Casablanca Marin Blank 10x10" price="299 kr/&#13217;" options="Finns i 10+ varianter" image={casablanca} grandSelection={false} />
                    <CampaignProduct title="Ceppo di Gré" price="799 kr/&#13217;" options="Finns i 10+ varianter" image={ceppo} grandSelection={true} />
                </div>
            </div>
        </div>
    )
}
