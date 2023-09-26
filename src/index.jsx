import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./lesson1/redux/store";
import Home from "./lesson1/components/Home";
import Body from "./lesson1/components/Body";
import Navbar from "./lesson1/components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./lesson1/components/About";

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
