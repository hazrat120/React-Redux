const { createStore } = require("redux");

// constants
const Add_User = "ADD-USER";

//state
const initialState = {
  users: ["Hazrat Ali"],
  count: 1,
};

// action
const addUser = (user) => {
  return {
    type: Add_User,
    payload: user,
  };
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_User:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Atik, Rohim"));
store.dispatch(addUser("Sobuj"));
