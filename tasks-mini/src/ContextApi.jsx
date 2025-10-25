import React, { createContext, useState } from "react";

export const dataContext = createContext();

function ContextApi(props) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]); // ✅ Empty array
  const [open, setIsOpen] = useState(false);

  const openform = () => {
    setIsOpen(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      details: details,
      isComplete: false, // ✅ Always add this
    };
    setTask([...task, newTask]);
    setIsOpen(false);
    setTitle("");
    setDetails("");
  };

  const toggleComplete = (idx) => {
    const updatedTasks = task.map((item, i) => {
      if (i === idx) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setTask(updatedTasks);
    console.log(updatedTasks);
  };

  const deleteNote = (idx) => {
    const filtered = task.filter((item, i) => i !== idx);
    setTask(filtered);
  };

  return (
    <dataContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export default ContextApi;
