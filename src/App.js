import React from "react";
import "./styles.css";
import Header from './components/Header'
import Products from './components/Products/Products';
import Cart from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartContextProvider from "./components/Context/CartContext";


export default function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Products} /> 
          <Route path='/cart' exact component={Cart}></Route> 
        </Switch>
            
    </Router>
  
    </CartContextProvider>
    );
}
