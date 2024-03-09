const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// state make
// action
// reducer
// store

// FOR PRODUCT
const Get_Products = "GET_PRODUCTS";
const Add_Product = "ADD_PRODUCT";

// PRODUCT STATE
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// product action
const getProducts = () => {
  return {
    type: Get_Products,
  };
};
const addProduct = (product) => {
  return {
    type: Add_Product,
    payload: product,
  };
};

// productReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case Get_Products:
      return {
        ...state,
      };
    case Add_Product:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// store
// const store = createStore(productReducer);
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Egg, Chicken"));
