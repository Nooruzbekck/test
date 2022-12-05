import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TotalScore() {
  const { collectedIds } = useSelector((state) => state.test);
const navigate = useNavigate()
  return (
    <div>
      <h2>Статистика</h2>
      <h4>Балл :{collectedIds}</h4>
      <div>
        <button onClick={() => navigate("/answer")}>пересдать</button>
        <button onClick={() => navigate("/test-build")}>на главную</button>
      </div>
    </div>
  );
}

export default TotalScore;
