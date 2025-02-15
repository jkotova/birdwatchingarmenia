import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features";

export const store = configureStore({
  reducer: {
    general: reducer,
  },
});
