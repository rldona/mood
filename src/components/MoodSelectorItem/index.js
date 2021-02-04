import React from "react";

export default function MoodSelectorItem(props) {
  return (
    <li>{ props.mood.state }</li>
  );
}
