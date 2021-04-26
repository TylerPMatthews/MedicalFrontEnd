import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import GetProducts from "./Components/GetProducts";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import CheckoutForm from "./Components/CheckoutForm";
import Checkout from "./Components/Checkout";
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/about'>
          <About/>
          <Footer />
        </Route>
        <Route path="/checkout">
          <Checkout />
          <Footer />
        </Route>
        <Route path="/checkoutform">
          <CheckoutForm />
        </Route>
        <Route path="/cart">
          <Cart />
          <Footer />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
          <GetProducts />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
