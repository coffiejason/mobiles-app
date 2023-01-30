import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./selected";
import dashboardReducer from "./data";

export default configureStore({
    reducer: {
        selected: selectedReducer,
        data: dashboardReducer
    }
})  