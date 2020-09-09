import React from 'react';

import Subtotal from './subtotal';
import './css/checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-OTliNDJlZWQt-w1500._CB407882704_.jpg" alt="banner" />

                <div className="checkout_title">
                    <h2>Shopping basket</h2>
                    {/*Basket item */ }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>
            </div>

        </div> );
};

export default Checkout;