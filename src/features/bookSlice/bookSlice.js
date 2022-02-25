import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: null,
  error: null,
};

export const fetchBooks = createAsyncThunk(
  "books/FetchBooks",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/getAllBooks"
      );
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "success";
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
