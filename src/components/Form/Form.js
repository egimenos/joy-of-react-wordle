import React from "react";

function Form({ handleSubmit, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleOnChangeGuess = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={handleOnChangeGuess}
        value={guess}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default Form;
