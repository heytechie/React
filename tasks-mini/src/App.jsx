import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import TaskForm from "./Components/TaskForm";
import Foreground from "./Components/Foreground";

function App() {
  return (
    <div className=" relative h-screen w-full bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
