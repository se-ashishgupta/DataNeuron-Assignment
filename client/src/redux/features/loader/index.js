import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loaders",
  initialState: initialState,
  reducers: {
    setLoader(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
