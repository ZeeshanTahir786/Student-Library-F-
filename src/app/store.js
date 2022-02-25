import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/bookSlice/bookSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookSlice,
  },
});
