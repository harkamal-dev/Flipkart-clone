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
import reducer, { initialState } from './reducer';
import Login from './Login';
import {useEffect} from 'react';
import { auth } from './firebase';


const App=()=> {

  // const [{user},dispatch]= useStateValue();

  //   useEffect(()=>{
  //     auth.onAuthStateChanged(authUser=>{
  //       console.log("the user is:",authUser);

  //       if(authUser){
  //         dispatch(
  //           {
  //             type:"SET_USER",
  //             user:authUser
  //           }
  //         )
  //       }else{
  //         dispatch(
  //           {
  //             type:"SET_USER",
  //             user:null
  //           }
  //         )
  //       }
  //     })
  //   })

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
          <Route path="/login">
            <Login />
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

