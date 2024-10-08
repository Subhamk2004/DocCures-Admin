import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../redux/AdminSclice.js";

export const Store = configureStore({
    reducer:{
        admin: adminReducer
    }
})