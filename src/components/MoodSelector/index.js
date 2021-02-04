import React from "react";

import MoodSelectorItem from '../MoodSelectorItem';

import './MoodSelector.css';

export default function MoodSelector(props) {
  function onMoodSelected(mood) {
    console.log(mood);
  }

  function MoodList() {
    const moodItemComponent = props.moodList.map(mood =>
      <MoodSelectorItem key={mood.id} mood={mood} onClick={() => onMoodSelected(mood)} />
    );

    return (
      <ul>{ moodItemComponent }</ul>
    );
  }

  return (
    <MoodList />
  );
}
