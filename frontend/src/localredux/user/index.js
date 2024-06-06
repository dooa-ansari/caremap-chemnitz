import { createSlice } from "@reduxjs/toolkit";
import { USER } from "../constants";
import { initialState } from "./state";

export const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    createUserData: (state, action) => {
      state.user = action.payload;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
    deleteUserData: (state, action) => {
      //state.user = null;
    },
    signInUser: (state, action) => {
      state.user = action.payload;
    },
    addAddress: (state, action) => {
      //const newAddress = [...state.addresses, action.payload.address];
      //const newAddress = [...state.addresses, action.payload.address];
      state.addresses = [];
    },
    deleteAddress: (state, action) => {
      const addressUUid = action.payload.id;
      const filteredData = state.addresses.filter(
        (item) => item.id !== addressUUid
      );
      state.addresses = filteredData;
    },
  },
});

export const {
  getUserData,
  setUserData,
  createUserData,
  signInUser,
  updateUserData,
  deleteUserData,
  addAddress,
  deleteAddress
} = userSlice.actions;

export default userSlice.reducer;
