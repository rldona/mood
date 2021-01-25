import React, { useState, useEffect } from "react";

import { auth } from '../../common/firebase';

import { getCurrentDate } from '../../common/utils';

export default function Home() {
  const [currentDate, setCurrentDate] = useState({});

  const logout = () => {
    console.log('Logout init...');

    auth.signOut().then(() => {
      console.log('Logout OK');
    }).catch((error) => {
      console.log('Logout KO');
    });
  }

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div className="Home">
      <h1>¿Cómo estás de ánimo hoy?</h1>
      <p>{currentDate.full}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
