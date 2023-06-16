import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "x-score": 0,
  "o-score": 0,
  "tie-score": 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    xScore(state) {
      state["x-score"]++;
    },
    oScore(state) {
      state["o-score"]++;
    },
    tieScore(state) {
      state["tie-score"]++;
    },
    newGame: () => initialState,
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice;
