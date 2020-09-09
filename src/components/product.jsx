import React from 'react';
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
                <strong>{ price }</strong>
            </p>
            <div className="product_rating">
                { rating && Array( rating )
                    .fill()
                    .map( ( _, i ) => ( <span role="img" aria-label="xxxxx">⭐️</span> ) ) }

            </div>

        </div>
        <img src={ image } alt="imagen" />
        <button className="product_button" onClick={ addtoBasket }>Add to cart</button>
    </div> );
};

export default Product;