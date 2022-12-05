import React, { useState } from "react";
import { testActions } from "../../redux/reducer/testSlice";
import { useDispatch } from "react-redux";
import VariantsItemTest from "./VariantsItemTest";
import Tester from "./Tester";
import styled from "styled-components";
// import VariantsItemTest from "./VariantsItemTest";

function VariantsTests(props) {
  const variants = props.variants;

  const [valueInputVar, setValueInputVar] = useState("");
  const [isActiveVar, setIsActiveVar] = useState(false);
  const dispatch = useDispatch();

  const variantHandler = () => {
    setIsActiveVar((prev) => !prev);
  };

  const variantHandlerInput = (e) => {
    e.preventDefault();
    dispatch(
      testActions.variantAddTest({
        questionId: props.questionId,
        mainId: props.mainId,
        var: valueInputVar,
        varId: Math.random().toString(),
      })
    );
    // setIsActiveTest(true);
  };

  return (
    <div>
      <Li>
        {variants.map((item) => {
          return (
            <VariantsItemTest
              key={item.varId}
              var={item.var}
              varId={item.varId}
              mainId={item.mainId}
              currentId={props.currentId}
              questionId={item.questionId}
            />
          );
        })}

        {isActiveVar ? (
          <Form onSubmit={variantHandlerInput}>
            <InputVar
              value={valueInputVar}
              onChange={(e) => setValueInputVar(e.target.value)}
            />
          </Form>
        ) : (
          <AnswerButton onClick={variantHandler}>Добавить вариант</AnswerButton>
        )}
      </Li>
      {/* <div>{isActiveVarTest && <Tester />}</div> */}
    </div>
  );
}

export default VariantsTests;

const AnswerButton = styled.button`
  background: gray;
  color: black;
  width: 250px;
  height: 50px;
  position: relative;
  border: none;
  font-size: 22px;
  color: blue;
`;
const Li = styled.li`
  width: 300px;
  display: grid;
  grid-template-columns: 200px 200px;
  list-style: none;
`;

const InputVar = styled.input`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid black;
  background: none;
`;
const Form = styled.form`
  width: 200px;
`;
