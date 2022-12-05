import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { testActions } from "../../redux/reducer/testSlice";
import Tester from "./Tester";
import VariantsTests from "./VariantsTests";

function QuestionInput(props) {
  const questions = props.questions;
  const [isActiveVarTest, setIsActiveTest] = useState(false);
  const [questionValue, setQuestionValue] = useState("");

  const dispatch = useDispatch();
  const newQuestions = questions.map((item) => {
    console.log(item.currentId, "currentteee");
    return (
      <MainDiv key={item.questionId}>
        <P>
          <SpanTitle> {item.title}</SpanTitle>
          <Span onClick={() => deleteHandler(item.questionId)}>X</Span>
        </P>
        <VariantsTests
          key={item.questionId}
          questionId={item.questionId}
          mainId={item.mainId}
          variants={item.variants}
          currentId={item.currentId}
        />
        <DivTester>{isActiveVarTest && <Tester />}</DivTester>
      </MainDiv>
    );
  });

  const addSubmitQuestionHandler = (e) => {
    e.preventDefault();
    const questionDispatch = {
      questionId: Math.random().toString(),
      mainId: props.mainId,
      title: questionValue,
      answer: null,
      variants: [],
      currentId: null,
    };
    dispatch(testActions.addQuestions(questionDispatch));
    setQuestionValue("");
    setIsActiveTest(true);
  };
  const deleteHandler = (questionId) => {
    const deleteId = {
      mainId: props.mainId,
      questionId: questionId,
    };
    dispatch(testActions.deleteQuestion(deleteId));
  };
  return (
    <div>
      <form onSubmit={addSubmitQuestionHandler}>
        <Input
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
        />
      </form>
      <div>{newQuestions}</div>
    </div>
  );
}

export default QuestionInput;

const Input = styled.input`
  width: 450px;
  height: 50px;
  border: none;
  border-bottom: 4px solid black;
  /* background: gray; */
  margin-right: 145x;
  font-size: 22px;
  padding-left: 20px;
  /* position: relative; */
`;
const MainDiv = styled.ul`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  background: gray;
  padding-right: 150px;
  border-radius: 25px;
  /* margin-left: 350px; */
`;
const P = styled.p`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  font-size: 30px;
  color: black;
  font-weight: bold;
  position: relative;
  /* top: 10px;
  right: 101px; */
  right: 0;
  /* bottom: 50px; */
`;
const SpanTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0 auto;
  margin-left: 170px;
`;
const DivTester = styled.div`
  position: absolute;
  bottom: 120px;
  right: 300px;
`;
