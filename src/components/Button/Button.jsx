import "./button.css";

const Button = ({ prop }) => {
  return (
    <button className="button" prop={prop}>
      {prop}
    </button>
  );
};

export default Button;
