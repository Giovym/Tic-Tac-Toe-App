import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { gameBoardActions } from "../store/game-board-slice";
import { scoreActions } from "../store/score-slice";
import { uiActions } from "../store/ui-slice";

import X from "../assets/icon-x.svg";
import O from "../assets/icon-o.svg";

const GameFinished = () => {
  const dispatch = useDispatch();

  const xWin = useSelector((state) => state.gameboard["x-win"]);
  const oWin = useSelector((state) => state.gameboard["o-win"]);
  const tie = useSelector((state) => state.gameboard.tie);

  const vsPlayer = useSelector((state) => state.ui["vs-player"]);

  const playerOne = useSelector((state) => state.player["player-one"]);

  const quit = () => {
    dispatch(gameBoardActions.newGame());
    dispatch(scoreActions.newGame());
    dispatch(uiActions.newGame());
  };

  const nextRound = () => {
    dispatch(gameBoardActions.newGame());
  };

  return (
    <main className="container h-screen absolute flex">
      <div className="h-56 sm:h-64 container flex justify-center mt-64 sm:my-auto bg-semi-dark-navy">
        <div className="w-80 sm:w-123 h-36 sm:h-44 my-auto flex flex-col items-center justify-around">
          <h4 className=" font-bold text-sm sm:text-base tracking-wider text-silver">
            {tie
              ? ""
              : vsPlayer
              ? `PLAYER 
            ${
              xWin
                ? playerOne === "X"
                  ? "1"
                  : "2"
                : playerOne === "O"
                ? "1"
                : "2"
            } 
            WINS!`
              : ` 
            ${
              xWin
                ? playerOne === "X"
                  ? "YOU WON!"
                  : "OH NO, YOU LOST..."
                : playerOne === "O"
                ? "YOU WON!"
                : "OH NO, YOU LOST..."
            } 
            `}
          </h4>
          <div className="container flex items-center justify-between">
            {xWin && (
              <img src={X} className="scale-50 sm:scale-100" alt="X icon" />
            )}
            {oWin && (
              <img src={O} className="scale-50 sm:scale-100" alt="O icon" />
            )}
            <h1
              className={`font-bold text-2xl sm:text-4xl tracking-widest ${
                xWin && "text-light-blue"
              } ${oWin && "text-light-yellow"}  ${
                tie && "mx-auto text-silver"
              }`}
            >
              {xWin || oWin ? "TAKES THE ROUND" : "ROUND TIED"}
            </h1>
          </div>
          <div className="flex  gap-4">
            <button
              onClick={quit}
              className="w-18 h-13  rounded-2xl bg-silver hover:bg-light-silver drop-shadow-silver font-bold text-base tracking-wider"
            >
              QUIT
            </button>
            <button
              onClick={nextRound}
              className="w-36 h-13 rounded-2xl bg-light-yellow hover:bg-lighter-yellow drop-shadow-yellow-smaller font-bold text-base tracking-wider"
            >
              NEXT ROUND
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameFinished;
