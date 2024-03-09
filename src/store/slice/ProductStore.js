// import store
const { createStore } = require("redux");

//product constants
const Get_Products = "GET_PRODUCTS";
const Add_Product = "ADD_PRODUCT";

// product state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// action genarate
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

// product reducer
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

// store generate
const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Masala, alu, dim, bagun, fish"));
store.dispatch(addProduct("Mure"));
