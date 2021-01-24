import React, { useEffect, useState } from "react";
import { firestore } from "../../common/firebase";

import SquareList from '../SquareList';
import Loading from '../Loading';

import './Board.css';

export default function Board() {
  const [squares, setSquare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSquares = async () => {
    const moodRef = firestore.collection('mood-registry');
    let moodDocs = await moodRef.get();
    const sqareList = [];

    moodDocs.forEach((square) => {
      sqareList.push(square.data());
    });

    setSquare(sqareList);
    setIsLoading(true);
  };

  useEffect(() => {
    getSquares();
  }, [isLoading]);

  if (!isLoading) return (<Loading />);

  return (
    <div className="Board">
      <SquareList squares={ squares } />
    </div>
  );
}
