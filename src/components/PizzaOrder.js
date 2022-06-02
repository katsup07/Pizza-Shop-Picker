import React from 'react';
import {formatPrice} from '../helpers.js';

function PizzaOrder(props) {
  
  // when pizzas = {} at start while waiting for firebase to retun data. Returning null will render out nothing.
  { if(!props.pizza) return null;
   
  //Once componentDidUpdate runs do this
  return(
       <> 
        <button onClick={()=>props.deletePizzaFromOrder(props.pizzaKey)}>&#10006;</button>
        <div>{props.pizza.name} x {props.orderNum}</div>
         <div>Price: {formatPrice(props.pizza.price * props.orderNum)}</div>
         <h2>________________</h2>
       </>
  )
 }
}

export default PizzaOrder;