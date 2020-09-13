import React from 'react';
//import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import './css/subtotal.css';
import { useStateValue } from '../stateProvider';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
    const [ { basket } ] = useStateValue();
    const history = useHistory();

    //console.log( "subtotal checkout", basket );
    let total = basket?.reduce( function ( a, b ) { return a + b.price; }, 0 );
    /*export const getBasketTotal = ( basket ) => basket?.reduce( ( amount, item ) => item.price + amount, 0 );*/   //Solucion de ellos en reducer challenge day 3 

    //console.log( "Total", total );

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

        <button onClick={ e => history.push( '/payment' ) }>Proceed to Checkout</button>


    </div>;
};

export default Subtotal;