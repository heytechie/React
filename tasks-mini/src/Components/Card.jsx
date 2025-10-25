import React, { useContext } from "react";
import { SlNote } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react";
import { dataContext } from "../ContextApi";

function Card({ r }) {
  const [
    title,
    setTitle,
    details,
    setDetails,
    task,
    setTask,
    open,
    setIsOpen,
    openform,
    submitHandler,
    deleteNote,
    toggleComplete,
  ] = useContext(dataContext);

  return (
    <>
      {task.map((e, idx) => {
        const isTaskComplete = e.isComplete || false;
        return (
          <motion.div
            key={idx}
            drag
            dragConstraints={r}
            dragElastic={0}
            whileDrag={{ scale: 1.05 }}
            className={`shrink-0 w-60 h-72 rounded-[30px] ${
              e.isComplete ? "bg-green-600/50" : "bg-zinc-900/90"
            } text-white py-3 px-4 flex flex-col justify-between overflow-hidden`}
          >
            <div>
              <h1 className="font-semibold text-lg mb-4">
                <SlNote />
              </h1>
              <h2 className="font-semibold mb-3 flex items-center text-md">
                <GoDotFill />
                {e.title}
              </h2>
              <p className="text-sm leading-5">{e.details}</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => toggleComplete(idx)}
                className={`px-2 py-1 ${
                  e.isComplete ? "bg-gray-500" : "bg-green-600"
                } rounded-3xl text-sm text-gray-200 font-semibold active:scale-90 cursor-pointer`}
              >
                {e.isComplete ? "Completed" : "Complete"}
              </button>
              <button
                onClick={() => deleteNote(idx)}
                className="px-2 py-1 bg-zinc-700 rounded-3xl text-sm active:scale-90 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Card;
