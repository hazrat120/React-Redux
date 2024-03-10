// store import
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

// 1.async actions - api calling
// 2.api url - https://jsonplaceholder.typicode.com/todos
// 3.middleware - redux-thunk
// 4.axios api

// constants
const GET_TODOS_REQUEST = "Get_Todos_Request";
const GET_TODOS_SUCCESS = "Get_Todos_Success";
const GET_TODOS_FAILED = "Get_Todos_Fail";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFail = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// reducers
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const UserId = todos.map((todo) => todo.userId);
        dispatch(getTodosSuccess(UserId));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getTodosFail(errorMessage));
      });
  };
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

// store dispatch
store.dispatch(fetchData());
