import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card card-component mt-5 bg-light">
      <div className="">
        <img src={props.Image} className="image" />
        <h6 className="mt-3 date">{props.date}</h6>
        <h4 className="title">{props.title}</h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
