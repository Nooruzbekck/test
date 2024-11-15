import {
  Box,
  Button,
  Container,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion } from "../../redux/slices/testSlice";
import { VariantForm } from "./VariantForm";

export const NewQuestionForm = () => {
  const { tests } = useSelector((state) => state.tests);
  const questionValue = useRef();

  const dispatch = useDispatch();
  console.log("render");

  const handleNewQuestion = (parrentId) => {
    const newQuestion = {
      id: Date.now().toString(),
      mainId: parrentId,
      questionName: questionValue.current.value,
      variants: [],
    };
    dispatch(addNewQuestion(newQuestion));
  };

  return (
    <Container>
      {tests.map((test) => (
        <StyledBox key={test.id}>
          <Typography variant="h5">{test.testName}</Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNewQuestion(test.id);
            }}
          >
            <TextField inputRef={questionValue} fullWidth />

            <Button type="submit" fullWidth variant="contained">
              Добавить вопрос
            </Button>
          </form>

          <ContainerQuestion>
            {test.questions.map((item) => (
              <Paper className="list-question" key={item.id} elevation={3}>
                <Typography variant="h6" textAlign={"center"}>
                  {item.questionName}
                </Typography>
                <VariantForm
                  mainId={test.id}
                  id={item.id}
                  variants={item.variants}
                />
              </Paper>
            ))}
          </ContainerQuestion>
        </StyledBox>
      ))}
    </Container>
  );
};

const StyledBox = styled(Box)({
  width: "600px",
  margin: "auto",
  marginTop: "10px",

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

const ContainerQuestion = styled(Box)({
  marginTop: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  "& .list-question": {
    padding: "20px",
  },
});
