import React from 'react';

const Buttons = ({ increment, decrement }) => (
  <div>
    <button type='button' onClick={increment}>+</button>
    <button type='button' onClick={decrement}>-</button>
  </div>
);

export default Buttons;