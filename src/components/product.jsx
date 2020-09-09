import React from 'react';
import "./css/product.css";




const Product = ( { id, title, image, price, rating } ) => {
    return ( <div className="product">
        <div className="product_info">
            <p>
                <p className="product_price">
                    { title }
                </p>
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
        <button className="product_button">Add to cart</button>
    </div> );
};

export default Product;