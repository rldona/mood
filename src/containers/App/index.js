import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '../Home';
import Detail from '../Detail';

import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <Detail />
          </Route>
          <Redirect from="*" to="/"/>
        </Switch>
      </Router>
    </div>
  );
}