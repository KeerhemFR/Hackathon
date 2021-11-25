import GameContext from 'context/GameContext';
import { useContext, useState } from 'react';
import './style.css';

export default function LifeBar() {
  const { progress, setProgress } = useContext(GameContext);
  const { ennemyInfos } = useContext(GameContext);
  const [enemyHP] = useState(Math.floor(ennemyInfos.nb_fan / 1000));

  if (progress < 0) {
    setProgress(0);
  }

  return (
    <div className="LifeBar">
      <p>
        HP :{progress}/{enemyHP}
      </p>
      <progress id="file" max={enemyHP} value={progress} />
    </div>
  );
}
