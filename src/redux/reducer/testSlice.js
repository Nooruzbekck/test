import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

export const postFetchTest = createAsyncThunk(
  "test/postFetchTest",
  async function (data) {
    try {
      const response = await fetch(
        "https://test-builder-69269-default-rtdb.firebaseio.com/test.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      return response;
    } catch (error) {}
  }
);

export const getFetchDataTest = createAsyncThunk(
  "test/getFetchDataTest",
  async function (_, { rejectWithValue, getState }) {
    try {
      const response = await fetch(
        "https://test-builder-69269-default-rtdb.firebaseio.com/test.json"
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      const lodiing = [];
      for (const key in data) {
        lodiing.push({
          mainId: data[key].mainId,
          tema: data[key].tema,
          questions: data[key].questions,
        });
      }
      return lodiing;
    } catch (error) {
      return rejectWithValue(error.messeage);
    }
  }
);

const initialState = {
  tests: [],
  status: null,
  error: null,
  collectedIds: 0,
  // isActive: false,
};
const testSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    addTest(state, action) {
      const newTema = action.payload;
      state.tests.push(newTema);
      // state.isActive = !state.isActive;
    },
    addQuestions(state, action) {
      const newAction = action.payload;

      // console.log(current(state.tests));
      const newFindt = state.tests.find(
        (item) => item.mainId === newAction.mainId
      );
      newFindt.questions.push(action.payload);
    },
    variantAddTest(state, action) {
      const actionPay = action.payload;

      const newFindt = state.tests.find(
        (item) => item.mainId === actionPay.mainId
      );
      const newTwoFind = newFindt.questions.find(
        (item) => item.questionId === actionPay.questionId
      );
      newTwoFind.variants.push(actionPay);
    },
    toggleClickIcon(state, action) {
      const newToggle = state.tests.find(
        (item) => item.mainId === action.payload.mainId
      );
      const newTwoFind = newToggle.questions.find(
        (item) => item.questionId === action.payload.questionId
      );
      newTwoFind.currentId = action.payload.varId;
    },
    deleteQuestion(state, action) {
      const { mainId, questionId } = action.payload;
      const findId = state.tests.find((item) => item.mainId === mainId);
      findId.questions = findId.questions.filter(
        (item) => item.questionId !== questionId
      );
    },
    removeVariantId(state, action) {
      const { questionId, variantId, mainId } = action.payload;
      const findId = state.tests.find((item) => item.mainId === mainId);
      const newTwoFind = findId.questions.find(
        (item) => item.questionId === questionId
      );
      newTwoFind.variants = newTwoFind.variants.filter(
        (item) => item.varId !== variantId
      );
    },
    editValue(state, action) {
      const { questionId, mainId, editValue, variantId } = action.payload;
      const findId = state.tests.find((item) => item.mainId === mainId);
      const newTwoFind = findId.questions.find(
        (item) => item.questionId === questionId
      );

      const newMap = newTwoFind.variants.map(
        (item) => item.varId === variantId
      );
      if (newMap.var) {
        newMap.var = editValue;
      }
    },
    addAnswer(state, action) {
      const { mainId } = action.payload;
      const newFind = state.tests.find((item) => item.mainId === mainId);
      newFind.questions = newFind.questions.map((item) => item);
    },
    toggleIcon(state, action) {
      const { mainId, questionId, varId, currentId } = action.payload;

      const newToggle = state.tests.find((item) => item.mainId === mainId);
      const newTwoFind = newToggle.questions.find(
        (item) => item.questionId === questionId
      );
      newTwoFind.answer = varId;
      if (currentId === newTwoFind.answer) {
        state.collectedIds = state.collectedIds + 10;
      } else {
        state.collectedIds = state.collectedIds + 0;
      }
    },
  },
  extraReducers: {
    [getFetchDataTest.pending]: (state) => {
      state.status = "loading";
      state.status = null;
    },
    [getFetchDataTest.fulfilled]: (state, action) => {
      console.log(action.payload, "getllllll");
      state.status = "resolved";
      state.tests = action.payload;
    },
    [getFetchDataTest.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const testActions = testSlice.actions;
export default testSlice;
