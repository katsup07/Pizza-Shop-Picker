import React from 'react';

function PizzaShopPicker(){
  return (
          <form className="store-selector">
            <h2>Enter a Pizza Shop Name</h2>
            <input type="text" required placeholder="Shop Name"/>
            <button type="submit">Go</button>
          </form>
          )
}

export default PizzaShopPicker;