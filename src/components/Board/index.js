import React, { useEffect, useState } from "react";
import { firestore } from "../../common/firebase";

import SquareList from '../SquareList';
import Loading from '../Loading';

import './Board.css';

const Board = () => {
  const [squares, setSquare] = useState([]);

  const getSquares = async () => {
    firestore.collection("mood-registry").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setSquare(docs);
    });
  };

  useEffect(() => {
    getSquares();
  }, []);

  if (squares.length === 0) return (<Loading />);

  return (
    <div className="Board">
      <SquareList squares={ squares } />
    </div>
  );
}

export default Board;
