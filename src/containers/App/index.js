import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Redirect
} from "react-router-dom";

import "../../common/firebase";

import GuardedRoute from '../GuardedRoute';
import Login from '../Login';
import LoginGuard from '../LoginGuard';
import Home from '../Home';
import Calendar from '../Calendar';

import './App.css';

const isAuthenticated = () => {
  return false;
}

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <LoginGuard path='/login' component={Login} auth={isAuthenticated()} />
          <GuardedRoute path='/home' component={Home} auth={isAuthenticated()} />
          <GuardedRoute path='/calendar' component={Calendar} auth={isAuthenticated()} />
          <Redirect from="*" to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}

