import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./css/header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Header extends Component {
  state = {};
  render () {
    return (
      <div className="header">
        <Link to="/">
          <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
        </Link>

        <div className="header_search"><input className="header_searchInput" type="text" /><SearchIcon className="header_searchIcon" /></div>
        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionLine1">Hello Guest</span>
            <span className="header_optionLine2">Sign in</span>
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
            <span className="header_optionLine2 header_basketCount">0</span>
          </div>
        </div>
      </div> );
  }
};

export default Header;
