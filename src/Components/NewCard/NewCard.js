import React, { useState } from "react";
import "./NewCard.css";

const NewCard = (props) => {
  const [enteredWord, setEnteredWord] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredExample, setEnteredExample] = useState("");

  //   useState의 state 변경 함수
  const wordChangeHandler = (event) => {
    setEnteredWord(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const exampleChangeHandler = (event) => {
    setEnteredExample(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // 입력값 객체로 반환
    const cardData = {
      word: enteredWord,
      description: enteredDescription,
      example: enteredExample,
    };
    console.log(cardData);
    props.getData(cardData);
    setEnteredWord("");
    setEnteredDescription("");
    setEnteredExample("");
    alert('저장 완료.')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="AddCardItems">
        <div className="AddPageHeader">단어 추가하기</div>

        <div className="AddBox">
          <label>Word</label>
          <input
            type="text"
            value={enteredWord}
            onChange={wordChangeHandler}
            required
          />
        </div>

        <div className="AddBox">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            required
          />
        </div>

        <div className="AddBox">
          <label>Example</label>
          <input
            type="text"
            value={enteredExample}
            onChange={exampleChangeHandler}
            required
          />
        </div>

        <button type="submit" className="saveButton">
          저장하기
        </button>
      </div>
    </form>
  );
};

export default NewCard;
