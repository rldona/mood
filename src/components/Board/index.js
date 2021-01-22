import './Board.css';

import Square from '../Square';

const handleSquareSelected = (square) => {
  console.log(square);
}

function SquareList(props) {
  const positions = props.positions;

  let squareList = [], index = 1;

  for (let i = 0; i < positions.length; i++) {
    for (let j = 1; j <= positions[i].days; j++) {
      const date = {
        'index': index,
        'month': positions[i].month,
        'day': j
      };
      squareList.push(<Square key={date.index} date={date} onSquareSelected={handleSquareSelected} />);
      index++;
    }
  }

  return (
    <ul>{squareList}</ul>
  );
}

function Board(props) {
  const { positions } = props.config;

  return (
    <div className="Board">
      <SquareList positions={positions} />
    </div>
  );
}

export default Board;
