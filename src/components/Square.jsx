/* eslint-disable react/prop-types */

function Square({ children, className, updateBoard, index }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <>
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    </>
  );
}

export default Square;
