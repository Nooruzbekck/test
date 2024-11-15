import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewVariant, showIsChecked } from "../../redux/slices/testSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const VariantForm = ({ mainId, id, variants }) => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVariant = {
      variantId: Date.now().toString(),
      mainId: mainId,
      id: id,
      variantName: state,
      isChecked: false,
    };

    dispatch(addNewVariant(newVariant));

    setState("");
  };

  const handleCheckboxChange = (variantId) => {
    dispatch(
      showIsChecked({ mainId: mainId, questionId: id, variantId: variantId })
    );
  };


  return (
    <Container>
      <StyledList>
        {variants.map((variant, index) => (
          <StyledBox key={variant.variantId}>
            <Checkbox
              checked={variant.isChecked}
              onChange={() => handleCheckboxChange(variant.variantId)}
            />
            <span> {index + 1})</span>
            <Typography>{variant.variantName}</Typography>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
          </StyledBox>
        ))}
      </StyledList>

      <form onSubmit={handleSubmit}>
        <TextField onChange={(e) => setState(e.target.value)} value={state} />
        <Button type="submit" variant="contained">
          Добавить вариант
        </Button>
      </form>
    </Container>
  );
};

const StyledList = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});
