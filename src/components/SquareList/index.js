import Square from '../Square';

import { compare } from "../../common/utils";

const handleSquareSelected = (square) => {
  console.log(square);
}

const SquareList = (props) => {
  const { squares } = props;

  squares.sort(compare);

  let squareList = [];

  for (let i = 0; i < squares.length; i++) {
    const square = {
      'index': squares[i].index,
      'day': squares[i].date.day,
      'month': squares[i].date.month,
      'mood': squares[i].mood
    };

    squareList.push(
      <Square key={square.index} date={square} onSquareSelected={handleSquareSelected} />
    );
  }

  return (
    <ul>{ squareList }</ul>
  );
}

export default SquareList;
