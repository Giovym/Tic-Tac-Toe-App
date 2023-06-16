import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gameBoardActions } from "../store/game-board-slice";
import { scoreActions } from "../store/score-slice";
import { uiActions } from "../store/ui-slice";

import Square from "./Square";
import GameFinished from "./GameFinished";
import RestartGame from "./RestartGame";

const Game = () => {
  const dispatch = useDispatch();

  const activePlayer = useSelector((state) => state.gameboard["active-player"]);

  const restartGame = useSelector((state) => state.ui["restart-game"]);

  const restartGameHandler = () => {
    dispatch(uiActions.restartGame());
  };

  const vsPlayer = useSelector((state) => state.ui["vs-player"]);
  const vsCpu = useSelector((state) => state.ui["vs-cpu"]);

  const playerOne = useSelector((state) => state.player["player-one"]);

  const xWin = useSelector((state) => state.gameboard["x-win"]);
  const oWin = useSelector((state) => state.gameboard["o-win"]);
  const tie = useSelector((state) => state.gameboard.tie);

  const xScore = useSelector((state) => state.score["x-score"]);
  const oScore = useSelector((state) => state.score["o-score"]);
  const tieScore = useSelector((state) => state.score["tie-score"]);

  const gameBoard = useSelector((state) =>
    Object.values(state.gameboard)
      .splice(0, 9)
      .flat()
      .filter((el) => el !== true && el !== false)
  );

  const gameBoardEmpty = gameBoard.every((el) => el === "");

  useEffect(() => {
    setTimeout(() => {
      if (playerOne === "O" && gameBoardEmpty) {
        const randomNumber = Math.floor(Math.random() * gameBoard.length);
        dispatch(gameBoardActions.toggle(randomNumber));
        dispatch(gameBoardActions.activePlayer(randomNumber));
      }
    }, 500);
  }, [gameBoardEmpty]);

  console.log(gameBoard);

  const updateGameBoard = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (
        gameBoard[a] === "X" &&
        gameBoard[b] === "X" &&
        gameBoard[c] === "X"
      ) {
        dispatch(scoreActions.xScore());
        dispatch(gameBoardActions.xWin());
      }
      if (
        gameBoard[a] === "O" &&
        gameBoard[b] === "O" &&
        gameBoard[c] === "O"
      ) {
        dispatch(scoreActions.oScore());
        dispatch(gameBoardActions.oWin());
      }
    }
  };

  useEffect(() => {
    updateGameBoard();
  }, [activePlayer]);

  const randomMark = (e) => {
    let cells = [];

    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] === "") {
        if (i !== +e) {
          cells.push(i);
        }
      }
    }

    if (cells.length > 0) {
      const randomNumber = Math.floor(Math.random() * cells.length);
      dispatch(gameBoardActions.toggle(cells[randomNumber]));
      dispatch(gameBoardActions.activePlayer(cells[randomNumber]));
    }
  };

  const toggleHandler = (e) => {
    if (vsPlayer) {
      dispatch(gameBoardActions.toggle(e));
      dispatch(gameBoardActions.activePlayer(e));
    }
    if (vsCpu) {
      // if (playerOne === "X") {
      dispatch(gameBoardActions.toggle(e));
      dispatch(gameBoardActions.activePlayer(e));

      setTimeout(() => {
        randomMark(e);
      }, 500);
      // }
      // if (playerOne === "O") {
      //   const gameBoardEmpty = gameBoard.every((el) => el === "");

      //   if (gameBoardEmpty) {
      //     const randomNumber = Math.floor(Math.random() * gameBoard.length);
      //     dispatch(gameBoardActions.toggle(gameBoard[randomNumber]));
      //     dispatch(gameBoardActions.activePlayer(gameBoard[randomNumber]));
      //   } else {
      //     setTimeout(() => {
      //       randomMark(e);
      //     }, 500);
      //   }

      //   dispatch(gameBoardActions.toggle(e));
      //   dispatch(gameBoardActions.activePlayer(e));
      // }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (gameBoard.find((el) => el === "") === undefined) {
        if (xWin === false && oWin === false) {
          dispatch(gameBoardActions.tie());
          if (tie) {
            dispatch(scoreActions.tieScore());
          }
        }
      }
    }, 100);
  }, [activePlayer, tie]);

  const squares = new Array(9).fill("");

  return (
    <main className="container h-screen flex content-center justify-center">
      <div className="w-80 sm:w-115 h-129 sm:h-156 mt-6 sm:m-auto">
        <div className="container flex justify-between">
          <div className="w-1/3 flex items-center justify-start">
            <svg width="72" height="32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none">
                <path
                  d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
                  fill="#31C3BD"
                />
                <path
                  d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
                  fill="#F2B137"
                />
              </g>
            </svg>
          </div>

          <div className="w-32 sm:w-36 h-10 sm:h-12 bg-semi-dark-navy drop-shadow-black rounded-2xl flex items-center justify-start">
            {activePlayer === "X" && (
              <svg
                className="scale-30 sm:ml-2  fill-silver"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" />
              </svg>
            )}

            {activePlayer === "O" && (
              <svg
                className="scale-30 sm:ml-2 fill-silver"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
              </svg>
            )}

            <h4 className="font-bold text-base tracking-wider mr-4 sm:mr-0 text-silver">
              TURN
            </h4>
          </div>

          <div className="w-1/3 flex  justify-end">
            <div
              onClick={restartGameHandler}
              className="w-13 h-10 sm:h-13 flex items-center justify-center rounded-2xl bg-silver hover:bg-light-silver drop-shadow-silver cursor-pointer"
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
                  fill="#1F3641"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="container h-80 sm:h-115 grid grid-cols-3 justify-items-center gap-5 mt-20 sm:mt-5">
          {squares.map((item, i) => {
            return (
              <Square onToggleHandler={toggleHandler} key={i} id={i}></Square>
            );
          })}
        </div>

        <div className="container h-18 mt-10 sm:mt-5 flex content-end justify-around gap-5">
          <div className="w-35 h-18 flex flex-col justify-center items-center rounded-2xl bg-light-blue">
            <p className="text-sm tracking-wider">
              X (
              {vsPlayer
                ? playerOne === "X"
                  ? "P1"
                  : "P2"
                : playerOne === "X"
                ? "YOU"
                : "CPU"}
              )
            </p>
            <h2 className="font-bold text-2xl tracking-widest">{xScore}</h2>
          </div>
          <div className="w-35 h-18 flex flex-col justify-center items-center rounded-2xl bg-silver">
            <p className="text-sm tracking-wider">TIES</p>
            <h2 className="font-bold text-2xl tracking-widest">{tieScore}</h2>
          </div>
          <div className="w-35 h-18 flex flex-col justify-center items-center rounded-2xl bg-light-yellow">
            <p className="text-sm tracking-wider">
              O (
              {vsPlayer
                ? playerOne === "O"
                  ? "P1"
                  : "P2"
                : playerOne === "O"
                ? "YOU"
                : "CPU"}
              )
            </p>
            <h2 className="font-bold text-2xl tracking-widest">{oScore}</h2>
          </div>
        </div>
      </div>
      {(xWin || oWin || tie) && <GameFinished />}
      {restartGame && <RestartGame />}
    </main>
  );
};

export default Game;
