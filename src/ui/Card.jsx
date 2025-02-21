function Card({ children, className }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 w-96 ${className}`}>
      {children} {/* 내부 내용은 동적으로 변경 가능 */}
    </div>
  );
}

export default Card;
