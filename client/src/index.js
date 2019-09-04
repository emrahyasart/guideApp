import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { getUsers } from "./actions/usersAction";
import { getComments } from "./actions/commentsAction";
import App from "./routers/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store
  .dispatch(getUsers())
  .then(store.dispatch(getComments()))
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,

      document.querySelector("#root")
    );
  });
