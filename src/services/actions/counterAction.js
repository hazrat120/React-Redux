import { Decrement, Increment, Reset } from "../constants/counterConstant";

export const incrementCounter = () => {
  return {
    type: Increment,
  };
};

export const decrementCounter = () => {
  return {
    type: Decrement,
  };
};

export const resetCounter = () => {
  return {
    type: Reset,
  };
};
