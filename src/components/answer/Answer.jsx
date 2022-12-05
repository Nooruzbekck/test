import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TotalScore from "../total/TotalScore";

import VariantAnswer from "./VariantAnswer";

function Answer(props) {
  const question = props.questionsMassiv;

  const navigate = useNavigate();

  const clickTotalHandler = () => {
  navigate("/total_score");
  };

  return (
    <div>
      {question?.map((item) => {
        //  console.log(item.answer);
        return (
          <div key={item.questionId}>
            <h2>{item?.title}</h2>
            <ul>
              <VariantAnswer
                variant={item.variants}
                questionId={item.questionId}
                mainId={props.mainId}
                currentId={item.currentId}
                answer={item.answer}
              />
            </ul>
          </div>
        );
      })}
        <button onClick={clickTotalHandler}>отправить</button>
    </div>
  );
}

export default Answer;
