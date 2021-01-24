import React, { useEffect, useState } from "react";

import { firestore } from "../../common/firebase";
import { config } from "../../common/config";

import Board from '../../components/Board';

const setConfigMoodFirestore = (setIsLoading) => {
  let squareList = [], index = 1;

  for (let i = 0; i < config.positions.length; i++) {
    for (let j = 1; j <= config.positions[i].days; j++) {
      const date = {
        'index': index,
        'mood': 'none',
        'date': {
          'month': config.positions[i].month,
          'day': j,
        },
      };
      squareList.push(date);
      firestore.collection("mood-registry").doc(`${index}`).set(date);
      index++;
    }
  }

  setIsLoading(true);
}

export default function Detail() {
  const [isLoading, setIsLoading] = useState(false);

  const intDataFromFirestore = async() => {
    const moodRef = firestore.collection('mood-registry');
    let moodDocs = await moodRef.get();

    if (moodDocs.empty) {
      setConfigMoodFirestore(setIsLoading);
    } else {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    intDataFromFirestore();
  }, [isLoading]);

  if (!isLoading) return (null)

  return (
    <div className="Detail">
      <Board />
    </div>
  );
}
