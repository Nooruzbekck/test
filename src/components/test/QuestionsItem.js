import React from "react";
import VariantsTests from "./VariantsTests";

function QuestionsItem(props) {
  const variant = props.variant;
  return (
    <ul key={props.id}>
      {variant.map((item) => {
        return (
          <VariantsTests
            id={item.id}
            questionId={props.questionId}
            mainId={props.mainId}
            var={item.var}
            // answer={props.answer}
          />
        );
      })}
    </ul>
  );
}

export default QuestionsItem;
