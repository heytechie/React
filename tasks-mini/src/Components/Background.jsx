import React from "react";
import Navbar from "./Navbar";

function Background() {
  return (
    <div className="fixed w-full h-screen z-20">
      <Navbar />
      <h1 className=" z-1 text-[10vw] opacity-40  leading-none tracking-tighter absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-zinc-900">
        Tasks
      </h1>
    </div>
  );
}

export default Background;
