import React from 'react';

const TextSquare = ({ width, height, color, textColor, text, title, leftright }) => {
  return (
    <div className={`w-9/12 h-${height} bg-${color} text-${textColor} text-xl pl-4 pr-4 flex flex-row items-center text-${leftright} join-item`}>
      <div>
      <div className={`font-bold text-3xl text-${leftright}`}>{title}</div>
      <div>{text}</div>
      </div>
    </div>
  );
};

export default TextSquare;