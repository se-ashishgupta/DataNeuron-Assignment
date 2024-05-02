import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { setLoader } from "../loader";
import axios from "axios";

const serverURL = import.meta.env.VITE_SERVER_URL;

const initialState = {
  content: null,
  allContent: null,
  count: null,
};

const contentSlice = createSlice({
  name: "contentslices",
  initialState: initialState,
  reducers: {
    setContent(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;

export const getAllContentThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));

      const response = await axios.get(`${serverURL}/get`);
      console.log(response);
      if (response.status === 200) {
        const { content } = response.data;
        dispatch(setContent({ allContent: content, count: content.count }));
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};

export const addContentThunkMiddleware = (
  { componentNumber, content },
  callback
) => {
  return async (dispatch) => {
    try {
      console.log({ componentNumber, content });
      dispatch(setLoader({ loader: true }));

      const response = await axios.post(`${serverURL}/add`, {
        componentNumber,
        content,
      });

      if (response.status === 201) {
        const { message } = response.data;
        toast.success(message);
        callback(null);
        await dispatch(getAllContentThunkMiddleware());
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }
      toast.error(message);
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};

export const updateContentThunkMiddleware = ({ content, id }, callback) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));

      const response = await axios.put(`${serverURL}/update/${id}`, {
        content,
      });

      if (response.status === 201) {
        const { message } = response.data;
        callback(null);
        toast.success(message);
        await dispatch(getAllContentThunkMiddleware());
      }
    } catch (error) {
      let message = "ERROR";
      if (error.hasOwnProperty("response")) {
        message = error.response.data.message;
      }

      toast.error(message);
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};
