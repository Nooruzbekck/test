import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { testSlice } from "./slices/testSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [testSlice.name]: testSlice.reducer,
  },
});
