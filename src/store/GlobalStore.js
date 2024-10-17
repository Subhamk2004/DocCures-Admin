import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../redux/AdminSclice.js";
import appointmentReducer from "../redux/AppointmentSlice.mjs";

export const Store = configureStore({
    reducer:{
        admin: adminReducer,
        appointments: appointmentReducer
    }
})