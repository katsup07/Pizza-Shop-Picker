import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Create from './Create.js';
import Order from './Order.js';
import base from '../base.js';
import samplePizzas from '../sample-pizzas.js';
import TodaysPizzas from './TodaysPizzas.js';

// Only using a class for the component with state
class App extends React.Component {

  state= {
    pizzas: {},
    order: {},
  };

  // sync with firebase
  componentDidMount = () => {
    const { params } = this.props.match;
    console.log(params.storeId);
    const ref = base.syncState(`${params.storeId}/pizzas`, { 
      context: this, 
      state: 'pizzas',
    });
  };

  // Adds pizzas to state
   addPizza = (pizza) => {
    console.log('adding pizza...', pizza);
    // take a copy from state
    const updatePizzas = {...this.state.pizzas};
    // add new pizza to copy
    updatePizzas[`Pizza${new Date().getTime()}`] = pizza;
    // update state with new pizza object
    this.setState({ pizzas: updatePizzas })
  }

  loadSamplePizzas = () => {
    this.setState({ pizzas: samplePizzas })
  }

  render () {
  return(
  <div className="todays-pizzas">
    <div className="menu">
      <Header/>
      <ul className="pizzas">
        {Object.keys(this.state.pizzas).map(pizzaKey =>
        <TodaysPizzas key={pizzaKey}
        pizzaKey= {pizzaKey}
        details = {this.state.pizzas[pizzaKey]} 
        />
       )
      }
      </ul>
    </div>
    <div>
      <Order/>
    </div>
    <div>
      <Create addPizza={this.addPizza} loadSamplePizzas={this.loadSamplePizzas}/>
    </div>
  </div>
  )
 }
}

export default App;