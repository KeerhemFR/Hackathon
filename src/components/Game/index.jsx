import { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';
import Ennemy from './Ennemy';
import Button from './Button';
import Timer from './Timer';
import AttackButton from './AttackButton';

import './style.css';

export default function Game() {
  const [playerLvl, setPlayerLvl] = useState(0);

  return (
    <div className="gameWrapper">
      <div className="buttonWrapper">
        <Link to="/ChooseChar">
          <Button content="Return" />
        </Link>
        <div className="container">
          <Button className="nextOne" content="Next Stage" />
        </div>
      </div>
      <div className="pulseWrapper">
        <div className="pulseContainer" />
        <div className="pulseContainer2" />
        <div className="pulseContainer3" />
      </div>

      <h1 className="readyFight">READY? FIGHT!</h1>
      <Timer />
      <div className="fightContain">
        <Player playerLvl={playerLvl} setPlayerLvl={setPlayerLvl} />
        <AttackButton className="attackButton" />

        <Ennemy />
      </div>
    </div>
  );
}
