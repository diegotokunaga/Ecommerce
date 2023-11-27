import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

import CartButton from '../CartButton/CartButton';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <SearchBar />
          <CartButton />
        </div>
      </header>
    );
  }
}

