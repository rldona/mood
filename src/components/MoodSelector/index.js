import React from "react";

import './MoodSelector.css';

export default function MoodSelector(props) {
  function MoodList() {
    const moodItemComponent = props.moodList.map(mood =>
      <li key={mood.id}>{mood.state}</li>
    );

    return (
      <ul>{ moodItemComponent }</ul>
    );
  }

  return (
    <>
      <MoodList />
    </>
  );
}
