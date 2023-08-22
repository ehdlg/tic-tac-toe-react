import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const initialBoard = Array(8).fill(null);
    setBoard(initialBoard);
  }, []);

  console.log(board);
  return (
    <>
      <Square>X</Square>
    </>
  );
}

export default App;
