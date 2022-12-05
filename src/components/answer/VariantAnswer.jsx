import React from "react";
import VariantCheck from "./VariantCheck";

function VariantAnswer(props) {
  const variant = props.variant;

  // console.log(variant);
  const currrentId = props.currentId;

  return (
    <ul>
      {variant?.map((item) => (
        <li key={item.varId}>
          <div>
            <VariantCheck
              varId={item.varId}
              questionId={props.questionId}
              mainId={props.mainId}
              currentId={currrentId}
              answer={props.answer}
            />
          </div>

          {item.var}
        </li>
      ))}
    </ul>
  );
}

export default VariantAnswer;
