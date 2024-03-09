// state create
// action genarate 1.increment 2.decrement 3.reset
// reducer make
// store genarate

//create store
const { createStore } = require("redux");

// constants
const increment = "Increment";
const decrement = "Decrement";
const reset = "Reset";

// create state
const initialState = {
  count: 1,
  digit: 0,
};

// action generate
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

const resetCountAction = () => {
  return {
    type: reset,
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
store.dispatch(decrementCountAction());
store.dispatch(resetCountAction());
