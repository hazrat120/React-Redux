// 1.state
// 2.action
// 3.reducer
// 4.store

// create store
const { createStore } = require("redux");

// constants
const increment = "Increment";
const decrement = "Decrement";
const reset = "Reset";
const incrementByValue = "Increment_By_Value";

// state
const initialState = {
  count: 0,
  users: ["Hazrat Ali"],
};

// action
const incrementCountAction = () => {
  return {
    type: increment,
  };
};

const decrementCountAction = () => {
  return {
    type: decrement,
  };
};

const resetCounterAction = () => {
  return {
    type: reset,
  };
};

const incrementByValueCounterAction = (value) => {
  return {
    type: incrementByValue,
    payload: value,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };
    case incrementByValue:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

//store make
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCountAction());
store.dispatch(decrementCountAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementByValueCounterAction(12));
store.dispatch(incrementByValueCounterAction(12));
