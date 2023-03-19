import React from "react";
import KeyboardRow from "../KeyboardRow/KeyboardRow";

function Keyboard({ lettersStatus }) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const mappedRow = (row) =>
    row.map((letter) => ({
      cellContent: letter,
      status: getLettersStatus(letter),
    }));

  const getLettersStatus = (letter) => {
    const status = lettersStatus.find((item) => item.letter === letter)?.status;

    if (!status) return "unused";

    return status;
  };

  return (
    <div className="keyboard">
      <KeyboardRow row={mappedRow(firstRow)} />
      <KeyboardRow row={mappedRow(secondRow)} />
      <KeyboardRow row={mappedRow(thirdRow)} />
    </div>
  );
}

export default Keyboard;
