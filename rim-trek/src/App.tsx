import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Rimty",
    },
  });
  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Monmoy",
      },
      address: "Delft",
    });
  };

  return (
    <div>
      <h3>Player Name:{game.player.name}</h3>
      {game.address && <h3>Player Address:{game.address}</h3>}
      <button onClick={handleClick}>Update Player Name</button>
    </div>
  );
}

export default App;
