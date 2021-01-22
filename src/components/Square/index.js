import './Square.css';

function Square(props) {
  const { index, day, month, mood } = props.date;

  const activateLasers = () => {
    const squareInfo = { index, day, month, mood };
    props.onSquareSelected(squareInfo);
  }

  return (
    <div className="Square theme happy" onClick={activateLasers}>
      <p>{day}</p>
    </div>
  );
}

export default Square;
