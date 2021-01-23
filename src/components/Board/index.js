import React, { useEffect, useState } from "react";
import { firestore } from "../../common/firebase";
import Square from '../Square';

import './Board.css';

const handleSquareSelected = (square) => {
  console.log(square);
}

// TODO: crear un componete SquareList
function SquareList(props) {
  const positions = props.positions;

  let squareList = [], index = 1;

  for (let i = 0; i < positions.length; i++) {
    for (let j = 1; j <= positions[i].days; j++) {
      const date = {
        'index': index,
        'month': positions[i].month,
        'day': j,
        'mood': 'happy'
      };
      squareList.push(<Square key={date.index} date={date} onSquareSelected={handleSquareSelected} />);
      // sacarlo a la app y hacer la carga en Firestore
      // firestore.collection("mood-registry").doc(`${index}`).set(date);

      index++;
    }
  }

  console.log('--- Render Control ---');

  return (
    <ul>{squareList}</ul>
  );
}

const Board = (props) => {
  const [squares, setSquare] = useState([]);
  const { positions } = props.config;

  const getLinks = async () => {
    firestore.collection("mood-registry").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setSquare(docs);
    });
  };

  useEffect(() => {
    getLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (squares.length === 0) return (<div>Loading...</div>);

  return (
    <div className="Board">
      <SquareList positions={positions} />
    </div>
  );
}

export default Board;
