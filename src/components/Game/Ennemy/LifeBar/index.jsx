import GameContext from 'context/GameContext';
import { useContext, useEffect } from 'react';
import './style.css';

export default function LifeBar() {
  const { progress, setProgress } = useContext(GameContext);
  // const { ennemyInfos } = useContext(GameContext);
  const { enemyHP } = useContext(GameContext);
  const { ennemySelect, setEnnemySelect } = useContext(GameContext);
  const { ennemyIsDead, setEnnemyIsDead } = useContext(GameContext);

  useEffect(() => {
    if (!progress) {
      setEnnemySelect(ennemySelect + 1);
      setEnnemyIsDead(true);

      console.log(ennemyIsDead);
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
