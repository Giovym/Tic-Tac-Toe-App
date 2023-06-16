import { Fragment } from "react";
import { useSelector } from "react-redux";

import NewGame from "./components/NewGame";
import Game from "./components/Game";

function App() {
  const newGame = useSelector((state) => state.ui["new-game"]);
  const game = useSelector((state) => state.ui.game);

  return (
    <Fragment>
      {newGame && <NewGame />}
      {game && <Game />}
    </Fragment>
  );
}

export default App;
