import { Routes, Route } from 'react-router-dom';
import GameContext from 'context/GameContext';
import { useState, useEffect } from 'react';
import GameOver from 'components/GameOver';
import Home from './components/Home';
import ChooseChar from './components/ChooseChar';
import Game from './components/Game';

import './reset.css';
import './App.css';

function App() {
  const [ennemyInfos, setEnnemyInfos] = useState([]);
  const [ennemyFan, setEnnemyFan] = useState(1000000);

  const [progress, setProgress] = useState(Math.floor(ennemyFan / 100));
  const [enemyHP, setEnemyHP] = useState(Math.floor(ennemyFan / 100));
  const [clickPower] = useState(10);
  const [ennemySelect, setEnnemySelect] = useState(0);
  const [ennemyIsDead, setEnnemyIsDead] = useState(false);
  const [seconds, setSeconds] = useState(120);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    setProgress(Math.floor(ennemyFan / 100));
    setEnemyHP(Math.floor(ennemyFan / 100));
  }, [ennemyFan]);

  return (
    <>
      <GameContext.Provider
        value={{
          picture,
          setPicture,
          name,
          setName,
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
          <Route path="/GameOver" element={<GameOver />} />
        </Routes>
      </GameContext.Provider>
    </>
  );
}

export default App;
