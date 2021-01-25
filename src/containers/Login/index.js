import React, { useEffect } from "react";

import { auth, provider } from '../../common/firebase';

export default function Login(props) {

  const login = () => {
    console.log('Login init...');

    auth.signInWithRedirect(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        console.log(token);
        console.log(user);
      }).catch((error) => {
        console.log(error.message);
      });
  }

  const logout = () => {
    console.log('Logout init...');

    auth.signOut().then(() => {
      console.log('Logout OK');
    }).catch((error) => {
      console.log('Logout KO');
    });
  }

  useEffect(() => {
    console.log('init login');
  }, []);

  return (
    <div className="Login">
      <h1>Login</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
