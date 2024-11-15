import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addNewTest } from "../../redux/slices/testSlice";
import { useNavigate } from "react-router-dom";

export const NewTestForm = () => {
  const testValue = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewTest = (e) => {
    e.preventDefault();

    const newTest = {
      id: Date.now().toString(),
      testName: testValue.current.value,
      questions: [],
    };

    dispatch(addNewTest(newTest));
    navigate("/new-question");
  };

  return (
    <Paper
      elevation={3}
      sx={{ width: "500px", margin: "50px auto", padding: "40px" }}
    >
      <form onSubmit={handleNewTest}>
        <TextField
          inputRef={testValue}
          fullWidth
          sx={{ marginBottom: "15px" }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Создать тест
        </Button>
      </form>
    </Paper>
  );
};
