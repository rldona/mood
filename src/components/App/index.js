import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '../../containers/Home';
import Detail from '../../containers/Detail';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
