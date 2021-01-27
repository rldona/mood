import React, { useState, useEffect } from "react";

import { auth } from '../../common/firebase';

import { useHistory } from "react-router-dom";

import { getCurrentDate } from '../../common/utils';

export default function Home() {
  const [currentDate, setCurrentDate] = useState({});
  let history = useHistory();

  const logout = () => {
    console.log('Logout init...');

    auth.signOut().then(() => {
      console.log('Logout OK');
    }).catch((error) => {
      console.log('Logout KO');
    });
  }

  const moodState = (state) => {
    console.log(state);
  }

  const goTo = (route) => {
    history.push(`/${route}`);
  }

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div className="Home">
      <h1>¿Cómo estás de ánimo hoy?</h1>
      <p>{currentDate.full}</p>
      <br />
      <button onClick={() => moodState('happy')}>Feliz</button>
      <button onClick={() => moodState('neutral')}>Normal</button>
      <button onClick={() => moodState('bad')}>Mal</button>
      <br /><br />
      <button onClick={() => goTo('calendar')}>Ver el calendario</button>
      <br /><br />
      <button onClick={logout}>Salir</button>
    </div>
  );
}
