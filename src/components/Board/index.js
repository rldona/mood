import './Board.css';

import Square from '../Square';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    console.log(number);
    return <Square index={number} />
  });
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Board() {
  return (
    <div className="Board">
      <NumberList numbers={numbers} />,
    </div>
  );
}

export default Board;
