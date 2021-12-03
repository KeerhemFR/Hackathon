import { Link } from 'react-router-dom';
import Button from 'components/Game/Button';
import './style.css';
import GameContext from 'context/GameContext';
import { useEffect, useContext } from 'react/cjs/react.development';
import gameoverLogo from '../Assets/gameoverLogo.png';

export default function GameOver() {
  const { setEnnemySelect } = useContext(GameContext);
  useEffect(() => {
    setEnnemySelect(0);
  }, []);
  return (
    <div className="gameOverDisplay">
      <img className="gameOverLogo" src={gameoverLogo} alt="Game Over" />
      <Link to="/">
        <Button content="Return" />
      </Link>
    </div>
  );
}
