import { configureStore } from "@reduxjs/toolkit";

import gameBoardSlice from "./game-board-slice";
import playerSlice from "./player-slice";
import uiSlice from "./ui-slice";
import scoreSlice from "./score-slice";

const store = configureStore({
  reducer: {
    gameboard: gameBoardSlice.reducer,
    player: playerSlice.reducer,
    ui: uiSlice.reducer,
    score: scoreSlice.reducer,
  },
});

export default store;
