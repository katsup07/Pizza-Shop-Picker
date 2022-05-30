import React from 'react';
import Header from './Header.js';
import Toppings from './Toppings.js';
import Order from './Order.js';

function App(){
  return(
  <div className="todays-pizzas">
    <div className="menu">
      <Header/>
    </div>
    <div>
      <Order/>
    </div>
    <div>
      <Toppings/>
    </div>
  </div>
  )
}

export default App;