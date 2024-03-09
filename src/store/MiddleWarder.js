const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// state
// action
// reducer
// store

// just constants
const Get_Pro_Items = "GET_PRO_ITEMS";
const Add_Pro_Item = "ADD_PRO_ITEMS";

// STATE GENERATE
const initialProState = {
  product_items: ["Laptop", "Phone", "AC"],
  productOfNumber: 3,
};

// action
const getProductAction = () => {
  return {
    type: Get_Pro_Items,
  };
};

const addProductAction = (items) => {
  return {
    type: Add_Pro_Item,
    payload: items,
  };
};

// reducer
const productReducer = (state = initialProState, action) => {
  switch (action.type) {
    case Get_Pro_Items:
      return {
        ...state,
      };
    case Add_Pro_Item:
      return {
        product_items: [...state.product_items, action.payload],
        productOfNumber: state.productOfNumber + 1,
      };
    default:
      return state;
  }
};

// store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("Freze,Toy"));
store.dispatch(addProductAction("Hi"));
