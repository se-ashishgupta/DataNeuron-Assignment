import React, { useEffect } from "react";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import { getAllContentThunkMiddleware } from "./redux/features/content";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Loader from "./component/Loader";

function App() {
  //Use dispatch hook to call the ThunkMiddleware Functions
  const dispatch = useDispatch();

  //Uses the state from loader reducer
  const { loader } = useSelector((state) => state.loader);

  //This effect is used to get all content data whenever this component mount
  useEffect(() => {
    dispatch(getAllContentThunkMiddleware());
  }, []);

  return (
    <>
      {/* All Components */}
      <Navbar />
      <Home />
      <Toaster />
      {loader && <Loader />}
    </>
  );
}

export default App;
