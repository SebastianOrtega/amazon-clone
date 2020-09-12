import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider';

import "./css/checkoutproduct.css";

const CheckoutProduct = ( { id, image, title, price, rating } ) => {
    const [ basket, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        //console.log( "remove from basket" );
        dispatch( {
            type: 'REMOVE_FROM_BASKET',
            id
        } );

    };

    //console.log( "Image_en chechout_product >>", image );
    return (
        <div className="checkoutProduct">
            <img className="checkoutImage" src={ image } alt="imagen" />
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{ title }</p>
                <p className="checkoutProductPrice">
                    <small>$</small>  <strong>
                        <CurrencyFormat
                            value={ price }
                            decimalScale={ 2 }
                            thousandSeparator={ true }
                            displayType={ "text" }
                            prefix={ "$" }
                        />
                    </strong>
                </p>

                <div className="checkoutProductRating">
                    { rating && Array( rating )
                        .fill()
                        .map( ( _ ) => ( <span key={ Math.floor( ( Math.random() * 100000 ) + 1 ) } role="img" aria-label="xxxxx">⭐️</span> ) ) }
                </div>
                <button onClick={ removeFromBasket }>Remove from basket</button>
            </div>
        </div > );
};

export default CheckoutProduct;