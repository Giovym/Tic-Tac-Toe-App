import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  0: [false, ""],
  1: [false, ""],
  2: [false, ""],
  3: [false, ""],
  4: [false, ""],
  5: [false, ""],
  6: [false, ""],
  7: [false, ""],
  8: [false, ""],
  "active-player": "X",
  "x-win": false,
  "o-win": false,
  tie: false,
};

const gameBoardSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toggle(state, action) {
      state[action.payload][0] = true;
    },
    activePlayer(state, action) {
      if (
        state["active-player"] === "X" &&
        state["x-win"] === false &&
        state["o-win"] === false &&
        state.tie === false
      ) {
        state[action.payload][1] = "X";
        state["active-player"] = "O";
      } else if (
        state["active-player"] === "O" &&
        state["o-win"] === false &&
        state["x-win"] === false &&
        state.tie === false
      ) {
        state[action.payload][1] = "O";
        state["active-player"] = "X";
      }
    },
    xWin(state) {
      state["x-win"] = true;
    },
    oWin(state) {
      state["o-win"] = true;
    },
    tie(state) {
      if (state["x-win"] === true) {
        return;
      } else if (state["o-win"] === true) {
        return;
      } else state.tie = true;
    },
    newGame: () => initialState,
  },
});

export const gameBoardActions = gameBoardSlice.actions;

export default gameBoardSlice;
