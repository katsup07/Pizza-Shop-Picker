import { checkPropTypes } from 'prop-types';
import React from 'react';

function Header(props){
  return(
  <header className="top">
    <h1>Today's Pizzas</h1>
    <h3 className="tagline">
      <span>Fresh 'n Delicious</span>
    </h3>
  </header>
  );
}

export default Header;