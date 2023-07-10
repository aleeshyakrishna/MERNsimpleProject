import { createSlice } from "@reduxjs/toolkit";
// import { json } from "express"

const initialState = {
  adminInfo:null
};

const authSlice = createSlice({
  name: "adminauth",
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      console.log("dispatched.....");
      state.adminInfo = action.payload;
      console.log(action.payload, "frddddddddddddddd");
      const parsedData = JSON.stringify(action.payload)
      localStorage.setItem("adminInfo", parsedData);
    },

    adminlogout: (state, action) => {
      state.adminInfo = null;
      localStorage.removeItem("adminInfo");
    },
  },
});

export const { setAdminCredentials, adminlogout } = authSlice.actions;
export default authSlice.reducer;
