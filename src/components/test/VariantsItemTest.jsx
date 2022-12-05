import React, { useState } from "react";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { testActions } from "../../redux/reducer/testSlice";
import styled from "styled-components";


function VariantsItemTest(props) {
  const { mainId, currentId, questionId, varId } = props;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const [editValue, setEditValue] = useState("");

  const clickIconHandler = () => {
    dispatch(
      testActions.toggleClickIcon({ currentId, questionId, varId, mainId })
    );
  };
  const chexboxId = props.currentId === props.varId;

  const removeItem = (variantId) => {
    dispatch(
      testActions.removeVariantId({
        currentId,
        questionId,
        variantId,
        mainId,
      })
    );
  };

  const openEdit = (varValue, varId) => {
    console.log(varValue,);
    setEdit(varId);
    setEditValue(varValue);
  };
  const onSaveValue = (variantId) => {
      dispatch(
        testActions.editValue({ questionId, variantId, mainId, editValue })
      );
      setEdit(null)
  }
  return (
    <MainDiv>
      {currentId === varId}
      <div onClick={clickIconHandler}>
        {chexboxId ? <GrCheckboxSelected /> : <GrCheckbox />}
      </div>

      <div>
        {varId === edit ? (
          <div>
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={() => onSaveValue(varId)}>save</button>
          </div>
        ) : (
          <MainDiv>
            <VarDiv>{props.var}</VarDiv>
              <TiDeleteOutline onClick={() => removeItem(props.varId)} />
              <CiEdit onClick={() => openEdit(props.var, props.varId)} />
          </MainDiv>
        )}
      </div>
      <div>
      </div>
    </MainDiv>
  );
}

export default VariantsItemTest;
const MainDiv = styled.div`
    display: flex;
   gap: 12px;
`
const VarDiv = styled.div`
    font-size: 20px;

`
