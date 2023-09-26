import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStudents = createAsyncThunk("getStudents", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

export const studentSlice = createSlice({
  name: "Student",
  initialState: { student: [], status: "" },
  extraReducers: {
    [getStudents.pending]: (state) => {
      state.status = "pending";
    },
    [getStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.student = action.payload;
    },
    [getStudents.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default studentSlice.reducer;
