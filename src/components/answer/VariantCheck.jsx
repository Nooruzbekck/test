import React from 'react'
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from '../../redux/reducer/testSlice';


function VariantCheck({ varId, currentId, mainId, questionId }) {
    const {tests} = useSelector((state) => state.test)
    const newTests = tests.find((item) => item.mainId === mainId)
    const newQuestion = newTests.questions.find((item) => item.questionId === questionId)
    const newAnswer = newQuestion.answer
     
  
  const dispatch = useDispatch();

  const clickIconHandler = (varId) => {
      
    const Id = {
      mainId: mainId,
      questionId: questionId,
      varId: varId,
      currentId: currentId,
    };
    dispatch(testActions.toggleIcon(Id));
    dispatch(testActions.collectTrueAnswers(Id))
  };
  const check = newAnswer === varId;


  return (
    <div onClick={() => clickIconHandler(varId)}>
      {check ? <GrCheckboxSelected /> : <GrCheckbox />}
    </div>
  );
}   

export default VariantCheck