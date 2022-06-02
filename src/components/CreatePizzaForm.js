import React from 'react';
import Toppings from './Toppings.js';
import { formatPrice } from '../helpers.js'

function CreatePizzaForm(props){

  const nameRef = React.createRef();
  const promoCodeRef = React.createRef();
  const crustTypeRef = React.createRef();
  const descRef = React.createRef();
  const priceRef = React.createRef();
  const toppings = {};
  let pizza = {};
  
  // Creates a pizza in pizza = {} with form data
  function createPizza(e){
    console.log(e);
    console.log("Creating a pizza!");
    pizza = {
      name: nameRef.current.value,
      promoCode: promoCodeRef.current.value,
      crustType: crustTypeRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      toppings: toppings, // An object with the chosen toppings
    }
    console.log(pizza);
   
    updateTotalPrice();
  }

  // updates cost of pizza during creation
  function updateTotalPrice(){
    const numberOfToppings = Object.keys(pizza.toppings).length;
    // update total on form
    priceRef.current.innerText = `Total: ${ 2000 + numberOfToppings * 50 }`;
    // set pizza total in pizza object
    pizza.price = 2000 + numberOfToppings * 50;
  }

  // updates pizza data in state when form is submitted
  function updatePizzaState(e){
    console.log(e.currentTarget)
    // Need to read in pizza form data again, since reset clears info from all form objects
   /*  createPizza(); */
    props.addPizza(pizza);
    /* resetForm(e.currentTarget) */
  }  

/*   function resetForm(el) {
    el.reset();
    console.log(toppings);
    priceRef.current.innerText = `Total: ${ formatPrice(2000) }`;
    Object.keys(toppings).forEach( key => delete toppings[key]);
    console.log(toppings);

  } */

  return(
  <form onSubmit={updatePizzaState} autoComplete="off">
  <div className="pizza-edit" onChange={createPizza}>
    <input type="text" name="pizza-name" ref={nameRef} placeholder="pizza name"/>
    <input type="text" name="promo-code" ref={promoCodeRef} placeholder="promo code"/>
    <select  name="crust-type" ref={crustTypeRef}>
      <option value="normal">normal</option>
      <option value="stuffed-crust">stuffed crust</option>
      <option value="thin-crust">thin crust</option>
    </select>
    <Toppings toppings={toppings}/>
    <textarea name="description" ref={descRef} placeholder="description"/>
    <p ref={priceRef}>Total: {2000}</p>
    <button type="submit">+ Add Pizza</button>
    </div>
  </form>
  );
}

export default CreatePizzaForm;