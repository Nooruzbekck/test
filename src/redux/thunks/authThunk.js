import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpThunk = createAsyncThunk(
  "auth/signUpThunk",

  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://0882a0cf9c953f5c.mokky.dev/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const result = await response.json();

      console.log(result);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",

  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://0882a0cf9c953f5c.mokky.dev/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();

      console.log(result);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
