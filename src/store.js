import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducer"

const initialState = {};
const middleware = [thunk];
const store = createStore(
  blogReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
