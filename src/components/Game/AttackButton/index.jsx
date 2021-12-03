import { useContext } from 'react';
import GameContext from 'context/GameContext';
import './style.css';

export default function AttackButton() {
  const { progress, setProgress, clickPower, ennemyIsDead } =
    useContext(GameContext);
  return (
    <div>
      <button
        className="attackBtn"
        type="submit"
        onClick={
          !ennemyIsDead ? () => setProgress(progress - clickPower) : null
        }
      >
        Mute this
      </button>
    </div>
  );
}
