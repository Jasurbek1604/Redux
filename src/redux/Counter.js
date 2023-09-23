import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    increment: (state) => {
      state.data += 1;
    },
    decrement: (state) => {
      state.data -= 1;
    },
  },
});

export default counterSlice.reducer;
