import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { loadState, saveState } from "./localStorage";
import { createStore } from "redux";
const reducer = require("./Redux/Reducer/index.js").method;
// import reducer
const persistedState = loadState();
//const store = require("./Redux/appstore/index.js");
const store = createStore(reducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
