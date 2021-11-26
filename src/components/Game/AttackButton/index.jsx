import { useContext } from 'react';
import GameContext from 'context/GameContext';
import './style.css';

export default function AttackButton() {
  const { progress, setProgress, clickPower } = useContext(GameContext);
  return (
    <div>
      <button
        className="attackBtn"
        type="submit"
        onClick={() => setProgress(progress - clickPower)}
      >
        Attack
      </button>
    </div>
  );
}
