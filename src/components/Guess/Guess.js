import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.split("").map((letter) => {
        return (
          <span key={Math.random()} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
