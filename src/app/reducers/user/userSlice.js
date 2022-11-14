import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    unsetUser: (state = initialState) => {
      state.email = "";
      state.password = "";
      state.token = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
