import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "tests",
  initialState: {
    tests: [],
  },
  reducers: {
    addNewTest: (state, { payload }) => {
      state.tests.push(payload);
    },
    addNewQuestion: (state, { payload }) => {
      const currentTest = state.tests.find(
        (item) => item.id === payload.mainId
      );
      currentTest.questions.push(payload);
    },
    addNewVariant: (state, { payload }) => {
      const currentTest = state.tests.find(
        (item) => item.id === payload.mainId
      );
      const currentQuestion = currentTest.questions.find(
        (question) => question.id === payload.id
      );
      currentQuestion.variants.push(payload);
    },
    showIsChecked: (state, { payload }) => {
      const currentTest = state.tests.find(
        (item) => item.id === payload.mainId
      );
      const currentQuestion = currentTest.questions.find(
        (question) => question.id === payload.questionId
      );
      currentQuestion.variants = currentQuestion.variants.map((item) => {
        if (item.variantId === payload.variantId) {
          return {
            ...item,
            isChecked: true,
          };
        }
        return {
          ...item,
          isChecked: false,
        };
      });
    },
  },
});

export const { addNewTest, addNewQuestion, addNewVariant, showIsChecked } =
  testSlice.actions;
