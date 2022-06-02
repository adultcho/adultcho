import React from "react";
import "./CardItems.css";

const CardItems = (props) => {
  console.log(props.word)
  return (
    <article className="CardItems">
      <div className="rows word">
          <p>{props.word}</p>
          <div className="icons">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        </div>
      </div>
      <div className="rows description"><p>{props.description}</p></div>
      <div className="rows example"><p>{props.example}</p></div>
    </article>
  );
};

export default CardItems;
