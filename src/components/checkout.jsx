import React from 'react';
import CheckoutProduct from './checkoutProduct';
import './css/checkout.css';
import Subtotal from './subtotal';
import { useStateValue } from '../stateProvider';



const Checkout = () => {


    const [ { basket, user } ] = useStateValue();
    //console.log( "Image_en chechout >>", basket || 'sinDatos' );
    console.log( user?.email );

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-OTliNDJlZWQt-w1500._CB407882704_.jpg" alt="banner" />

                <div className="checkout_title">
                    <h3>Shopping basket</h3>
                    <h4>Hello { user?.email } you basket is: </h4>
                    { basket.map( ( item ) => <CheckoutProduct image={ item.image } id={ item.id } title={ item.title } price={ item.price } rating={ item.rating } /> ) }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>

        </div> );
};

export default Checkout;