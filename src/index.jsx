import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Home from "./components/Home";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path={"/"} element={<Navigate to={"/home"} />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/body"} element={<Body />} />
            <Route path={"/about"} element={<About />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
