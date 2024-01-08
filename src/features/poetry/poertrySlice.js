import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortry = createAsyncThunk("poetry/fetchPortry", () => {
  return axios
    .get("http://localhost:5000/api/v1/getPoetry")
    .then((response) => response.data);
});
const initialState = {
  loading: false,
  error: "",
  poetry: [],
};

const poetrySlice = createSlice({
  name: "poetry",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPortry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPortry.fulfilled, (state, action) => {
      state.loading = false;
      console.log("fulfilled", action);
      state.poetry = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPortry.rejected, (state, action) => {
      state.loading = false;
      state.poetry = [];
      state.error = action.error.message;
    });
  },
});
export default poetrySlice.reducer;
