import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./reducer/testSlice";

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
export default store;
