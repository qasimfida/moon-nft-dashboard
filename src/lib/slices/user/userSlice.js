import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editUser, editUserNotifss } from "./apis"

const initialState = {
  firstName: null,
  lastName: null,
  access_token: null,
  email: null,
  id: null,
  avatar: null,
  type: null,
  isUpdating: false,
  status: '',
  error:""
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        access_token: action.payload.token,
        avatar: action.payload.avatar,
        id: action.payload.id,
      };
    },
    logoutSuccess: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
    updateStatusAndError: (state, action) =>{
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(editUser.pending, (state) => {
        state.isUpdating = true,
        state.error = ""
      })
      .addCase(editUser.fulfilled, (state) => {
        state.isUpdating = false,
        state.status = "success"
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isUpdating = false,
        state.status = "error",
        state.error = action.payload.error
      });
    builder
      .addCase(editUserNotifss.pending, (state) => {
        state.isUpdating = true,
        state.error = ""
      })
      .addCase(editUserNotifss.fulfilled, (state) => {
        state.isUpdating = false,
        state.status = "success"
      })
      .addCase(editUserNotifss.rejected, (state, action) => {
        state.isUpdating = false,
        state.status = "error",
        state.error = action.payload.error
      });
  },
});

export const { loginSuccess, logoutSuccess, updateStatusAndError } = user.actions;
export default user.reducer;
