import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

// 1.state - count: 0
// 2. actions - increment, decrement, reset
// 3.reducers - increment -> count => count + 1;
// decrement -> count => count -1;
// 4.store
// 5.providing store in react
// 6.use store
