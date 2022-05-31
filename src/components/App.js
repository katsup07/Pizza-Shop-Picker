import React, { useState } from 'react';
import Header from './Header.js';
import Create from './Create.js';
import Order from './Order.js';

function App(){

  const [state, setState] = useState({
    pizzas: {},
    order: {},
  });

  function addPizza(pizza){
    console.log('adding pizza...', pizza);
    // take a copy from state
    const updatePizzas = {...state.pizzas};
    // add new pizza to copy
    updatePizzas[`Pizza${new Date().getTime()}`] = pizza;
    // update state
    setState({ pizzas: updatePizzas })
  }

  return(
  <div className="todays-pizzas">
    <div className="menu">
      <Header/>
    </div>
    <div>
      <Order/>
    </div>
    <div>
      <Create addPizza={addPizza}/>
    </div>
  </div>
  )
}

export default App;