const { createStore } = require("redux");

//defining consttants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//state
const initialCounterState = {
  count: 0,
};

//action are object is has 2 items = 1.type 2.payload

const incrementCounter = () => {
  return {
    type: INCREMENT,
    users: { name: "Hazrat" },
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const counterReducer = (state = initialCounterState, action) => {
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
    default:
      return state;
  }
};

//create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
