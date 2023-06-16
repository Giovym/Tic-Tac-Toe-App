import React from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "../store/ui-slice";
import { gameBoardActions } from "../store/game-board-slice";

const RestartGame = () => {
  const dispatch = useDispatch();

  const cancelRestartGameHandler = () => {
    dispatch(uiActions.restartGame());
  };

  const restartGameHandler = () => {
    dispatch(gameBoardActions.newGame());
    dispatch(uiActions.restartGame());
  };

  return (
    <div className="container h-screen absolute flex">
      <div className="h-64 container flex justify-center mt-64 sm:my-auto bg-semi-dark-navy">
        <div className="w-80 sm:w-123 h-36 sm:h-44 my-auto flex flex-col items-center justify-around">
          <div className="container flex items-center justify-between">
            <h1 className="font-bold text-2xl sm:text-4xl tracking-widest mx-auto text-silver">
              RESTART GAME?
            </h1>
          </div>
          <div className="flex  gap-4">
            <button
              onClick={cancelRestartGameHandler}
              className="w-36 h-13  rounded-2xl bg-silver hover:bg-light-silver drop-shadow-silver font-bold text-base tracking-wider"
            >
              NO, CANCEL
            </button>
            <button
              onClick={restartGameHandler}
              className="w-36 h-13 rounded-2xl bg-light-yellow hover:bg-lighter-yellow drop-shadow-yellow-smaller font-bold text-base tracking-wider"
            >
              YES, RESTART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestartGame;
