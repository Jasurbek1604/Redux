import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Home from "./components/Home";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
      <Body />
      <Navbar />
    </Provider>
  </React.StrictMode>
);
