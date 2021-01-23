import Square from '../Square';

const handleSquareSelected = (square) => {
  console.log(square);
}

const SquareList = (props) => {
  const { squares } = props;

  console.log(squares);

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