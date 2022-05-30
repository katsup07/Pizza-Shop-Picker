import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PizzaShopPicker from './PizzaShopPicker.js';
import App from './App.js';
import NotFound from './NotFound.js';


const Router = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={PizzaShopPicker}/>
      <Route path = "/store/:storeId" component={App}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>)
}

export default Router;