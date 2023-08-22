/* eslint-disable react/prop-types */
import { useState } from 'react';

function Square({ children, className }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => (count = count + 1));
  };
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}

export default Square;
