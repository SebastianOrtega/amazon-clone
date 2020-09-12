import React from "react";
import { Link } from 'react-router-dom';

import "./css/header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../stateProvider';
import { auth } from "../firebase";


const Header = () => {
  const [ { basket, user } ] = useStateValue();
  //console.log( "Baskey in header>>>", basket );
  const handleAuth = () => {
    if ( user )
    {
      console.log( "click sign" );
      auth.signOut();
    }
  };
  return (

    <div className="header">
      <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLine1">Hello { user ? user.email : 'Guest' }</span>
          <span className="header_optionLine2" onClick={ handleAuth }>{ user ? 'Sign Out' : <Link to="/login">Sign in</Link> }</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine1">returns</span>
          <span className="header_optionLine2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLine1">your</span>
          <span className="header_optionLine2">Prime</span>
        </div>
        <div className="header_optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon />
          </Link>
          <span className="header_optionLine2 header_basketCount">{ basket?.length }</span>
        </div>
      </div>
    </div>
  );
};

export default Header;