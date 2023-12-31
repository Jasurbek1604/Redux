import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: 0 },
  reducers: {
    inc: (state) => {
      state.data += 1;
    },
    dec: (state) => {
      state.data -= 1;
    },
  },
});

export const { inc, dec } = counterSlice.actions;
export default counterSlice.reducer;
