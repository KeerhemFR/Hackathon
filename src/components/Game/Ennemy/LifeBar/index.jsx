import { useState } from 'react';
import './style.css';

export default function LifeBar() {
  const enemyHP = 414;
  const clickPower = 5;
  const [progress, setProgress] = useState(enemyHP);

  return (
    <div className="LifeBar">
      <div className="button-bar">
        <button
          type="submit"
          onClick={() => setProgress(progress - clickPower)}
        >
          Attaque
        </button>
        <button type="submit" onClick={() => setProgress(enemyHP)}>
          Healing
        </button>
      </div>

      <p>
        HP :{progress}/{enemyHP}
      </p>
      <progress id="file" max={enemyHP} value={progress} />
    </div>
  );
}
