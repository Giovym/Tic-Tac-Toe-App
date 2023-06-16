import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "player-one": "O",
  "player-two": "X",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    pickPlayer(state, action) {
      if (action.payload === "X") {
        state["player-one"] = "X";
        state["player-two"] = "O";
      } else {
        state["player-one"] = "O";
        state["player-two"] = "X";
      }
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
