import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const emptyGuess = " ".repeat(5);

function PreviousGuesses({ guesses }) {
  const emptyGuesses = Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill(
    emptyGuess
  );

  return (
    <div className="guess-results">
      {[...guesses, ...emptyGuesses].map((guess) => (
        <Guess key={Math.random()} guess={guess} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
