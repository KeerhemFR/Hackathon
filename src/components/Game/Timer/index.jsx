import { useState, useEffect } from 'react';
import './style.css';

export default function Timer() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('0');
    }
  });

  return (
    <div className="timer">
      <p>{seconds}</p>
    </div>
  );
}
