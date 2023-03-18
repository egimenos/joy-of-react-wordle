import React from "react";
import { checkGuess } from "../../../src/game-helpers";

function Guess({ guess, answer }) {
  const guessStatus = checkGuess(guess, answer);
  const isEmptyCell = (letter) => letter === " ";
  const letterStatus = (index) => guessStatus[index].status;

  return (
    <p className="guess">
      {guess.split("").map((letter, index) => {
        return (
          <span
            key={index}
            className={`cell ${isEmptyCell(letter) ? "" : letterStatus(index)}`}
          >
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
