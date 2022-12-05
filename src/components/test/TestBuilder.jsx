import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFetchDataTest, postFetchTest, testActions } from "../../redux/reducer/testSlice";
import Answer from "../answer/Answer";

function TestBuilder() {
  const {tests} = useSelector((state) => state.test)  
  console.log(tests, 'teafd');

  const [isAnswer, setIsAnswer] = useState(false);
  const [questionsMassiv, setQuestionsMassiv] = useState([])
  const [mainId, setMainId] = useState(null);
  console.log(questionsMassiv)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addAnswerHandler = (mainId, questions) => {
    console.log(questions)
    setIsAnswer(true)
    dispatch(testActions.addAnswer({ mainId }))
    setMainId(mainId)
    setQuestionsMassiv(questions)
    dispatch(postFetchTest([tests]))
  };
  
  useEffect(() => {
    getFetchDataTest();
  }, [])

 
  return (
    <div>
      {/* {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured : {error}</h2>} */}
      {isAnswer ? (
        <Answer questionsMassiv={questionsMassiv} mainId={mainId}/>
      ) : (
        <div>
          {tests.map((item) => (
            <div key={item.mainId}>
              <div>
                <h3>перейти на тест {item.tema}</h3>
                <button
                  onClick={() => addAnswerHandler(item.mainId, item.questions)}
                >
                  перейти
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => navigate("/tema")}>Добавить тест</button>
        </div>
      )}
    </div>
  );
}

export default TestBuilder;
