import React from 'react';
import {formatPrice} from '../helpers.js';

function TodaysPizzas(props){
  let { desc, image, name, price, status, toppings } = props.details;
  // Add pictures for pizzas people create
  {if(!image) image='/images/dine-in.jpg'}
  // Add the toppings to the description for pizzas people create
  {if(toppings) desc = `Toppings: ${Object.keys(toppings).join(', ')}. ${desc}`}

  return(
  <li className="menu-pizza">
    <img src={image} alt={name}/>
    <h3 className="pizza-name">{name}
      <span className="price">{formatPrice(price)}</span>
    </h3>
    <p>{desc}</p>
    <button onClick={() => props.addPizzaToOrder(props.pizzaKey)}>Add to Order</button>
  </li>

  );
}

export default TodaysPizzas;