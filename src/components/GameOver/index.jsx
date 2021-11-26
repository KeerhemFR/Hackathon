import { Link } from 'react-router-dom';
import Button from 'components/Game/Button';
import gameoverLogo from '../Assets/gameoverLogo.png';
import './style.css';

export default function GameOver() {
  return (
    <div className="gameOverDisplay">
      <img className="gameOverLogo" src={gameoverLogo} alt="Game Over" />
      <Link to="/">
        <Button content="Return" />
      </Link>
    </div>
  );
}
