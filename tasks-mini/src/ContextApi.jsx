import React, { createContext, useState } from "react";

export const dataContext = createContext();

function ContextApi(props) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [open, setIsOpen] = useState(false);
  //   const localStorage = () => {
  //     localStorage.setItem("tasks", JSON.stringify(task));
  //   };

  const openform = () => {
    setIsOpen(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);
  };

  const deleteNote = (idx) => {
    let copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
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
      ]}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export default ContextApi;
