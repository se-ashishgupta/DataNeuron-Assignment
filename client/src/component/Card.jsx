import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addContentThunkMiddleware,
  updateContentThunkMiddleware,
} from "../redux/features/content";

const Card = ({ contentData, componentNumber }) => {
  //States to use the button visibility
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  //This Function is used to add the content of a particular window
  const addHandler = () => {
    if (addStatus) {
      dispatch(
        addContentThunkMiddleware({ content, componentNumber }, (error) => {
          if (!error) {
            setAddStatus((prev) => !prev);
          }
        })
      );
    } else {
      setAddStatus((prev) => !prev);
    }
  };

  //This Function is used to update the content of a particular window
  const updateHandler = () => {
    if (updateStatus) {
      dispatch(
        updateContentThunkMiddleware(
          { content, id: contentData?._id },
          (error) => {
            if (!error) {
              setUpdateStatus((prev) => !prev);
            }
          }
        )
      );
    } else {
      setUpdateStatus((prev) => !prev);
    }
  };

  return (
    <div className="w-full h-full p-4  bg-gray-300 rounded-lg shadow-xl flex flex-col items-center justify-center gap-2 overflow-hidden">
      <div className=" space-y-2">
        {addStatus || updateStatus ? (
          <input
            type="text"
            className=" min-w-10 rounded-lg px-4 py-2"
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <h1 className=" text-center text-3xl font-bold">
            {contentData?.content ? contentData?.content : ""}
          </h1>
        )}
      </div>
      <div className=" flex items-center flex-wrap justify-center gap-2 ">
        <button
          onClick={addHandler}
          disabled={updateStatus}
          className="  bg-gray-800 text-white px-5 py-1 rounded-lg font-semibold border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
        >
          {addStatus ? "Add" : "Add Now"}
        </button>
        <button
          onClick={updateHandler}
          disabled={addStatus}
          className=" bg-gray-800 text-white px-5 py-1 rounded-lg font-semibold border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
        >
          {updateStatus ? "Update" : "Update Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;
