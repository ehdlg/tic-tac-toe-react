function Button({ children, className, onClick = null }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
