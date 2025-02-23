function Button({ children, className, type }) {
  return (
    <button
      className={`p-3 px-6 w-64 rounded-full bg-secondary text-primary hover:bg-primaryHover duration-200 ease-in-out font-semibold text-lg ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
