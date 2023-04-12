import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import userSlice from './userSlice'
import serviceSlice from "./serviceSlice";

export default configureStore({
    reducer:{
        authuser : authSlice,
        account : userSlice,
        service : serviceSlice
    }
})