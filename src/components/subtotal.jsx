import React from 'react';
//import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import './css/subtotal.css';

const Subtotal = () => {
    return <div className="subtotal">
        <CurrencyFormat
            renderText={ ( value ) => (
                <>
                    <p>
                        Subtotal ({ /* basket.lenght */ 1 } items) :
                    <strong>{ `${ value }` }</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains gift
                    </small>
                </>
            ) }
            decimalScale={ 2 }
            value={ /* getBasketTotal( basket ) */ 1400.65 }
            thousandSeparator={ true }
            displayType={ "text" }
            prefix={ "$" }
        />

        <button>Proceed to Checkout</button>


    </div>;
};

export default Subtotal;