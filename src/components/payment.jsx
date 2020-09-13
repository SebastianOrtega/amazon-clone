import React, { useEffect, useState } from 'react';
import './css/payment.css';
import { useStateValue } from '../stateProvider';
import CheckoutProduct from './checkoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { getBasketTotal } from "../reducer";


const Payment = () => {
    const [ { basket, user } ] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( true );
    const [ succeeded, setSucceeded ] = useState( false );
    const [ processing, setProcessing ] = useState( '' );
    const [ clientSecret, setClientSecret ] = useState( true );

    let total = basket?.reduce( function ( a, b ) { return a + b.price; }, 0 );

    useEffect( () => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios( {
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${ Math.round( getBasketTotal( basket ) ) * 100 }`
            } ).catch( error => {
                console.warn( error );
            } );
            setClientSecret( response.data.clientSecret );
        };

        getClientSecret();
    }, [ basket ] );

    console.log( 'Secret>>', clientSecret );
    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing( true );
        const payload = await stripe.confirmCardPayment( clientSecret, {
            payment_method: {
                card: elements.getElement( CardElement )
            }
        } ).then( ( { paymentIntent } ) => {
            setSucceeded( true );
            setError( null );
            setProcessing( false );
            history.replaceState( '/orders' );
        } );

    };
    const handleChange = event => {
        setDisabled( event.empty );
        setError( event.error ? event.error.message : "" );

    };

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                     <Link to='/checkout'>{ basket.length } items</Link>
                    )
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className='payment_address'>
                        <p>{ user?.email }</p>
                        <p>1000 fifth st</p>
                        <p>miami florida</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Review Items and delivery
                        </h3>
                    </div>
                    <div className="payment_items">
                        { basket.map( item => (
                            <CheckoutProduct key={ item.id } image={ item.image } id={ item.id } title={ item.title } price={ item.price } rating={ item.rating } />
                        ) ) }
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        Payment Method
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={ handleSubmit } onChange={ handleChange }>
                            <CardElement />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={ ( value ) => (
                                        <>
                                            <p>
                                                Order Total ({ basket?.length } items) :
                                                <strong>
                                                    { `${ value }` }
                                                </strong>
                                            </p>
                                        </>
                                    ) }
                                    decimalScale={ 2 }
                                    value={ getBasketTotal( basket ) }
                                    thousandSeparator={ true }
                                    displayType={ "text" }
                                    prefix={ "$" }
                                />
                                <button disabled={ processing || disabled || succeeded }>
                                    <span>
                                        { processing ? <p>Processing</p> : "buy Now" }
                                    </span>
                                </button>
                                { error && <div> { error }</div> }
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Payment;