import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { playerActions } from "../store/player-slice";
import { uiActions } from "../store/ui-slice";

import Logo from "../assets/logo.svg";

const NewGame = () => {
  const dispatch = useDispatch();

  const playerOne = useSelector((state) => state.player["player-one"]);

  const playerOneX = () => {
    dispatch(playerActions.pickPlayer("X"));
  };

  const playerOneO = () => {
    dispatch(playerActions.pickPlayer("O"));
  };

  const newGameVsPlayer = () => {
    dispatch(uiActions.newGame());
    dispatch(uiActions.vsPlayer());
  };

  const newGameVsCpu = () => {
    dispatch(uiActions.newGame());
    dispatch(uiActions.vsCpu());
  };

  return (
    <main className="container h-screen flex content-center justify-center">
      <div className="w-80 sm:w-115 h-107 sm:h-118 mt-32 sm:m-auto">
        <img src={Logo} className="m-auto" alt="" />
        <div className="w-full h-52 flex flex-col px-6 bg-semi-dark-navy my-10 rounded-2xl	drop-shadow-black">
          <h4 className="font-bold text-base text-silver tracking-wider mx-auto pt-6 ">
            PICK PLAYER 1'S MARK
          </h4>
          <div className="w-full h-18 flex bg-dark-navy rounded-2xl mt-6">
            <div
              onClick={playerOneX}
              className={`w-1/2 flex justify-center ml-2 my-2 ${
                playerOne === "X" ? "bg-silver" : "hover:bg-semi-dark-navy"
              }  rounded-2xl cursor-pointer`}
            >
              <svg
                className={`scale-50 -mt-1 ${
                  playerOne === "X" ? `fill-dark-navy` : "fill-silver"
                }`}
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" />
              </svg>
            </div>
            <div
              onClick={playerOneO}
              className={`w-1/2 flex justify-center my-2 mr-2 ${
                playerOne === "O" ? "bg-silver" : "hover:bg-semi-dark-navy"
              }  rounded-2xl cursor-pointer`}
            >
              <svg
                className={`scale-50 -mt-1 ${
                  playerOne === "O" ? `fill-dark-navy` : "fill-silver"
                }`}
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
              </svg>
            </div>
          </div>
          <p className="text-sm tracking-wider text-silver mx-auto mt-5">
            REMEMBER: X GOES FIRST
          </p>
        </div>
        <div className="container h-32 sm:h-40 flex flex-col justify-end gap-6">
          <div className="w-full h-14 sm:h-16 flex bg-light-yellow hover:bg-lighter-yellow rounded-2xl	drop-shadow-yellow cursor-pointer">
            <h3
              onClick={newGameVsCpu}
              className="m-auto text-xl text-bold text-dark-navy tracking-widest"
            >
              NEW GAME (VS CPU)
            </h3>
          </div>
          <div className="w-full h-14 sm:h-16 flex bg-light-blue hover:bg-lighter-blue rounded-2xl	drop-shadow-blue cursor-pointer">
            <h3
              onClick={newGameVsPlayer}
              className="m-auto text-xl text-bold text-dark-navy tracking-widest"
            >
              NEW GAME (VS PLAYER)
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewGame;
