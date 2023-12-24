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
  themeMode: "light",
};

export const theme = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeThemeMode: (state, action) => {
      return {
        themeMode: action.payload.themeMode,
      };
    },
  },
});

export const { changeThemeMode } = theme.actions;
export default theme.reducer;
