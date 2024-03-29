import './Square.css';

const Square = (props) => {
  const { index, day, month, mood } = props.date;

  const squareSelected = () => {
    const squareInfo = { index, day, month, mood };
    props.onSquareSelected(squareInfo);
  }

  return (
    <div className={`Square theme ${mood}`} onClick={ squareSelected }>
      <p>{ day }</p>
      <span>{ month }</span>
    </div>
  );
}

export default Square;
