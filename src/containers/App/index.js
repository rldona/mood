import React, { useState, useEffect } from "react";

import "../../common/firebase";
import { auth } from '../../common/firebase';

import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import GuardedRoute from '../GuardedRoute';
import Login from '../Login';
import LoginGuard from '../LoginGuard';
import Home from '../Home';
import Calendar from '../Calendar';

import './App.css';

export default function App() {
  const [isLogged, setLogged] = useState(false);

  const validateFirebaseLogin = () => {
    auth.onAuthStateChanged(user => {
      setLogged(user ? true : null);
    });
  }

  useEffect(() => {
    validateFirebaseLogin();
  }, []);

  if (isLogged === false) return null;

  return (
    <div>
      <Router>
        <Switch>
          <LoginGuard path='/login' component={Login} auth={isLogged} />
          <GuardedRoute path='/home' component={Home} auth={isLogged} />
          <GuardedRoute path='/calendar' component={Calendar} auth={isLogged} />
          <Redirect from="*" to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}
