import React, { useState } from "react";
import NewCard from "../Components/NewCard/NewCard";
import Card from "../Components/Card/Card";
import "./Main.css";

const initialCards = [
  {
    word: "a",
    description: "aa",
    example: "aaa",
  },
  {
    word: "b",
    description: "bb",
    example: "bbb",
  },
  {
    word: "c",
    description: "cc",
    example: "ccc",
  },
  {
    word: "d",
    description: "dd",
    example: "ddd",
  },
];

const Main = () => {
  const [cards, setCards] = useState(initialCards);


  const getData = (data) => {
    setCards((prevData) => {
      return [data, ...prevData];
    });
    
    console.log("In Main.js");
    console.log(data);
  };
  return (
    <div className="Main">
      <NewCard getData={getData} />
      <Card items={cards} />
    </div>
  );
};
export default Main;
