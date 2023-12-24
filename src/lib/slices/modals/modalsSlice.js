// "use client";

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   themeMode: "light",
// };

// export const theme = createSlice({
//   name: "theme",
//   initialState,
//   reducers: {
// changeThemeMode: (state, action) => {
//   state.themeMode = action.payload;
// },
//   },
// });

// export const { changeThemeMode } = themeSlice.actions;

// export default theme.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { logoutEvent } from "./userActions";

const initialState = {
  buyNow: null,
  placeBid: null
};

export const modals = createSlice({
  name: "modals",
  initialState: initialState,
  reducers: {
    changeBuyNow: (state, action) => {
      return {
        buyNow: action.payload,
      };
    },
    changePlaceBid: (state, action) => {
      return {
        placeBid: action.payload,
      };
    },
  },
});

export const { changePlaceBid, changeBuyNow } = modals.actions;
export default modals.reducer;
