import React, { useState } from "react";
import "./Game.css";
import EndGame from "./EndGame.js";

const Game = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [draw, setDraw] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const checkWinner = (board) => {
    let combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          setGameFinished(true);
          setDraw(false);
        }  
    }
  };

  const checkDraw = (board) => {
    if  (!board.includes("") )
     if ( !checkWinner(board))
    {
      setDraw(true);
      setGameFinished(true);
      // console.log("draw");
    }
  }

  const handleClick = (num) => {
    if (cells[num] !== "") {
      return;
    }

    let board = [...cells];

    if (turn === "X") {
      board[num] = "X";
      setTurn("O");
    } else {
      board[num] = "O";
      setTurn("X");
    }

    checkDraw(board);
    checkWinner(board);
    setCells(board);
    // console.log(!board.includes(""));
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setDraw(false);
    setGameFinished(false);
  };

  const Cell = ({ num }) => {
    return (
      <div className="cell" onClick={() => handleClick(num)}>
        {cells[num]}
      </div>
    );
  };

  return (
    <> 
      <div className="board">
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </div>
        {gameFinished && (
          <EndGame winner={winner} draw={draw} handleRestart={handleRestart} />
        )}
      <div className="turn">Turn:{turn}</div>
    </>
  );
};

export default Game;
