import React, { useContext } from "react";
import { dataContext } from "../ContextApi";

function TaskForm() {
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
    color,
  ] = useContext(dataContext);

  const reset = () => {
    setTitle("");
    setDetails("");
  };
  return open ? (
    <div className="  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[30vmax] bg-zinc-600/80 h-[20vmax] rounded-[20px] py-5 px-10 ">
      <div className="flex items-center justify-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex gap-5 flex-col"
        >
          <h1 className="text-xl font-bold text-center text-zinc-300">
            Create your task
          </h1>
          <input
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="bg-zinc-500 outline-none rounded-[10px]  p-1 text-zinc-300 h-10 w-sm"
            placeholder="Write your task's title "
          />
          <textarea
            required
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="bg-zinc-500 outline-none rounded-[10px]   p-2 text-zinc-300 text-wrap w-sm mb-3 resize-none"
            placeholder="Write your task's description"
          />
          <div className={"flex justify-evenly"}>
            <button className="px-4 py-2 bg-green-600 rounded-3xl text-sm text-gray-200 font-semibold active:scale-90 cursor-pointer">
              Create Task
            </button>
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2 bg-zinc-500 text-zinc-200 rounded-3xl text-sm active:scale-90 cursor-pointer "
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default TaskForm;
