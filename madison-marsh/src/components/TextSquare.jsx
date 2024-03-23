import React from 'react';

const TextSquare = ({ width, height, color, textColor, text, title}) => {
  return (
    <div className={`w-9/12 h-${height} bg-${color} text-${textColor} pl-4 pr-4 flex items-center  join-item`}>
      <div>
      <div className='font-bold'>{title}</div>
      <div>{text}</div>
      </div>
    </div>
  );
};

export default TextSquare;