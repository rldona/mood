import React from 'react';

import { Route, Redirect } from "react-router-dom";

const LoginGuard = ({ component: Component, auth, ...rest }) => (
  <Route {...rest } render={(props) => (auth === true ? <Redirect to='/home' /> : <Component {...props} /> )} />
)

export default LoginGuard;
