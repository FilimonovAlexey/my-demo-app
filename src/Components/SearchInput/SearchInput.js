import './SearchInput.css';

function SearchInput({ placeholder, handleChange }) {
  return (
    <input
      type="text"
      className="Input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
