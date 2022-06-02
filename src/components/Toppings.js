import React from 'react';

function Toppings(props){
  
  function addToppings(e){
    console.dir(e.target);
    const topping = e.target.name;
    console.log(topping);
    // if topping is checked, add to toppings object
    if(e.target.checked) return props.toppings[topping] = true;
    // else the topping has been unchecked, so delete from toppings object
    delete props.toppings[topping];
  }

  return(  
  <div className="pizza-toppings" onChange={addToppings}>
    <div>
     
        <label> 
          <input type="checkbox" name="pepperoni" defaultValue="pepperoni"/>pepperoni
        </label>
        <label>
          <input type="checkbox" name="mushrooms" defaultValue="mushrooms"/>mushrooms
        </label>
    </div>
    <div>
        <label >
        <input type="checkbox" name="pineapple" defaultValue="pineapple"/>pineapple</label>
          <input type="checkbox" name="peppers" defaultValue="peppers"/>
        <label >peppers</label>
    </div>
    <div>
        <label>
          <input type="checkbox" name="avocado" defaultValue="avocado"/>avocado
        </label>
        <label>
          <input type="checkbox" name="spicy-chicken" defaultValue="spicy chicken"/>spicy chicken
        </label>
    </div>
</div>)
}

export default Toppings;