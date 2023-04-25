import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";

const store = configureStore({
  reducer: {
    covidSlice,
  },
});

export default store;
