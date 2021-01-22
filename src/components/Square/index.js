import './Square.css';

function Square(props) {
  const { index, day, month } = props.date;

  const activateLasers = () => {
    const squareInfo = { index, day, month };
    props.onSquareSelected(squareInfo);
  }

  return (
    <div className="Square theme happy" onClick={activateLasers}>
      <p>{day}</p>
    </div>
  );
}

export default Square;
