import React from "react";
import Taskbar from "./Taskbar";
import Content from "./Content";
const Section1 = (props) => {
  return (
    <div className=" w-full h-screen">
      <Taskbar />
      <Content users={props.users} />
    </div>
  );
};

export default Section1;
