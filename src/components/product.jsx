import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider';
import "./css/product.css";




const Product = ( { id, title, image, price, rating } ) => {

    const [ basket, dispatch ] = useStateValue();
    //console.log( "basket:", basket );


    const addtoBasket = () => {
        dispatch( {
            type: 'ADD_TO_BASKET',
            item: { id, title, image, price, rating }
        } );
    };

    return ( <div className="product">
        <div className="product_info">
            <p>

                { title }


            </p>
            <p className="price">
                <small>$</small>
                <strong><CurrencyFormat
                    value={ price }
                    decimalScale={ 2 }
                    thousandSeparator={ true }
                    displayType={ "text" }
                    prefix={ "$" }
                /></strong>
            </p>
            <div className="product_rating">
                { rating && Array( rating )
                    .fill()
                    .map( ( _ ) => ( <span key={ Math.floor( ( Math.random() * 1000 ) + 1 ) } role="img" aria-label="xxxxx">⭐️</span> ) ) }

            </div>

        </div>
        <img src={ image } alt="imagen" />
        <button className="product_button" onClick={ addtoBasket }>Add to cart</button>
    </div> );
};

export default Product;