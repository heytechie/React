import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-75 relative rounded-4xl p-4px overflow-hidden">
      <img src={props.img} alt="" className="h-full w-full object-cover" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
