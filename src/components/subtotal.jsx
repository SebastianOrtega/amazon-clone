import React from 'react';
//import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import './css/subtotal.css';
import { useStateValue } from '../stateProvider';

const Subtotal = () => {
    const [ { basket } ] = useStateValue();

    console.log( "subtotal checkout", basket );
    let total = basket.reduce( function ( a, b ) { return a + b.price; }, 0 );
    console.log( "Total", total );

    return <div className="subtotal">
        <CurrencyFormat
            renderText={ ( value ) => (
                <>
                    <p>
                        Subtotal ({ basket?.length } items) :
                    <strong>{ `${ value }` }</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains gift
                    </small>
                </>
            ) }
            decimalScale={ 2 }
            value={ total }
            thousandSeparator={ true }
            displayType={ "text" }
            prefix={ "$" }
        />

        <button>Proceed to Checkout</button>


    </div>;
};

export default Subtotal;