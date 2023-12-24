import thunk from "redux-thunk";
import storage from "./storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { useSelector, useDispatch } from "react-redux";

import userReducer from "./slices/user/userSlice";
import themeReducer from "./slices/theme/themeSlice";
import modalsReducer from "./slices/modals/modalsSlice";
import collections from "./slices/collections/collectionsSlice";
import { apiSlice } from "./slices/api/apiSlice";
import { collectionsApi } from "./slices/collections/apis";
import { userApi } from "./slices/user/apis";

const persistConfig = {
  key: "root",
  storage,
};

const persistThemeConfig = {
  key: "theme",
  storage,
};
const persistModalsConfig = {
  key: "modals",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistThemeReducer = persistReducer(persistThemeConfig, themeReducer);
const persistModalsReducer = persistReducer(persistModalsConfig, modalsReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    theme: persistThemeReducer,
    modals: persistModalsReducer,
    collections,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(thunk)
      .concat(apiSlice.middleware)
      .concat(collectionsApi.middleware)
      .concat(userApi.middleware),
      devTools: process.env.NODE_ENV !== 'production'
});

// export type ReduxStore = typeof store;
// export type ReduxState = ReturnType<typeof store.getState>;
// export type ReduxDispatch = typeof store.dispatch;

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export const persistor = persistStore(store);
