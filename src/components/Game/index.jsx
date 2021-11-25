import { useState } from 'react';
import Player from './Player';
import Ennemy from './Ennemy';

export default function Game() {
  const [playerLvl, setPlayerLvl] = useState(0);

  return (
    <>
      <Ennemy />
      <Player playerLvl={playerLvl} setPlayerLvl={setPlayerLvl} />
    </>
  );
}
