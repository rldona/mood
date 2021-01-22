import './Square.css';

function Square(props) {
  const { index } = props;

  return (
    <div className="Square theme happy">
      <p>{index}</p>
    </div>
  );
}

export default Square;
