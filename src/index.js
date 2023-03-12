import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import produce from "immer";
import { useImmer } from "use-immer";
// import { enableMapSet } from "immer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { galleryReducer } from "./galleryState";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
