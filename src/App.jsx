import { Routes, Route } from 'react-router-dom';
import GameContext from 'context/GameContext';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import ChooseChar from './components/ChooseChar';
import Game from './components/Game';

import './reset.css';
import './App.css';

function App() {
  const [ennemyInfos, setEnnemyInfos] = useState([]);
  const [ennemyFan, setEnnemyFan] = useState(1000000);

  const [progress, setProgress] = useState(Math.floor(ennemyFan / 1000));
  const [enemyHP, setEnemyHP] = useState(Math.floor(ennemyFan / 1000));
  const [clickPower] = useState(100);
  const [ennemySelect, setEnnemySelect] = useState(0);
  const [ennemyIsDead, setEnnemyIsDead] = useState(false);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    setProgress(Math.floor(ennemyFan / 1000));
    setEnemyHP(Math.floor(ennemyFan / 1000));
  }, [ennemyFan]);
  console.log('progress:', progress);
  return (
    <>
      <GameContext.Provider
        value={{
          progress,
          setProgress,
          ennemyInfos,
          setEnnemyInfos,
          enemyHP,
          ennemyFan,
          setEnnemyFan,
          clickPower,
          setEnnemySelect,
          ennemySelect,
          ennemyIsDead,
          setEnnemyIsDead,
          seconds,
          setSeconds,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChooseChar" element={<ChooseChar />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </GameContext.Provider>
    </>
  );
}

export default App;
