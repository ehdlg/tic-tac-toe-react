import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';

const TURNS = ['X', 'O'];

function App() {
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    const initialBoard = Array(9).fill(null);
    setBoard(initialBoard);
  }, []);

  const updateBoard = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = TURNS[turn % 2];
    setBoard(newBoard);

    const newTurn = turn + 1;
    setTurn(newTurn);
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
      </main>
    </>
  );
}

export default App;
