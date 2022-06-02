import React from 'react';
import CreatePizzaForm from './CreatePizzaForm.js';

function Create(props){
  return(
      <>
        <h2>Create</h2>
        <CreatePizzaForm addPizza={props.addPizza}/>
        <button 
          onClick={props.loadSamplePizzas}>
            Load Sample Pizzas
        </button>
      </>
  );
}

export default Create;