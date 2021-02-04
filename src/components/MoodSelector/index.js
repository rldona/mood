import React from "react";

import './MoodSelector.css';

export default function MoodSelector(props) {
  function onMoodSelected(mood) {
    props.onMoodSelected(mood.id);
  }

  function MoodList() {

    const moodItemComponent = props.moodList.map(mood =>
      <li key={mood.id} mood={mood} onClick={() => onMoodSelected(mood)}>{mood.state} === {mood.isActive ? 'true' : 'false'}</li>
    );

    return (
      <ul>{ moodItemComponent }</ul>
    );
  }

  return (
    <MoodList />
  );
}
