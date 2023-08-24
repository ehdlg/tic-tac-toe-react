import { useEffect, useState } from 'react';
import '../App.css';
import Square from './Square';
import checkWinner from '../logic';

const TURNS = ['X', 'O'];

function App() {
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const initialBoard = Array(9).fill(null);
    setBoard(initialBoard);
  }, []);

  useEffect(() => {
    console.log(board);
    const newWinner = checkWinner(board);

    if (newWinner) {
      setWinner(newWinner);
    }
  }, [turn]);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = TURNS[turn % 2];
    setBoard(newBoard);

    setTurn(turn + 1);
    console.log(newBoard);
  };

  return (
    <>
      <main className='board'>
        <h1 className='title'>Tic-tac-toe</h1>
        <section className='game'>
          {board.map((square, index) => {
            return (
              <Square
                className='square'
                updateBoard={updateBoard}
                key={index}
                index={index}
              >
                {board[index]}
              </Square>
            );
          })}
        </section>
        {!winner && (
          <div className='current-turn'>
            <h2>Current turn: </h2>
            <Square className='square'>{TURNS[turn % 2]}</Square>
          </div>
        )}

        {winner && <div className='winner-modal'>Winner is: {winner}!</div>}
      </main>
    </>
  );
}

export default App;
