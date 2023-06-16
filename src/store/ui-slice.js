import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "new-game": true,
  game: false,
  "vs-player": false,
  "vs-cpu": false,
  "restart-game": false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    newGame(state) {
      state["new-game"] = !state["new-game"];
      state.game = !state.game;
    },
    vsPlayer(state) {
      state["vs-player"] = true;
      state["vs-cpu"] = false;
    },
    vsCpu(state) {
      state["vs-cpu"] = true;
      state["vs-player"] = false;
    },
    restartGame(state) {
      state["restart-game"] = !state["restart-game"];
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
