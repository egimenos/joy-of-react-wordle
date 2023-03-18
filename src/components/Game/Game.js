import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const handleSubmit = (e, guess) => {
  e.preventDefault();
  console.log(guess);
};

function Game() {
  return (
    <>
      <Form handleSubmit={handleSubmit}></Form>
    </>
  );
}

export default Game;
