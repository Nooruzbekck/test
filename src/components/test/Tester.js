import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFetchDataTest, postFetchTest } from "../../redux/reducer/testSlice";

function Tester() {
  const naviate = useNavigate();
  const dispatch = useDispatch();
  const clickGetHandler = () => {
    dispatch(postFetchTest());
    naviate("/test-build");
  };

  return (
    <div>
      <button onClick={clickGetHandler}>сохранить</button>
    </div>
  );
}

export default Tester;
