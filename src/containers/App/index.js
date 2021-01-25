import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Redirect
} from "react-router-dom";

import "../../common/firebase";

import { auth } from '../../common/firebase';

import GuardedRoute from '../GuardedRoute';
import Login from '../Login';
import LoginGuard from '../LoginGuard';
import Home from '../Home';
import Calendar from '../Calendar';

import './App.css';

const validateFirebaseLogin = (setLogged) => {
  console.log('validando...');
  auth.onAuthStateChanged(user => {
    if (user) {
      setLogged(true)
    } else {
      setLogged(null)
    }
  });
}

const isAuthenticated = (isLogged) => {
  return isLogged;
}

export default function App() {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    validateFirebaseLogin(setLogged);
  }, []);

  if (isLogged === false) return null;

  return (
    <div>
      <Router>
        <Switch>
          <LoginGuard path='/login' component={Login} auth={isAuthenticated(isLogged)} />
          <GuardedRoute path='/home' component={Home} auth={isAuthenticated(isLogged)} />
          <GuardedRoute path='/calendar' component={Calendar} auth={isAuthenticated(isLogged)} />
          <Redirect from="*" to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}
