import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { testActions } from "../../redux/reducer/testSlice";
import { useSelector } from "react-redux";
import QuestionInput from "./QuestionInput";
import styled from "styled-components";

function Tema() {
  const [valueTema, setValueTema] = useState("");
  const { tests } = useSelector((state) => state.test);
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch("");

  const addSubmitHandler = (e) => {
    e.preventDefault();
    setIsActive((prevState) => prevState);
    const tema = {
      mainId: Math.random().toString(),
      tema: valueTema,
      questions: [],
    };
    dispatch(testActions.addTest(tema));
    setValueTema("");
  };
  return (
    <MainDivTema>
      <TemaH1>Тема теста</TemaH1>
      <form onSubmit={addSubmitHandler}>
        <Input
          type="text"
          value={valueTema}
          onChange={(e) => setValueTema(e.target.value)}
        />
      </form>

      {isActive && (
        <div>
          {tests.map((item) => {
            return (
              <div key={item.mainId}>
                <h2>
                  Тема теста <span>{item.tema}</span>
                </h2>
                <QuestionInput
                  key={item.mainId}
                  mainId={item.mainId}
                  questions={item.questions}
                />
              </div>
            );
          })}          
        </div>
      )}
    </MainDivTema>
  );
}

export default Tema;

const TemaH1 = styled.h1`
   color: black;
   font-size: 20px;
   font-weight: bold;
`
const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding-left: 20px;
  width: 400px;
  height: 50px;
  font-size: 25px;
`
const MainDivTema = styled.div`
  width: 600px;
  height: 1000px;
  margin: 0 auto ;
`
