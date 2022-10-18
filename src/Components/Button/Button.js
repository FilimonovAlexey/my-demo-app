import './Button.css';

function Button({ title, handleClick }) {
  return (
    <button className="Button" onClick={handleClick}>
      { title }
    </button>
  );
}

export default Button;
