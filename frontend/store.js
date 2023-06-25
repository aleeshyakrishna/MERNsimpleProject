import {  configureStore } from "@reduxjs/toolkit";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
 const store=configureStore({
    reducer:{},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true
 });

 export default store