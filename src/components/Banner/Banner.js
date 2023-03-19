import React from "react";

function Banner({ type, numberOfGuesses, answer }) {
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
    </div>
  );
}

export default Banner;
