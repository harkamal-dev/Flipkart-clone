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
import { StateProvider, useStateValue } from './StateProvider';
import Login from './Login';
import {useEffect} from 'react';
import { auth } from './firebase';
import Payment from './Payment';


const App=()=> {

  const [{},dispatch]=useStateValue('');

    useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        // console.log("the user is:",authUser);

        if(authUser){
          dispatch(
            {
              type:"SET_USER",
              user:authUser
            }
          )
        }else{
          dispatch({
              type:"SET_USER",
              user:null
            })
        }
      })
    },[]);

  return(

    <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Carousel />
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default App

