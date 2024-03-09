const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// 1.state
// 2.action
// 3.reducer
// 4.store

// constants
const Get_Products = "GET_PRODUCTS";
const Add_Product = "ADD_PRODUCT";

// 1.state
const initialProductState = {
  products: ["Phone", "TV"],
  numberOfProduct: 2,
};

// 2. action
const getProductAction = () => {
  return {
    type: Get_Products,
  };
};

const addProductAction = (items) => {
  return {
    type: Add_Product,
    payload: items,
  };
};

// reducer
const ProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case Get_Products:
      return {
        ...state,
      };
    case Add_Product:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(ProductReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("Frize, Ac"));
