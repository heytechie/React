import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <>
      <div className="Card">
        <div className="top">
          <img src={props.logo} alt="" />

          <button>
            Save <Bookmark size={13} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyName} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>{props.pay}</h4>
            <h5>{props.location}</h5>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
