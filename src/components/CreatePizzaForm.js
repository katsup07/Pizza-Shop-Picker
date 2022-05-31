import React from 'react';
import Toppings from './Toppings.js';
import { formatPrice } from '../helpers.js'

function CreatePizzaForm(props){

  const pizzaNameRef = React.createRef();
  const promoCodeRef = React.createRef();
  const crustTypeRef = React.createRef();
  const descriptionRef = React.createRef();
  const totalRef = React.createRef();
  const toppings = {};
  let pizza = {};
  
  // Creates a pizza in pizza = {}
  function createPizza(e){
    console.log(e);
    console.log("Creating a pizza!");
    pizza = {
      pizzaName: pizzaNameRef.current.value,
      promoCode: promoCodeRef.current.value,
      crustType: crustTypeRef.current.value,
      description: descriptionRef.current.value,
      total: totalRef.current.value,
      toppings: toppings, // An object with the chosen toppings
    }
    console.log(pizza);
    // updates cost of pizza
    updateTotalPrice();
  }

  function updateTotalPrice(){
    const numberOfToppings = Object.keys(pizza.toppings).length;
    totalRef.current.innerText = `Total: ${ formatPrice(2000 + numberOfToppings * 50) }`;
    pizza.total = 2000 + numberOfToppings * 50;

  /*   ( pizza.toppings ? Object.keys(pizza.toppings).length*50: 0) */
  }

  // updates pizza data in state
  function updatePizzaState(e){
    e.preventDefault();
    props.addPizza(pizza);
    console.log("adding!")
  }  

  return(
  <form onSubmit={updatePizzaState}>
  <div className="pizza-edit" onChange={createPizza}>
    <input type="text" name="pizza-name" ref={pizzaNameRef} placeholder="pizza name"/>
    <input type="text" name="promo-code" ref={promoCodeRef} placeholder="promo code"/>
    <select  name="crust-type" ref={crustTypeRef}>
      <option value="normal">normal</option>
      <option value="stuffed-crust">stuffed crust</option>
      <option value="thin-crust">thin crust</option>
    </select>
    <Toppings toppings={toppings}/>
    <textarea name="description" ref={descriptionRef} placeholder="description"/>
    <p ref={totalRef}>Total: {formatPrice(2000)}</p>
    <button type="submit">+ Add Pizza</button>
    </div>
  </form>
  );
}

export default CreatePizzaForm;