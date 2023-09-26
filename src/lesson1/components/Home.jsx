import React from "react";
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
