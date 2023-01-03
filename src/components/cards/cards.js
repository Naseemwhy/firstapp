import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card card-component mt-5">
      <div className="">
        <img src={props.Image} className="naseem" />
        <h6>{props.date}</h6>
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
