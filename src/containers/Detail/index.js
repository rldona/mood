import React, { useEffect, useState } from "react";

import { firestore } from "../../common/firebase";
import { config } from "../../common/config";

import Board from '../../components/Board';
import Loading from '../../components/Loading';

const Detail = () => {
  const [data, setData] = useState([]);

  const intDataFromFirestore = () => {
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

    setData(squareList);
  }

  useEffect(() => {
    intDataFromFirestore();
  }, []);

  if (data.length === 0) return null

  return (
    <div className="Detail">
      <Board config={config} />
    </div>
  );
}

export default Detail;
