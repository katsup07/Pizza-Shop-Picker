import React from 'react';
import PizzaOrder from './PizzaOrder.js';
import { formatPrice } from '../helpers.js'

function Order(props){
  
  const pizzaKeys = Object.keys(props.order);

  // Get the total of all pizzas ordered
  const orderTotal = pizzaKeys.reduce( (total, pizzaKey) => {
    if(!props.pizzas[pizzaKey]) return;// when pizzas = {} at start because the app is waiting for firebase to return the pizzas data.
    return total = total + props.pizzas[pizzaKey].price * props.order[pizzaKey];
   }, 0);


  return(
  <div className="order">
     <h2>Order</h2>
    { pizzaKeys.map(pizzaKey=>
    <PizzaOrder 
    key={pizzaKey}
    pizzaKey={pizzaKey}
    pizza={props.pizzas[pizzaKey]}
    orderNum={props.order[pizzaKey]}
    deletePizzaFromOrder={props.deletePizzaFromOrder}
    />
    )}
   <h2 className="order-total">{orderTotal ? `Total: ${formatPrice(orderTotal)}` : null}</h2>
  </div>
  );
}
export default Order;

{/* pizzas={props.pizzas} 
    order={props.order} */}