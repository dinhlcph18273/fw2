import { useState } from "react";
import { Link } from "react-router-dom";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setSquares(squares);
    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
  };

  const winner = checkWinner(squares);

  const resset = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
    setStepNumber(0)
  }
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber === 9) {
    status = "No one win";
    console.log(stepNumber);
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
  <div>
      <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
       
      </div>
    </div>
  <div className="btn">
    <button onClick={resset} className="btn-rs">Reset game</button>
  </div>

  </div>
  );
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
