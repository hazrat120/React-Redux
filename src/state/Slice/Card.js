const { createStore, combineReducers } = require("redux");

// state make
// action
// reducer
// store

// FOR PRODUCT
const Get_Products = "GET_PRODUCTS";
const Add_Product = "ADD_PRODUCT";
// FOR CARD
const Get_Cart_Items = "GET_CART_ITEMS";
const Add_Cart_Item = "ADD_CART_ITEM";

// PRODUCT STATE
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
// CART STATE
const initialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
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
// cart state
const getCart = () => {
  return {
    type: Get_Cart_Items,
  };
};
const addCart = (product) => {
  return {
    type: Add_Cart_Item,
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

// cartReducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case Get_Cart_Items:
      return {
        ...state,
      };
    case Add_Cart_Item:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store
// const store = createStore(productReducer);
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCart());
store.dispatch(addCart("Pen"));

store.dispatch(getProducts());
store.dispatch(addProduct("Egg, Chicken"));
