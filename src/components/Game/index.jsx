import { Link } from 'react-router-dom';
import Player from './Player';
import Ennemy from './Ennemy';
import Button from './Button';
import Timer from './Timer';
import AttackButton from './AttackButton';
import Pulse from '../Pulse';

import './style.css';

export default function Game() {
  return (
    <div className="gameWrapper">
      <div className="buttonWrapper">
        <Link to="/ChooseChar">
          <Button content="Return" />
        </Link>
        <div className="container">
          <Button className="nextOne" content="Next round" />
        </div>
      </div>
      <Pulse />

      <h1 className="readyFight">READY? FIGHT!</h1>
      <Timer />
      <div className="fightContain">
        <Player className="player" />
        <AttackButton className="attackButton" />

        <Ennemy />
      </div>
    </div>
  );
}
