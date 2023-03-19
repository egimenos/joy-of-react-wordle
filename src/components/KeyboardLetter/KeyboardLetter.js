import React from "react";

function KeyboardLetter({ cell }) {
  const cellStyle = `keyboard-cell keyboard-${cell.status}`;

  return (
    <div key={cell.cellContent} className={cellStyle}>
      {cell.cellContent}
    </div>
  );
}

export default KeyboardLetter;
