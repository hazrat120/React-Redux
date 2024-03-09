// state
// action increment, decrement, reset
// reducer
// store

// store define
const { createStore } = require("redux");

//constants
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// state declair
const initialState = {
  count: 0,
  amount: 0,
};

// action state
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

// reducer
const counterReducer = (state = initialState, Action) => {
  switch (Action.type) {
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

// store use
const store = createStore(counterReducer);

// store subscribe

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCountAction());
store.dispatch(incrementCountAction());
store.dispatch(decrementCountAction());
store.dispatch(resetCountAction());
