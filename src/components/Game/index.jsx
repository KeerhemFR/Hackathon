import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import Player from './Player';
import Ennemy from './Ennemy';
import Button from './Button';
import Timer from './Timer';
import './style.css';

export default function Game() {
  const [playerLvl, setPlayerLvl] = useState(0);

  return (
    <>
      <h1 className="readyFight">READY? FIGHT!</h1>
      <Timer />
      <div className="fightContain">
        <Player playerLvl={playerLvl} setPlayerLvl={setPlayerLvl} />
        <Ennemy />
      </div>

      <Link to="/ChooseChar">
        <Button content="Return" />
      </Link>

      <div className="container">
        <Button className="nextOne" content="Next round" />
      </div>
    </>
  );
}
