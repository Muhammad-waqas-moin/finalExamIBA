import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect } from "react";

// useEffect(() => {
//   fetchPortry();
// }, []);

export const fetchPortry = createAsyncThunk("poetry/fetchPortry", () => {
  const data = axios
    .get("https://final-exam-iba-backend.vercel.app/api/v1/getPoetry")
    .then((response) => response.data);
  return data;
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
      console.log("fulfilled", action.payload);
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
