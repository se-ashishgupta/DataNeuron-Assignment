import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../redux/features/content";
import loaderReducer from "../redux/features/loader";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    loader: loaderReducer,
  },
});
