import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function LifeBar({ ennemyFan }) {
  const enemyHP = Math.floor(ennemyFan / 1000);
  const clickPower = 100;

  const [progress, setProgress] = useState(enemyHP);
  if (progress < 0) {
    setProgress(0);
  }
  console.log(enemyHP);
  console.log(progress);
  return (
    <div className="LifeBar">
      <div className="button-bar">
        <button
          className="attackBtn"
          type="submit"
          onClick={() => setProgress(progress - clickPower)}
        >
          Attack
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

LifeBar.propTypes = {
  ennemyFan: PropTypes.number.isRequired,
};
