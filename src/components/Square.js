import React, { useState } from "react";
import { useSelector } from "react-redux";

import X from "../assets/icon-x.svg";
import xOutline from "../assets/icon-x-outline.svg";
import O from "../assets/icon-o.svg";
import oOutline from "../assets/icon-o-outline.svg";

const Square = (props) => {
  const mark = useSelector((state) => state.gameboard[props.id][0]);

  const activePlayer = useSelector((state) => state.gameboard["active-player"]);

  const value = useSelector((state) => state.gameboard[props.id][1]);

  const [xIconOutline, setXIconOutline] = useState(false);
  const [oIconOutline, setOIconOutline] = useState(false);

  const toggleHandler = (e) => {
    if (value) {
      return;
    }
    setXIconOutline(false);
    setOIconOutline(false);
    props.onToggleHandler(e.target.id);
  };

  const showIcon = () => {
    if (mark) {
      return;
    }
    setXIconOutline(true);
    setOIconOutline(true);
  };

  const noShowIcon = () => {
    setXIconOutline(false);
    setOIconOutline(false);
  };

  return (
    <div
      id={props.id}
      onClick={(e) => toggleHandler(e)}
      onMouseEnter={showIcon}
      onMouseLeave={noShowIcon}
      className="w-24 sm:w-35 h-24 sm:h-35 flex items-center justify-center bg-semi-dark-navy rounded-2xl drop-shadow-black cursor-pointer"
    >
      {mark && value === "X" && (
        <img src={X} className="scale-70 sm:scale-100" alt="X icon" />
      )}
      {mark && value === "O" && (
        <img src={O} className="scale-70 sm:scale-100" alt="O icon" />
      )}
      {activePlayer === "X"
        ? xIconOutline && (
            <img
              className="active:hidden"
              src={xOutline}
              alt="X icon outline style"
            />
          )
        : oIconOutline && (
            <img
              className="active:hidden"
              src={oOutline}
              alt="O icon outline style"
            />
          )}
    </div>
  );
};

export default Square;
