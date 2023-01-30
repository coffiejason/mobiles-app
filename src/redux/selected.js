import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice =  createSlice({
    name:"selected",
    initialState:{
        value:0
    },
    reducers: {
        setSelected: (state,action) => {
            state.value = action.payload
        }
    }
});

export const {setSelected} = selectedSlice.actions;

export default selectedSlice.reducer;