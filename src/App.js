import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './Checkout';
import './index';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const App=()=> {
  return(
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Carousel />
            <Home />
          </Route>
        </Switch>
    </Router>
  </StateProvider>
  )
}

export default App

