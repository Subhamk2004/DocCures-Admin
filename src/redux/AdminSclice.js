import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  email: '',
  isAuthenticated: false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = ''
      state.isAuthenticated = false
    },
    authenticate: (state, action) => {
      console.log(action.payload);
      state.email = action.payload.email
      state.isAuthenticated = true
    }
  }
})

export const { logout, authenticate } = adminSlice.actions;
let adminReducer = adminSlice.reducer;
export default adminReducer;