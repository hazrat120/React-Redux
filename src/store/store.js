// state - count: 0
// action - increment, decrement, reset
// reducer
// store

// create store
const { createStore } = require("redux");

//constants
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// state define
const initialState = {
  count: 0,
  amount: 50,
};

// action method
const incrementCountAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCountAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCountAction = () => {
  return {
    type: RESET,
  };
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCountAction());
store.dispatch(incrementCountAction());
store.dispatch(incrementCountAction());
store.dispatch(decrementCountAction());
store.dispatch(resetCountAction());
