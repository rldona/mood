import React, { useEffect, useState } from "react";
import { firestore } from "../../common/firebase";

import SquareList from '../SquareList';
import Loading from '../Loading';

import './Board.css';

const Board = () => {
  const [squares, setSquare] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSquares = async () => {
    // TODO: usar async/await para quitar el callback
    firestore.collection("mood-registry").onSnapshot((querySnapshot) => {
      const sqareList = [];
      querySnapshot.forEach((square) => {
        sqareList.push(square.data());
      });
      setSquare(sqareList);
      setIsLoading(true);
    });
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

export default Board;
