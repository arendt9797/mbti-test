function Input({ className, name, type, value, onChange, placeholder, required}) {
  return (
    <input 
      className={`outline-none border-b-2 focus:border-secondary duration-200 ease-in-out h-10 text-lg ${className}`} 
      placeholder={placeholder} 
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required = {required}/>
  );
}

export default Input;
