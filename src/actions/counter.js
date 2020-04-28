import { INCREMENT, DECREMENT } from '../consts/actionTypes';

export const increment = (amount) => ({
  type: INCREMENT,
  amount
});

export const decrement = (amount) => ({
  type: DECREMENT,
  amount
});

