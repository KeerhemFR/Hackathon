import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseChar from './components/ChooseChar';
import Game from './components/Game';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChooseChar" element={<ChooseChar />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
