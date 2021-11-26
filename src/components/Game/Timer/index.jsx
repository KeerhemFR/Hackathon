import GameContext from 'context/GameContext';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Timer() {
  const { seconds, setSeconds } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('0');
    }
    if (seconds === 0) {
      navigate('/GameOver');
      setSeconds('30');
    }
  }, [seconds]);

  return (
    <div className="timerContain">
      <div className="timer">
        <p>{seconds}</p>
      </div>
    </div>
  );
}
