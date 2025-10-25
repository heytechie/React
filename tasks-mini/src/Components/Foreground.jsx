import React, { useRef } from "react";
import TaskForm from "./TaskForm";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className=" flex fixed gap-5 top-15 left-5 right-5 w-full h-screen
     z-30 flex-wrap overflow-hidden"
    >
      <TaskForm />
      <Card r={ref} />
    </div>
  );
}

export default Foreground;
