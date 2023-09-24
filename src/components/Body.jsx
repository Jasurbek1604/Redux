import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/Counter";

export default function Body() {
  const counter = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Body</h1>
      <h2>Count:{counter.data}</h2>
      <button onClick={() => dispatch(increment())}>plus</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </React.Fragment>
  );
}
