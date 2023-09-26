import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";

export const store = configureStore({
  reducer: {
    counter,
    student: counter,
  },
});

//!wrap to root , Provider
import { Provider } from "react-redux";
import { store } from "./redux/store";

<Provider store={store}>
  <Routes>
    <Route element={<Navbar />}>
      <Route path={"/"} element={<Navigate to={"/home"} />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/body"} element={<Body />} />
      <Route path={"/about"} element={<About />} />
    </Route>
  </Routes>
</Provider>;

//!use Redux

import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "../redux/Counter";

export default function Home() {
  const counter = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Home</h1>
      <h2>Counter: {counter.data}</h2>
      <button onClick={() => dispatch(inc())}>plus</button>
      <button onClick={() => dispatch(dec())}>minus</button>
    </React.Fragment>
  );
}
