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

  
  componentDidMount = () => {
    console.log('it mounted')
    //reinstate local storage
    const { params } = this.props.match;
    //set reference, get localStorage save data, and save it to state
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) this.setState({order: JSON.parse(localStorageRef)})
    // sync with firebase
    this.ref = base.syncState(`${params.storeId}/pizzas`, { 
      context: this, 
      state: 'pizzas',
    });
  };

  componentDidUpdate() {
    console.log('it updated', this.state.order);
    // setItem(keyName, keyValue) are the params. Saves order info in local storage.
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));

  }

  // clean up after leaving store. could lead to memory leak if you don't unmount when leaving store
  componentWillUnmount() {
    console.log('it unmounted')
    base.removeBinding(this.ref);
  }


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

  addPizzaToOrder = (pizzaKey) => {
    console.log('adding pizza to order...', pizzaKey);
    const updateOrder = {...this.state.order};
    updateOrder[pizzaKey] = updateOrder[pizzaKey]+1 || 1;
    this.setState({ order: updateOrder })
  }

  deletePizzaFromOrder = (pizzaKey) => {
    const updateOrder = {...this.state.order};
    console.log("Deleting pizza from order", updateOrder[pizzaKey]);
    delete updateOrder[pizzaKey];
    this.setState({order: updateOrder})
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
        addPizzaToOrder={this.addPizzaToOrder}
        />
       )
      }
      </ul>
    </div>
    <div>
      <Order
      pizzas={this.state.pizzas}
      order={this.state.order}
      deletePizzaFromOrder={this.deletePizzaFromOrder}
      />
    </div>
    <div>
      <Create addPizza={this.addPizza} loadSamplePizzas={this.loadSamplePizzas}/>
    </div>
  </div>
  )
 }
}

export default App;