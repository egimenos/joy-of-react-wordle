import React from "react";
import KeyboardLetter from "../KeyboardLetter/KeyboardLetter";

function KeyboardRow({ row }) {
  return (
    <div className="keyboard-row">
      {row.map((letter) => (
        <KeyboardLetter cell={letter} />
      ))}
    </div>
  );
}

export default KeyboardRow;
