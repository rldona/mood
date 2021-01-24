import React, { useEffect, useState } from "react";

import { firestore } from "../../common/firebase";
import { squareListMock } from "../../common/mocks";

import SquareList from '../SquareList';
import Loading from '../Loading';

import './Board.css';

const getSquares = async (setSquare, setIsLoading) => {
  const moodRef = firestore.collection('mood-registry');
  let moodDocs = await moodRef.get();

  const sqareList = [];

  moodDocs.forEach((square) => {
    sqareList.push(square.data());
  });

  setSquare(sqareList);
  setIsLoading(true);
};

export default function Board() {
  const [squares, setSquare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!squareListMock) {
      getSquares(setSquare, setIsLoading);
    } else {
      setSquare(squareListMock);
      setIsLoading(true);
    }
  }, [isLoading]);

  if (!isLoading) return (<Loading />);

  return (
    <div className="Board">
      <SquareList squares={ squares } />
    </div>
  );
}
