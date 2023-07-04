import {  configureStore } from "@reduxjs/toolkit";
import authReducer from './src/slices/authSlice';
// import adminauthReducer from './src/adminApiSlice/adminauthSlice'
import { apiSlice } from "./src/slices/apiSlice";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
 const store=configureStore({
    reducer:{
      auth:authReducer,
      [apiSlice.reducerPath]:apiSlice.reducer,
    },
   
  
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
 });

 export default store