import React from "react";

function Form({ handleSubmit }) {
  const [guess, setGuess] = React.useState("");

  const handleOnChangeGuess = (e) => {
    setGuess(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, guess)}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        onChange={handleOnChangeGuess}
        value={guess}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default Form;
