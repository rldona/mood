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
        'day': j,
        'mood': 'happy'
      };
      squareList.push(<Square key={date.index} date={date} onSquareSelected={handleSquareSelected} />);
      // sacarlo a la app y hacer la carga en Firestore
      // firestore.collection("mood-registry").doc(`${index}`).set(date);
      index++;
    }
  }

  return (
    <ul>{squareList}</ul>
  );
}
export default SquareList;