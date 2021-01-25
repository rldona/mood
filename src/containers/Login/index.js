import React, { useEffect } from "react";

export default function Login() {

  useEffect(() => {
    console.log('init login');
  }, []);

  return (
    <div className="Login">
      <h1>Login</h1>
    </div>
  );
}
