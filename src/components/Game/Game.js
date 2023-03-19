import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [historic, setHistoric] = React.useState([]);
  const [showBanner, setShowBanner] = React.useState(false);
  const [bannerType, setBannerType] = React.useState("fail");
  const [inputDisabled, setInputDisabled] = React.useState(false);
  const [lettersStatus, setLettersStatus] = React.useState([]);

  const updateLettersStatus = (guess) => {
    const nextLetterStatus = [...lettersStatus, ...checkGuess(guess, answer)];
    setLettersStatus(nextLetterStatus);
  };

  const handleSubmit = (guess) => {
    updateLettersStatus(guess);
    const nextHistoric = [...historic, guess];
    setHistoric(nextHistoric);
    if (guess === answer) {
      setBannerType("success");
      setShowBanner(true);
      setInputDisabled(true);
      return;
    }
    if (nextHistoric.length === 6) {
      setBannerType("fail");
      setShowBanner(true);
      setInputDisabled(true);
    }
  };

  return (
    <>
      <PreviousGuesses guesses={historic} answer={answer} />
      <Keyboard lettersStatus={lettersStatus} />
      <Form disabled={inputDisabled} handleSubmit={handleSubmit}></Form>
      {showBanner && (
        <Banner
          answer={answer}
          type={bannerType}
          numberOfGuesses={historic.length}
        />
      )}
    </>
  );
}

export default Game;
