import GameContext from 'context/GameContext';
import { useContext, useEffect } from 'react';
import './style.css';

export default function LifeBar() {
  const {
    ennemySelect,
    setEnnemySelect,
    setEnnemyIsDead,
    enemyHP,
    progress,
    setProgress,
  } = useContext(GameContext);

  useEffect(() => {
    if (!progress) {
      setEnnemySelect(ennemySelect + 1);
      setEnnemyIsDead(true);
    }
  }, [progress]);

  if (progress < 0) {
    setProgress(0);
  }

  return (
    <div className="LifeBar">
      <p>{setEnnemyIsDead}</p>
      <progress id="file" max={enemyHP} value={progress} />
      <p className="hpCount">
        HP : {progress}/{enemyHP}
      </p>
    </div>
  );
}
