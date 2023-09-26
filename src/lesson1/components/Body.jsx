import React, { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Body() {
  const student = useSelector((store) => store.student);

  useEffect(() => {
    console.log(student);
  }, []);

  return (
    <React.Fragment>
      <h1>Body</h1>
    </React.Fragment>
  );
}
