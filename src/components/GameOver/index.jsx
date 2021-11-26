import { Link } from 'react-router-dom';
import Button from 'components/Game/Button';
import './style.css';

export default function GameOver() {
  return (
    <div className="gameOverDisplay">
      <Link to="/">
        <Button content="Return" />
      </Link>
    </div>
  );
}
