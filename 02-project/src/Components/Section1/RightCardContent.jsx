import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute left-0 top-0  h-full w-full p-8 flex flex-col justify-between">
      <h2 className="h-12 w-12 text-xl font-semibold bg-white rounded-full flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl w-[90%] leading-relaxed mb-14 text-white  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          tenetur!
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-500 px-7 py-2 rounded-full text-white font-medium">
            {props.tag}
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded-full text-white font-medium">
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
