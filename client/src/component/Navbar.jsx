import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { count } = useSelector((state) => state.content);
  return (
    <div className="px-2 pt-2  text-white">
      <div className="bg-gray-800 px-6 py-2 rounded-lg font-semibold">
        Count : {count?.count ? count?.count : "0"}
      </div>
    </div>
  );
};

export default Navbar;
