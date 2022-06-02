import React from "react";
import CardItems from "./CardItems";
import "./Card.css";

const Card = (props) => {
console.log(props.items)
  return (
    
    <div className="Card">
      {props.items.map((card, index) => (
        <CardItems
          key={index}
          word={card.word}
          description={card.description}
          example={card.example}
        />
      ))}
      </div>
    
  );
};

export default Card;
