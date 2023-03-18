import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Guesses = ({ guesses }) => {
  if (guesses.length === 0) {
    return null;
  }

  return guesses.map((guess) => <Guess key={Math.random()} guess={guess} />);
};
const emptyGuess = " ".repeat(5);

function PreviousGuesses({ guesses }) {
  const emptyGuesses = Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill(
    emptyGuess
  );

  return (
    <div className="guess-results">
      {<Guesses guesses={[...guesses, ...emptyGuesses]} />}
    </div>
  );
}

export default PreviousGuesses;
