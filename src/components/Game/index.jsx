import { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';
import Ennemy from './Ennemy';
import Button from './Button';
import AttackButton from './AttackButton';
import './style.css';

export default function Game() {
  const [playerLvl, setPlayerLvl] = useState(0);
  return (
    <>
      <h1 className="readyFight">READY? FIGHT!</h1>
      <div className="fightContain">
        <Player playerLvl={playerLvl} setPlayerLvl={setPlayerLvl} />
        <AttackButton />

        <Ennemy />
      </div>
      <Link to="/ChooseChar">
        <Button content="Return" />
      </Link>
      <Button className="nextOne" content="Next round" />
    </>
  );
}
