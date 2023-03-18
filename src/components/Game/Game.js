import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [historic, setHistoric] = React.useState([]);

  const handleSubmit = (guess) => {
    setHistoric([...historic, guess]);
  };

  return (
    <>
      <PreviousGuesses guesses={historic} />
      <Form handleSubmit={handleSubmit}></Form>
    </>
  );
}

export default Game;
