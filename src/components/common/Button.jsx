const Button = (props) => {
  debugger
  return (
    <button
      className={props.className}
      type="button"
      onClick={() => props.func}
    >
      {props.children}
    </button>
  );
};

export default Button;
