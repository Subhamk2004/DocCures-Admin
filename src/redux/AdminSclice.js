import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    email: '',
    isAuthenticated: false,
    displayAlert: '',
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
        },
        setDisplayAlert: (state, action) => {
            console.log(action.payload);
            state.displayAlert = action.payload
        }
    }
})

export const { logout, authenticate, setDisplayAlert } = adminSlice.actions;
let adminReducer = adminSlice.reducer;
export default adminReducer;