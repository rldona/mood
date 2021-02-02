import React, { useState, useEffect } from "react";

import './MoodSelector.css';

export default function MoodSelector() {
  const [isActive, setActive] = useState('none');

  const moodState = (state) => {
    console.log(state);
  }

  useEffect(() => {
  }, []);

  return (
    <>
      Mood Selector: {isActive}
      <button onClick={() => moodState('happy')}>Feliz</button>
      <button onClick={() => moodState('neutral')}>Normal</button>
      <button onClick={() => moodState('bad')}>Mal</button>
    </>
  );
}
