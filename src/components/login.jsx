import React, { useState } from 'react';
import './css/login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const history = useHistory();
    const signIn = e => {

        e.preventDefault();
        auth
            .signInWithEmailAndPassword( email, password )
            .then( ( auth ) => {
                console.log( auth );

                if ( auth )
                {
                    history.push( "/" );
                }
            } )
            .catch(
                error => alert( error.message )
            );



    };
    const register = e => {

        e.preventDefault();
        auth
            .createUserWithEmailAndPassword( email, password )
            .then( ( auth ) => {
                console.log( auth );
                if ( auth )
                {
                    history.push( "/" );
                }


            } )
            .catch( error => alert( error.message ) )
            ;




    };
    return (

        <div className="login">
            <Link to="/">
                <img className="loginImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="loginContainer">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={ email } onChange={ e => setEmail( e.target.value ) } />
                    <h5>Password</h5>
                    <input type="password" value={ password } onChange={ e => setPassword( e.target.value ) } />

                </form>
                <button className="loginSingInButton" type='submit' onClick={ signIn }>Sign In</button>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit mauris vitae sociosqu tincidunt, accumsan id lacus per fringilla. Himenaeos primis nullam  </p>
                <button className="loginRegisterButton" onClick={ register }>Create Account</button>
            </div>
        </div>
    );
};

export default Login; 