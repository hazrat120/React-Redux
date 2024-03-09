// 1.async actions - api calling
// 2.api url - https://jsonplaceholder.typicode.com/todos
// 3.middleware- redux-thunk
// 4.axios api

// create store
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

// constants
const Get_Todos_Request = "GET_TODOS_REQUEST";
const Get_Todos_Success = "GET_TODOS_SUCCESS";
const Get_Todos_Failed = "GET_TODOS_FAIL";
const Api_Url = "https://jsonplaceholder.typicode.com/todos";

// states make
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// actions create
const getTodosRequest = () => {
  return {
    type: Get_Todos_Request,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: Get_Todos_Success,
    payload: todos,
  };
};

const getTodosFail = (error) => {
  return {
    type: Get_Todos_Failed,
    payload: error,
  };
};

//reducer
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case Get_Todos_Request:
      return {
        ...state,
        isLoading: true,
      };
    case Get_Todos_Success:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case Get_Todos_Failed:
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
      .get(Api_Url)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
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

store.dispatch(fetchData());
