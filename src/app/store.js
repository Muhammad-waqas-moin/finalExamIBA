import { configureStore } from "@reduxjs/toolkit";
import poertryReducer from "../features/poetry/poertrySlice";

export const store = configureStore({
  reducer: {
    poetry: poertryReducer,
  },
});
export default store;
