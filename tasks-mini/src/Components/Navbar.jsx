import React, { useContext } from "react";
import { dataContext } from "../ContextApi";

function Navbar() {
  const data = useContext(dataContext);
  return (
    <div className="w-full py-6 px-6 flex justify-between items-center">
      <h1 className="text-xl text-zinc-600 font-semibold ">GoodTasks</h1>
      <div>
        <button
          onClick={() => {
            data[7](true);
          }}
          className="bg-zinc-600 px-3 py-1 rounded-2xl active:scale-90 cursor-pointer text-gray-300"
        >
          Create Task
        </button>
      </div>
    </div>
  );
}

export default Navbar;
