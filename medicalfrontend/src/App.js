import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import GetProducts from "./Components/GetProducts";
import Cart from './Components/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/cart'>
          <Cart/>
          <Footer/>
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
          <Footer/>
        </Route>
      </Switch>
  
    </div>
  );
}

export default App;
