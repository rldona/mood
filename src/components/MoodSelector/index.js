import React from "react";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import './MoodSelector.css';

export default function MoodSelector(props) {
  function onMoodSelected(mood) {
    props.onMoodSelected(mood.id);
  }

  function MoodList() {

    const moodItemComponent = props.moodList.map(mood => {
      if (mood.state === 'happy') {
        return <li key={mood.id} mood={mood} onClick={() => onMoodSelected(mood)}>{mood.state} === {mood.isActive ? 'true' : 'false'} <ThumbUpIcon /></li>
      }

      if (mood.state === 'neutral') {
        return <li key={mood.id} mood={mood} onClick={() => onMoodSelected(mood)}>{mood.state} === {mood.isActive ? 'true' : 'false'} <ThumbsUpDownIcon /></li>
      }

      if (mood.state === 'bad') {
        return <li key={mood.id} mood={mood} onClick={() => onMoodSelected(mood)}>{mood.state} === {mood.isActive ? 'true' : 'false'} <ThumbDownIcon /></li>
      }

      return true;
    });

    return (
      <ul>{ moodItemComponent }</ul>
    );
  }

  return (
    <MoodList />
  );
}
