import { checkPropTypes } from 'prop-types';
import React from 'react';
import { getFunName } from './../helpers.js';
import Router from './Router.js';

function PizzaShopPicker(props){
  const myInput = React.createRef();
  function goToStore(e){
    //1. Stop form from submitting
    e.preventDefault();
    //2. get the text from the input
    const storeRef = myInput.current.value;
    //3. change the page to store/storeName
    props.history.push(`/store/${storeRef}`);
  }
  return (
          <form className="store-selector" onSubmit={goToStore}>
            <h2>Enter a Pizza Shop Name</h2>
            <input 
              type="text" 
              required placeholder="Shop Name" 
              defaultValue={getFunName()}
              ref={myInput}
              />
            <button type="submit">Go</button>
          </form>
          )
}

export default PizzaShopPicker;