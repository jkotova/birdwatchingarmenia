import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features.ts";

export const store = configureStore({
  reducer: {
    general: reducer,
  },
});
