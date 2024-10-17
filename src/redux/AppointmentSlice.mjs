import { createSlice } from "@reduxjs/toolkit";

let initialState = []

export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        cancelAppointment: (state, action) => {
            console.log(action.payload);
        },
        addAppointments: (state, action) => {
            console.log(action.payload);
            return action.payload;
        }
    }
})

export const { cancelAppointment, addAppointments } = appointmentSlice.actions;
let appointmentReducer = appointmentSlice.reducer;
export default appointmentReducer;