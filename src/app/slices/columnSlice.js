import { createSlice } from "@reduxjs/toolkit";

const columnSlice = createSlice({
  name: "column",
  initialState: {
    columns: [],
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
    },
  },
});

export const { addColumn, removeColumn } = columnSlice.actions;

export default columnSlice.reducer;
