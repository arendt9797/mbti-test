function Card({ children, className }) {
  return (
    <div className={`bg-primary shadow-md rounded-lg p-6 w-96 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
