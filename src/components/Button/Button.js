import React from 'react';

const Button = ({ clickHandler, style, text }) => {
  return (
    <button style={style} onClick={() => clickHandler()}>
      {text}
    </button>
  );
};

export default Button;
