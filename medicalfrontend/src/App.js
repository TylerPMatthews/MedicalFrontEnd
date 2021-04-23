import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
