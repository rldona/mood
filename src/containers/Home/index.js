import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { auth } from '../../common/firebase';
import { getCurrentDate } from '../../common/utils';

import MoodSelector from '../../components/MoodSelector';

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

  const goTo = (route) => {
    history.push(`/${route}`);
  }

  const handleMoodSelected = (id) => {
    console.log(id);
    // set el nuevo JSON con el squared id selected
    // moodList[0].isActive = true;
    // setMooList(moodList)
  }

  const moodList = [
    {
      id: 0,
      state: 'happy',
      isActive: false
    },
    {
      id: 1,
      state: 'neutral',
      isActive: false
    },
    {
      id: 2,
      state: 'bad',
      isActive: false
    }
  ]

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div className="Home">
      <h1>¿Cómo estás de ánimo hoy?</h1>

      <p>{currentDate.full}</p>

      <br />

      <MoodSelector moodList={moodList} onMoodSelected={handleMoodSelected} />

      <br /><br />

      <button onClick={() => goTo('calendar')}>Ver el calendario</button>

      <br /><br />

      <button onClick={logout}>Salir</button>

    </div>
  );
}
