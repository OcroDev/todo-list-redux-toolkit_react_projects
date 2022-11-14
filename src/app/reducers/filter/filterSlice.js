import { createSlice } from "@reduxjs/toolkit";

//INITIAL STATE
const initialState = {
  visibility: "SHOW_ALL",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setVisibility: (state, action) => {
      state.visibility = action.payload;
    },
  },
});

export const { setVisibility } = filterSlice.actions;

export default filterSlice.reducer;
