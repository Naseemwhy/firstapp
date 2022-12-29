import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card  d-flex mt-2">
      <img src={props.Image} />
      <div className="">
        <h6>
          <small>{props.date}</small>
        </h6>
        <h4>
          <small>
            <b>{props.title}</b>
          </small>
        </h4>
        <p>
          <small>{props.description}</small>
        </p>
      </div>
    </div>
  );
}

export default Cards;
