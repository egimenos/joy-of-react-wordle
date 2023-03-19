import React from "react";

function Banner({ type, numberOfGuesses, answer, handleRestart }) {
  const styles = {
    success: "happy banner",
    fail: "sad banner",
  };

  const content = {
    success: `<strong>Congratulations!</strong> Got it in. <strong>${numberOfGuesses} guesses</strong></>.`,
    fail: `<strong>Sorry, the correct answer is <strong>${answer}</strong>`,
  };

  return (
    <div className={styles[type]}>
      <div dangerouslySetInnerHTML={{ __html: content[type] }}></div>
      <button className="button-restart" onClick={handleRestart}>
        Restart game
      </button>
    </div>
  );
}

export default Banner;
