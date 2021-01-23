import React, { useEffect, useState } from "react";
import { firestore } from "../../common/firebase";

import SquareList from '../SquareList';
import Loading from '../Loading';

import './Board.css';

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
  }, []);

  if (squares.length === 0) return (<Loading />);

  return (
    <div className="Board">
      <SquareList positions={positions} />
    </div>
  );
}

export default Board;
